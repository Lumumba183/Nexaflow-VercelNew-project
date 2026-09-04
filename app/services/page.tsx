import type { Metadata } from 'next';
import { services } from '@/data';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | NexaFlow Digital — Website Development & AI Automation Kenya',
  description: 'Explore our full range of services: website development, AI calling agents, WhatsApp automation, e-shop design, and more. Nairobi-based, serving globally.',
  alternates: { canonical: 'https://nexaflow-digital.com/services/' },
};

export default function ServicesPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Our Services</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            From lightning-fast websites to intelligent AI agents, we build solutions that drive real business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="bg-card border border-border rounded-2xl overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-gold text-sm font-bold">{s.num}</span>
                <h2 className="text-xl font-bold mt-1 mb-2">{s.title}</h2>
                <p className="text-text-muted text-sm mb-4">{s.desc}</p>
                {s.price && <p className="text-gold font-bold mb-4">{s.price}</p>}
                <Link href="/pricing/" className="inline-flex items-center gap-2 text-gold text-sm font-bold hover:underline">
                  View Pricing <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-accent/10 border border-gold/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3 font-display">Not sure what you need?</h2>
          <p className="text-text-muted mb-6">Book a free 15-minute consultation and we will recommend the perfect solution.</p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-gradient-gold text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
