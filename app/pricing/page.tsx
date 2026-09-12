import type { Metadata } from 'next';
import { pricing, additionalProducts } from '@/data';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | NexaFlow Digital — Transparent Website Pricing Kenya',
  description: 'Clear, upfront pricing for website development in Kenya. Starter KSH 18,000, Business KSH 35,000, Premium KSH 65,000, Enterprise KSH 120,000. No hidden fees.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/pricing' }, openGraph: { url: 'https://www.nexaflow-digital.com/pricing' },
};

export default function PricingPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[520px] h-[520px] bg-accent/12 -top-40 -left-40" />
      <div className="max-w-site mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Transparent Pricing</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            No hidden fees. No surprises. Choose the package that fits your business and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricing.map((p) => (
            <div key={p.name} className={`rounded-3xl p-7 relative card-hover flex flex-col ${
              p.popular ? 'border-glow shadow-[0_20px_60px_rgba(110,99,246,0.25)]' : 'bg-card border border-border'
            }`}>
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-white text-[11px] font-bold tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <h2 className="text-lg font-bold mb-1 font-display">{p.name}</h2>
              <p className="text-text-muted text-sm mb-5">{p.subtitle}</p>
              <div className="text-3xl font-extrabold text-gradient-gold mb-1.5 font-display">{p.price}</div>
              <p className="text-text-dark text-xs mb-7">~${p.usdPrice} USD</p>
              <ul className="space-y-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 shrink-0 w-[18px] h-[18px] rounded-full bg-success/15 flex items-center justify-center">
                      <Check size={12} className="text-success" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
                {p.notIncluded.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-text-dark">
                    <X size={16} className="mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 space-y-3">
                <Link href="/contract/direct/" className={`block w-full py-3 rounded-full font-bold text-center transition-all ${
                  p.popular
                    ? 'bg-gradient-gold text-white hover:opacity-90 shadow-[0_8px_28px_rgba(110,99,246,0.35)]'
                    : 'border border-border text-text hover:border-accent/60'
                }`}>
                  Direct Contract
                </Link>
                <Link href="/contract/preview/" className="block w-full py-2.5 rounded-full font-bold text-center text-sm border border-border text-text-muted hover:border-accent/50 hover:text-text transition-colors">
                  See Before You Pay
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 font-display">Add-On Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProducts.map((a) => (
              <div key={a.name} className="bg-card border border-border rounded-2xl p-5 flex justify-between items-start gap-4 hover:border-accent/40 transition-colors">
                <div>
                  <h3 className="font-bold text-sm">{a.name}</h3>
                  <p className="text-text-muted text-xs mt-1">{a.desc}</p>
                </div>
                <span className="text-gradient-gold font-bold text-sm whitespace-nowrap font-display">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
