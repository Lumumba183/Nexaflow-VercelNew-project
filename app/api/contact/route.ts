import { NextResponse } from 'next/server';
import { appendToJsonFile } from '@/lib/github-db';
import { sendToAdmin } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const timestamp = new Date().toISOString();

    const record = {
      ...data,
      ip,
      timestamp,
      type: 'contact',
    };

    await appendToJsonFile('contact-submissions.json', record);

    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><strong>Submitted:</strong> ${timestamp}</p>
    `;
    await sendToAdmin(`New Contact Form - ${data.name}`, adminHtml);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
