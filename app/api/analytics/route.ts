import { NextResponse } from 'next/server';
import { readJsonFile } from '@/lib/github-db';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const payload = await verifyToken(token);
    if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const [visitors, contacts, contractsDirect, contractsPreview] = await Promise.all([
      readJsonFile('visitors.json'),
      readJsonFile('contact-submissions.json'),
      readJsonFile('contracts-direct.json'),
      readJsonFile('contracts-preview.json'),
    ]);

    // Calculate stats
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      return d.toISOString().split('T')[0];
    }).reverse();

    const visitorsByDay = last7Days.map(day => ({
      date: day,
      count: (visitors || []).filter((v: any) => v.timestamp?.startsWith(day)).length,
    }));

    const visitorsToday = (visitors || []).filter((v: any) => v.timestamp?.startsWith(today)).length;
    const totalVisitors = (visitors || []).length;
    const totalContacts = (contacts || []).length;
    const totalContracts = (contractsDirect || []).length + (contractsPreview || []).length;

    // Top countries
    const countryCounts: Record<string, number> = {};
    (visitors || []).forEach((v: any) => {
      countryCounts[v.country] = (countryCounts[v.country] || 0) + 1;
    });
    const topCountries = Object.entries(countryCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    // Top pages
    const pageCounts: Record<string, number> = {};
    (visitors || []).forEach((v: any) => {
      pageCounts[v.page] = (pageCounts[v.page] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    return NextResponse.json({
      visitorsByDay,
      visitorsToday,
      totalVisitors,
      totalContacts,
      totalContracts,
      topCountries,
      topPages,
      recentContacts: (contacts || []).slice(-10).reverse(),
      recentContracts: [...(contractsDirect || []), ...(contractsPreview || [])].sort((a: any, b: any) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ).slice(0, 10),
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
