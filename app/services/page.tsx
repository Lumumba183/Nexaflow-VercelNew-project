import type { Metadata } from 'next';
import { services } from '@/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | NexaFlow Digital — Website Development & AI Automation Kenya',
  description: 'Explore our full range of services: website development, AI calling agents, WhatsApp automation, e-shop design, and more. Nairobi-based, serving globally.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/services' }, openGraph: { url: 'https://www.nexaflow-digital.com/services' },
};

export default function ServicesPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[480px] h-[480px] bg-accent/12 -top-32 -right-40" />
      <div className="max-w-site mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            What we do
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Our Services</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            From lightning-fast websites to intelligent AI agents, we build solutions that drive real business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-3xl overflow-hidden card-hover flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute bottom-3 left-5 font-display text-4xl font-extrabold text-white/15 group-hover:text-accent-glow/40 transition-colors">{s.num}</span>
              </div>
              <div className="p-6 pt-4 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-2 font-display group-hover:text-gold-bright transition-colors">{s.title}</h2>
                <p className="text-text-muted text-sm mb-4 flex-1 leading-relaxed">{s.desc}</p>
                {s.price && <p className="text-gradient-gold font-bold mb-4 font-display">{s.price}</p>}
                <Link href="/pricing/" className="inline-flex items-center gap-2 text-gold text-sm font-bold hover:text-gold-bright transition-colors">
                  View Pricing <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 border-glow rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="aurora-blob w-[360px] h-[360px] bg-accent/15 -top-40 -left-24" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">Not sure what you need?</h2>
            <p className="text-text-muted mb-7">Book a free 15-minute consultation and we will recommend the perfect solution.</p>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-gradient-gold text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-[0_12px_36px_rgba(110,99,246,0.35)]">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
