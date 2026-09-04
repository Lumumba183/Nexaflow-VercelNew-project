import { NextResponse } from 'next/server';
import { appendToJsonFile } from '@/lib/github-db';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const country = request.headers.get('x-vercel-ip-country') || 'unknown';
    const city = request.headers.get('x-vercel-ip-city') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const record = {
      page: data.page,
      referrer: data.referrer,
      ip,
      country,
      city,
      userAgent,
      timestamp: new Date().toISOString(),
    };

    await appendToJsonFile('visitors.json', record);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: true });
  }
}
