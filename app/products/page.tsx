import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Our Products | NexaFlow Digital — AI Platforms, Payments & Growth Engines',
  description: 'Ready-made digital products by NexaFlow Digital: WeDial AI agent platform, Card Payment Integration, AutoDesk AI Publishing Agent and NexaReach client outreach engine — built, deployed and managed for you.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/products' },
  openGraph: {
    url: 'https://www.nexaflow-digital.com/products',
    title: 'Our Products | NexaFlow Digital',
    description: 'AI platforms, payment integrations, publishing automation and client outreach — ready-made products built, deployed and managed for your business.',
    images: ['/og-image.jpg'],
  },
};

export default function ProductsPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[520px] h-[520px] bg-accent/12 -top-40 -left-40" />
      <div className="max-w-site mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            Products
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Our Products</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Ready-made digital engines we install on your business — AI agents, card payments,
            automated publishing and client outreach. Proven in production, fully managed by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="block bg-card border border-border rounded-3xl overflow-hidden card-hover group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-gradient-gold text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                  {p.badge}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-bold font-display group-hover:text-gold-bright transition-colors">{p.name}</h2>
                  {p.liveUrl && (
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-xs text-success font-bold">
                      <span className="w-2 h-2 rounded-full bg-success inline-block animate-pulse-soft"></span> Live
                    </span>
                  )}
                </div>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-6">{p.excerpt}</p>
                <div className="flex items-center justify-between gap-3 flex-wrap pt-5 border-t border-border/60">
                  <div>
                    <div className="text-gradient-gold font-extrabold font-display">{p.price}</div>
                    {p.priceNote && <div className="text-text-dark text-xs mt-0.5">{p.priceNote}</div>}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-bold group-hover:text-gold-bright transition-colors">
                    View Product <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-glow rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="aurora-blob w-[360px] h-[360px] bg-accent/15 -top-40 -right-24" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">Not sure which product fits?</h2>
            <p className="text-text-muted mb-7 max-w-xl mx-auto">
              Tell us what you are trying to achieve — we will recommend the right product and give you
              an exact quote before any work begins.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I%20want%20to%20know%20more%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-[0_12px_36px_rgba(110,99,246,0.35)]"
              >
                Chat on WhatsApp
              </a>
              <Link
                href="/get-started/"
                className="border border-border text-text px-8 py-3.5 rounded-full font-bold hover:border-accent/60 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
