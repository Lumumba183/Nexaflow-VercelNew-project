import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  products, getProduct, type Product, type ProductBlock,
} from '@/data/products';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react';

const BASE = 'https://www.nexaflow-digital.com';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const url = `${BASE}/products/${p.slug}`;
  return {
    title: `${p.name} | NexaFlow Digital Products`,
    description: p.tagline,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.name} — ${p.tagline}`,
      description: p.excerpt,
      url,
      images: [{ url: p.img, width: 1200, height: 630, alt: p.name }],
    },
  };
}

function BlockTitle({ t }: { t: string }) {
  return <h2 className="font-display text-3xl font-bold mb-8">{t}</h2>;
}

function Block({ b }: { b: ProductBlock }) {
  switch (b.kind) {
    case 'intro':
      return (
        <div className="space-y-5">
          {b.paragraphs.map((t, i) => (
            <p key={i} className="text-lg text-text-muted leading-relaxed">{t}</p>
          ))}
        </div>
      );
    case 'features':
      return (
        <div>
          <BlockTitle t={b.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {b.items.map((f, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-2xl card-hover">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="font-display font-semibold mt-3 mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'steps':
      return (
        <div>
          <BlockTitle t={b.title} />
          <ol className="space-y-5">
            {b.items.map((s, i) => (
              <li key={i} className="flex gap-5 p-5 bg-card border border-border rounded-2xl card-hover">
                <span className="shrink-0 w-11 h-11 rounded-full bg-gradient-gold text-primary font-display font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold flex flex-wrap items-center gap-2">
                    {s.title}
                    {s.time && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/30">{s.time}</span>
                    )}
                  </h3>
                  <p className="text-text-muted text-sm mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    case 'packages':
      return (
        <div>
          <BlockTitle t={b.title} />
          {b.note && <p className="text-text-muted max-w-2xl mb-8 -mt-4">{b.note}</p>}
          <div className={`grid gap-5 ${
            b.items.length === 2 ? 'md:grid-cols-2'
            : b.items.length === 4 ? 'sm:grid-cols-2'
            : 'md:grid-cols-3'
          }`}>
            {b.items.map((pk, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border card-hover flex flex-col ${
                  pk.featured
                    ? 'bg-card border-2 border-gold relative'
                    : 'bg-card border-border'
                }`}
              >
                {pk.featured && (
                  <span className="absolute -top-3 left-6 bg-gradient-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-lg">{pk.name}</h3>
                <div className="text-gold font-display text-2xl font-bold mt-2">{pk.price}</div>
                {pk.priceNote && <p className="text-text-muted text-sm mt-1">{pk.priceNote}</p>}
                <ul className="mt-4 space-y-2 flex-1">
                  {pk.features.map((f, j) => (
                    <li key={j} className="flex gap-2 text-sm text-text-muted">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                {pk.cta && (
                  <Link
                    href={pk.cta.href}
                    className={`mt-6 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 ${
                      pk.featured
                        ? 'bg-gradient-gold text-primary'
                        : 'border border-gold text-gold'
                    }`}
                  >
                    {pk.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    case 'list':
      return (
        <div>
          <BlockTitle t={b.title} />
          <ul className="grid sm:grid-cols-2 gap-3">
            {b.items.map((t, i) => (
              <li key={i} className="flex gap-2.5 text-text-muted bg-card border border-border rounded-xl px-4 py-3 text-sm">
                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {t}
              </li>
            ))}
          </ul>
        </div>
      );
    case 'table':
      return (
        <div>
          <BlockTitle t={b.title} />
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card text-left">
                  {b.headers.map((h, i) => (
                    <th key={i} className="px-5 py-3.5 font-semibold text-gold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    {r.map((c, j) => (
                      <td key={j} className={`px-5 py-3.5 ${j === 0 ? 'font-medium' : 'text-text-muted'}`}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'callout':
      return (
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/30">
          <h2 className="font-display text-2xl font-bold mb-3">{b.title}</h2>
          <p className="leading-relaxed text-text-muted">{b.text}</p>
        </div>
      );
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.tagline,
    image: p.img,
    brand: { '@type': 'Organization', name: 'NexaFlow Digital' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'KES',
      description: p.price,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'NexaFlow Digital' },
    },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE}/products` },
      { '@type': 'ListItem', position: 3, name: p.name, item: `${BASE}/products/${p.slug}` },
    ],
  };

  const others = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="pt-28 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Link href="/products/" className="inline-flex items-center gap-2 text-text-muted hover:text-gold transition-colors text-sm mb-8">
              <ArrowLeft className="w-4 h-4" /> All Products
            </Link>

            {/* Hero card */}
            <div className="relative rounded-3xl overflow-hidden border border-border mb-4">
              <img src={p.img} alt={p.name} className="w-full h-auto block" />
              <span className="absolute top-5 left-5 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-gold text-primary">
                {p.badge}
              </span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-6 mb-14">
              <div>
                <div className="text-gold font-display font-bold text-2xl">{p.price}</div>
                {p.priceNote && <div className="text-text-muted text-sm">{p.priceNote}</div>}
              </div>
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-sm text-gold hover:underline">
                  {p.liveLabel || 'See it live'} <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {p.blocks.map((b, i) => (
              <ScrollReveal key={i}>
                <Block b={b} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal className="mt-20">
            <div className="rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-gold/15 via-card to-card border border-gold/30">
              <h2 className="font-display text-3xl font-bold mb-3">Ready to get {p.name}?</h2>
              <p className="text-text-muted max-w-xl mx-auto mb-8">
                Message us on WhatsApp and we'll scope it out for your business — most projects kick off within days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/254106216699?text=${encodeURIComponent(`Hi NexaFlow, I'm interested in ${p.name}.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-full hover:border-gold/60 transition-colors">
                  Contact Form
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Related */}
          <ScrollReveal className="mt-24">
            <h2 className="font-display text-2xl font-bold mb-6">More products</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {others.map((o) => (
                <Link key={o.slug} href={`/products/${o.slug}/`}
                      className="group bg-card border border-border rounded-2xl overflow-hidden card-hover block">
                  <div className="relative h-32 overflow-hidden">
                    <img src={o.img} alt={o.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold group-hover:text-gold transition-colors">{o.name}</h3>
                    <div className="text-gold text-sm font-semibold mt-1">{o.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
