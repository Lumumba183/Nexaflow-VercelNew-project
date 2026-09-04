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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] max-w-[560px] w-[calc(100%-2rem)] bg-[#0f172a] border border-gold rounded-xl p-4 flex items-center gap-4 flex-wrap shadow-2xl">
      <p className="m-0 text-sm text-[#cbd5e1] flex-1 min-w-[240px] leading-relaxed">
        We use cookies to analyse traffic and improve your experience. By continuing, you agree to our{' '}
        <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>.
      </p>
      <button
        onClick={() => { localStorage.setItem('nf_consent', '1'); setVisible(false); }}
        className="bg-gold text-primary px-5 py-2 rounded-lg font-bold text-sm hover:bg-gold-bright transition-colors"
      >
        Accept
      </button>
    </div>
  );
}
