'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Never count admin or API traffic in the public stats
    if (pathname.startsWith('/admin') || pathname.startsWith('/api')) return;

    // Count each page once per browser session (avoids double-fires
    // and repeat counts when navigating back and forth)
    const key = `nf_tracked_${pathname}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer || 'direct',
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
