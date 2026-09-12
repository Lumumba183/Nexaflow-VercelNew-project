'use client';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('nf_consent')) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] max-w-[560px] w-[calc(100%-2rem)] glass border border-accent/40 rounded-2xl p-4 flex items-center gap-4 flex-wrap shadow-[0_16px_48px_rgba(2,4,12,0.6)]">
      <p className="m-0 text-sm text-text-muted flex-1 min-w-[240px] leading-relaxed">
        We use cookies to analyse traffic and improve your experience. By continuing, you agree to our{' '}
        <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>.
      </p>
      <button
        onClick={() => { localStorage.setItem('nf_consent', '1'); setVisible(false); }}
        className="bg-gradient-gold text-white px-5 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Accept
      </button>
    </div>
  );
}
