import { NextResponse } from 'next/server';
import { appendToJsonFile, readJsonFile } from '@/lib/github-db';
import { sendToClient, sendToAdmin } from '@/lib/email';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await verifyToken(token);
    if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { to, subject, html, template, clientName, projectName } = await request.json();

    const record = {
      to,
      subject,
      template,
      clientName,
      projectName,
      sentBy: payload.email,
      timestamp: new Date().toISOString(),
    };

    await appendToJsonFile('correspondence.json', record);

    // Send email
    const result = await sendToClient(to, subject, html);
    // Also send copy to admin
    await sendToAdmin(`COPY: ${subject} (to ${clientName})`, html);

    return NextResponse.json({ success: result.success });
  } catch (error) {
    console.error('Correspondence error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await verifyToken(token);
    if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const correspondence = await readJsonFile('correspondence.json');
    return NextResponse.json({ correspondence: (correspondence || []).reverse() });
  } catch {
    return NextResponse.json({ correspondence: [] });
  }
}
