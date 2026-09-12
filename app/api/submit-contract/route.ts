import { NextResponse } from 'next/server';
import { appendToJsonFile } from '@/lib/github-db';
import { sendToAdmin, sendToClient } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const timestamp = new Date().toISOString();

    const record = {
      ...data,
      ip,
      timestamp,
      status: 'pending',
    };

    const fileName = data.model === 'direct' ? 'contracts-direct.json' : 'contracts-preview.json';
    await appendToJsonFile(fileName, record);

    // Send email to admin
    const adminHtml = `
      <h2>New ${data.model === 'direct' ? 'Direct Contract' : 'Preview'} Application</h2>
      <p><strong>Client:</strong> ${data.fullName || data.name}</p>
      <p><strong>Company:</strong> ${data.companyName || 'N/A'}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
      <p><strong>Project:</strong> ${data.projectName || 'N/A'}</p>
      ${data.trustScore ? `<p><strong>Trust Score:</strong> ${data.trustScore}/100</p>` : ''}
      <p><strong>Submitted:</strong> ${timestamp}</p>
    `;
    await sendToAdmin(`New ${data.model === 'direct' ? 'Direct Contract' : 'Preview'} - ${data.projectName || data.fullName}`, adminHtml);

    // Send confirmation to client
    const clientHtml = `
      <h2>Thank you for your submission, ${data.fullName || data.name}!</h2>
      <p>We have received your ${data.model === 'direct' ? 'Direct Contract agreement' : '24-Hour Preview application'}.</p>
      <p><strong>Project:</strong> ${data.projectName || 'N/A'}</p>
      <p>Our team will review your submission and respond within 4 hours.</p>
      <p>If you have any questions, reply to this email or WhatsApp us at +254 106 216 699.</p>
      <br/>
      <p>— NexaFlow Digital Team</p>
    `;
    await sendToClient(data.email, `NexaFlow Digital - ${data.model === 'direct' ? 'Agreement' : 'Application'} Received`, clientHtml);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submit contract error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
