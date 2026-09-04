import type { Metadata } from 'next';
import { pricing, additionalProducts } from '@/data';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | NexaFlow Digital — Transparent Website Pricing Kenya',
  description: 'Clear, upfront pricing for website development in Kenya. Starter KSH 18,000, Business KSH 35,000, Premium KSH 65,000, Enterprise KSH 120,000. No hidden fees.',
  alternates: { canonical: 'https://nexaflow-digital.com/pricing/' },
};

export default function PricingPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Transparent Pricing</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            No hidden fees. No surprises. Choose the package that fits your business and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((p) => (
            <div key={p.name} className={`bg-card border rounded-2xl p-6 relative card-hover flex flex-col ${p.popular ? 'border-gold' : 'border-border'}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h2 className="text-lg font-bold mb-1">{p.name}</h2>
              <p className="text-text-muted text-sm mb-4">{p.subtitle}</p>
              <div className="text-3xl font-extrabold text-gradient-gold mb-2">{p.price}</div>
              <p className="text-text-dark text-xs mb-6">~${p.usdPrice} USD</p>
              <ul className="space-y-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-success mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
                {p.notIncluded.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-dark">
                    <X size={16} className="mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <Link href="/contract/direct/" className={`block w-full py-3 rounded-xl font-bold text-center transition-colors ${
                  p.popular ? 'bg-gradient-gold text-primary' : 'border border-gold text-gold hover:bg-gold/10'
                }`}>
                  Direct Contract
                </Link>
                <Link href="/contract/preview/" className="block w-full py-2.5 rounded-xl font-bold text-center text-sm border border-text-muted text-text-muted hover:border-gold hover:text-gold transition-colors">
                  See Before You Pay
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 font-display">Add-On Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProducts.map((a) => (
              <div key={a.name} className="bg-card border border-border rounded-xl p-5 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm">{a.name}</h3>
                  <p className="text-text-muted text-xs mt-1">{a.desc}</p>
                </div>
                <span className="text-gold font-bold text-sm whitespace-nowrap ml-4">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
