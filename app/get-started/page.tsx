import type { Metadata } from 'next';
import Link from 'next/link';
import { Eye, Shield, Check, ArrowRight, MessageCircle } from 'lucide-react';

const BASE = 'https://www.nexaflow-digital.com';

export const metadata: Metadata = {
  title: 'Get Started — Choose Your Contract Model | NexaFlow Digital',
  description: 'Two safe ways to begin your website project: the 24-Hour Preview — see your finished website before you pay — or a Direct Contract with escrow-protected staged payments via Upwork.',
  alternates: { canonical: `${BASE}/get-started` },
  openGraph: {
    url: `${BASE}/get-started`,
    title: 'Get Started — Choose Your Contract Model | NexaFlow Digital',
    description: 'See your finished website before you pay, or start with an escrow-protected direct contract. Two safe ways to begin.',
    images: ['/og-image.jpg'],
  },
};

export default function GetStartedPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[520px] h-[520px] bg-accent/12 -top-40 -left-40" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            Get Started
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Get Started — Choose Your Contract Model</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Two safe ways to begin your project. Pick the one that fits how you like to work —
            either way, you never pay for a promise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link href="/contract/preview/" className="bg-card border border-accent-glow/40 rounded-3xl p-8 card-hover block group">
            <div className="w-12 h-12 bg-accent-glow/10 border border-accent-glow/25 rounded-2xl flex items-center justify-center mb-5">
              <Eye size={24} className="text-accent-glow" />
            </div>
            <h2 className="text-xl font-bold mb-2 font-display">24-Hour Preview</h2>
            <p className="text-accent-glow text-sm font-bold mb-3">See It Before You Pay</p>
            <p className="text-text-muted text-sm mb-5 leading-relaxed">We build your full website first and hand you a live URL within 24 hours. You review everything, then pay. Strict qualification applies.</p>
            <ul className="space-y-2.5 text-sm mb-7">
              <li className="flex items-start gap-2.5"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>Pay only after you see your live website</span></li>
              <li className="flex items-start gap-2.5"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>100% payment within 24h of URL delivery</span></li>
              <li className="flex items-start gap-2.5"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>Trust-score verification required</span></li>
            </ul>
            <span className="inline-flex items-center gap-2 text-accent-glow font-bold group-hover:gap-3 transition-all">Apply for Preview <ArrowRight size={16} /></span>
          </Link>

          <Link href="/contract/direct/" className="bg-card border border-accent/40 rounded-3xl p-8 card-hover block group">
            <div className="w-12 h-12 bg-accent/10 border border-accent/25 rounded-2xl flex items-center justify-center mb-5">
              <Shield size={24} className="text-gold" />
            </div>
            <h2 className="text-xl font-bold mb-2 font-display">Direct Contract</h2>
            <p className="text-gold text-sm font-bold mb-3">Upwork-Protected Agreement</p>
            <p className="text-text-muted text-sm mb-5 leading-relaxed">Sign a project commitment agreement with staged payments. Ideal for businesses that prefer a formal contract from day one.</p>
            <ul className="space-y-2.5 text-sm mb-7">
              <li className="flex items-start gap-2.5"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>75% deposit after live URL delivery</span></li>
              <li className="flex items-start gap-2.5"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>25% before domain mapping &amp; handover</span></li>
              <li className="flex items-start gap-2.5"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>Full contractual protection via Upwork</span></li>
            </ul>
            <span className="inline-flex items-center gap-2 text-gold font-bold group-hover:gap-3 transition-all">Start Direct Contract <ArrowRight size={16} /></span>
          </Link>
        </div>

        {/* How it works */}
        <div className="mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 font-display tracking-tight">What happens after you apply</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { title: 'You apply', desc: 'Fill in the short contract form for the model you chose — it takes under five minutes.' },
              { title: 'We confirm & build', desc: 'We review your application, agree the scope in writing, then build your complete website.' },
              { title: 'You review, then pay', desc: 'You inspect the finished site live. Only then does payment happen — under the terms you chose.' },
            ].map((s, i) => (
              <li key={i} className="p-7 bg-card border border-border rounded-3xl card-hover">
                <span className="w-11 h-11 rounded-full bg-gradient-gold text-white font-display font-bold flex items-center justify-center mb-5 shadow-[0_8px_24px_rgba(110,99,246,0.35)]">{i + 1}</span>
                <h3 className="font-bold mb-2 font-display">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Help */}
        <div className="mt-20 border-glow rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="aurora-blob w-[360px] h-[360px] bg-accent/15 -bottom-40 -left-24" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">Not sure which model fits you?</h2>
            <p className="text-text-muted mb-7 max-w-xl mx-auto">
              Message us on WhatsApp and we will recommend the safest option for your situation —
              no obligation.
            </p>
            <a
              href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I%20want%20to%20start%20a%20project%20—%20which%20contract%20model%20fits%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-[0_12px_36px_rgba(110,99,246,0.35)]"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
