'use client';
import { useState } from 'react';
import Link from 'next/link';
import { services, pricing, additionalProducts, featuredProjects, testimonials } from '@/data';
import { blogPosts } from '@/data/blog';
import { products } from '@/data/products';
import ScrollReveal from '@/components/ScrollReveal';
import { Check, X, ArrowRight, ArrowUpRight, Star, Zap, Shield, Clock, Quote, Calendar } from 'lucide-react';

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <ScrollReveal>
      <div className="text-center mb-14">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
          {eyebrow}
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight">{title}</h2>
        {sub && <p className="text-text-muted max-w-xl mx-auto mt-4">{sub}</p>}
      </div>
    </ScrollReveal>
  );
}

export default function Home() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
    } catch {}
    setContactSubmitted(true);
    form.reset();
  };

  return (
    <div className="overflow-x-clip">
      {/* ================= Hero ================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-grid" />
        <div className="aurora-blob w-[560px] h-[560px] bg-accent/25 -top-40 -left-40 animate-float-slow" />
        <div className="aurora-blob w-[520px] h-[520px] bg-accent-glow/15 top-1/3 -right-48 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="aurora-blob w-[420px] h-[420px] bg-gold-dark/20 bottom-0 left-1/3" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center py-24">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass border border-accent/30 rounded-full px-4 py-2 mb-8 shadow-[0_0_32px_rgba(110,99,246,0.25)]">
              <Zap size={15} className="text-accent-glow" />
              <span className="text-sm text-gold-pale font-medium">24-Hour Website Delivery Available</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.25rem] font-extrabold mb-7 leading-[1.05] font-display tracking-tight">
              Your Vision.<br />
              <span className="text-aurora">Our Creativity.</span><br />
              Online Success.
            </h1>
            <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Professional website development and AI automation for Kenyan businesses.
              Lightning-fast sites, intelligent agents, and WhatsApp automation — all from Nairobi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-gradient-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 shadow-[0_12px_40px_rgba(110,99,246,0.4)] hover:shadow-[0_16px_48px_rgba(110,99,246,0.55)]">
                View Pricing <ArrowRight size={20} />
              </Link>
              <Link href="/portfolio/" className="glass border border-border text-text px-8 py-4 rounded-full font-bold text-lg hover:border-accent/60 transition-colors inline-flex items-center justify-center gap-2">
                See Our Work <ArrowUpRight size={20} />
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 text-text-muted text-sm">
              <span className="flex items-center gap-2"><Shield size={16} className="text-accent-glow" /> Secure &amp; Fast</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-accent-glow" /> 24h Delivery</span>
              <span className="flex items-center gap-2"><Star size={16} className="text-accent-glow" /> 5-Star Rated</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section id="services" className="py-24 px-4 relative">
        <div className="max-w-site mx-auto">
          <SectionHeader
            eyebrow="What we do"
            title="Our Services"
            sub="Everything you need to establish and grow your online presence"
          />
          <div id="about" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.06}>
                <div className="group bg-card border border-border rounded-3xl overflow-hidden card-hover h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-5 font-display text-4xl font-extrabold text-white/15 group-hover:text-accent-glow/40 transition-colors">{s.num}</span>
                  </div>
                  <div className="p-6 pt-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 font-display group-hover:text-gold-bright transition-colors">{s.title}</h3>
                    <p className="text-text-muted text-sm flex-1 leading-relaxed">{s.desc}</p>
                    {s.price && <p className="text-gradient-gold font-bold mt-4 font-display">{s.price}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Pricing ================= */}
      <section id="pricing" className="py-24 px-4 bg-primary-light/60 relative">
        <div className="aurora-blob w-[500px] h-[500px] bg-accent/10 top-0 right-0" />
        <div className="max-w-site mx-auto relative">
          <SectionHeader
            eyebrow="Pricing"
            title="Transparent Pricing"
            sub="No hidden fees. Choose the package that fits your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricing.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.08}>
                <div className={`rounded-3xl p-7 relative card-hover h-full flex flex-col ${
                  p.popular ? 'border-glow shadow-[0_20px_60px_rgba(110,99,246,0.25)]' : 'bg-card border border-border'
                }`}>
                  {p.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-white text-[11px] font-bold tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-1 font-display">{p.name}</h3>
                  <p className="text-text-muted text-sm mb-5">{p.subtitle}</p>
                  <div className="text-3xl font-extrabold text-gradient-gold mb-7 font-display">{p.price}</div>
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
                  <Link href="/get-started/" className={`mt-7 w-full py-3.5 rounded-full font-bold text-center transition-all ${
                    p.popular
                      ? 'bg-gradient-gold text-white hover:opacity-90 shadow-[0_8px_28px_rgba(110,99,246,0.35)]'
                      : 'border border-border text-text hover:border-accent/60'
                  }`}>
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Add-On Services */}
          <ScrollReveal>
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-8 font-display">Add-On Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalProducts.map((a) => (
                  <div key={a.name} className="bg-card border border-border rounded-2xl p-5 flex justify-between items-start gap-4 hover:border-accent/40 transition-colors">
                    <div>
                      <h4 className="font-bold text-sm">{a.name}</h4>
                      <p className="text-text-muted text-xs mt-1">{a.desc}</p>
                    </div>
                    <span className="text-gradient-gold font-bold text-sm whitespace-nowrap font-display">{a.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= Products ================= */}
      <section id="products" className="py-24 px-4">
        <div className="max-w-site mx-auto">
          <SectionHeader
            eyebrow="Products"
            title="Our Products"
            sub="Ready-to-deploy digital products — from AI agents to payment integrations — built for Kenyan businesses"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.06}>
                <Link href={`/products/${p.slug}/`} className="block bg-card border border-border rounded-3xl overflow-hidden card-hover group h-full">
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                    <span className="absolute top-3.5 left-3.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-gold text-white shadow-lg">{p.badge}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg leading-snug group-hover:text-gold-bright transition-colors">{p.name}</h3>
                    <p className="text-text-muted text-sm mt-2 line-clamp-2">{p.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/60">
                      <span className="text-gradient-gold font-bold text-sm font-display">{p.price}</span>
                      <span className="inline-flex items-center gap-1 text-sm text-text-muted group-hover:text-text transition-colors">
                        View Product <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Featured Work ================= */}
      <section className="py-24 px-4 bg-primary-light/60 relative">
        <div className="aurora-blob w-[460px] h-[460px] bg-accent-glow/8 bottom-0 left-0" />
        <div className="max-w-site mx-auto relative">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Work"
            sub="Websites and apps we've built for businesses like yours"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.06}>
                <Link href="/portfolio/" className="block bg-card border border-border rounded-3xl overflow-hidden card-hover group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6 pt-4">
                    <span className="text-accent-glow text-[11px] font-bold uppercase tracking-[0.18em]">{p.category}</span>
                    <h3 className="text-lg font-bold mt-1.5 font-display group-hover:text-gold-bright transition-colors">{p.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio/" className="inline-flex items-center gap-2 border border-border rounded-full px-7 py-3.5 font-bold hover:border-accent/60 transition-colors">
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Testimonials" title="What Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-3xl p-7 h-full flex flex-col card-hover">
                  <Quote size={28} className="text-accent/50 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={15} className="text-accent-glow fill-accent-glow" />)}
                  </div>
                  <p className="text-text-muted text-sm mb-6 italic leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                    <span className="w-10 h-10 rounded-full bg-gradient-gold text-white font-display font-bold flex items-center justify-center text-sm shrink-0">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    <div>
                      <p className="font-bold text-sm">{t.name}</p>
                      <p className="text-text-dark text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Blog ================= */}
      <section className="py-24 px-4 bg-primary-light/60">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="Insights" title="Latest Insights" />
          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={Math.min(i, 5) * 0.05}>
                <Link href={`/blog/${post.slug}/`} className="block bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all group card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-accent-glow text-[11px] font-bold uppercase tracking-[0.16em]">{post.category}</span>
                        <span className="flex items-center gap-1 text-text-dark text-xs"><Calendar size={11} /> {post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold font-display group-hover:text-gold-bright transition-colors">{post.title}</h3>
                      <p className="text-text-muted text-sm mt-1.5 line-clamp-2">{post.excerpt}</p>
                    </div>
                    <span className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-dark group-hover:text-white group-hover:bg-gradient-gold group-hover:border-transparent transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog/" className="inline-flex items-center gap-2 border border-border rounded-full px-7 py-3.5 font-bold hover:border-accent/60 transition-colors">
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="aurora-blob w-[520px] h-[520px] bg-accent/12 top-10 -right-40" />
        <div className="max-w-2xl mx-auto relative">
          <SectionHeader
            eyebrow="Contact"
            title="Get In Touch"
            sub="Ready to start your project? Reach out and we will respond within 2 hours."
          />
          <ScrollReveal>
            {contactSubmitted ? (
              <div className="border-glow rounded-3xl p-10 text-center">
                <span className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-success" />
                </span>
                <h3 className="text-2xl font-bold mb-2 font-display">Message Sent!</h3>
                <p className="text-text-muted">We will get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="bg-card border border-border rounded-3xl p-6 sm:p-9 space-y-5 shadow-[0_24px_64px_rgba(2,4,12,0.4)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name</label>
                    <input name="name" type="text" required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input name="phone" type="tel" placeholder="+254 7XX XXX XXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Service Interested In</label>
                  <select name="service" required>
                    <option value="">Select a service...</option>
                    <option value="website">Website Development</option>
                    <option value="ai-calling">AI Calling Agents</option>
                    <option value="whatsapp">WhatsApp Automation</option>
                    <option value="e-shop">E-Shop Design</option>
                    <option value="web-app">Web App + Android</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea name="message" rows={4} required placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full bg-gradient-gold text-white py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_12px_36px_rgba(110,99,246,0.35)]">
                  Send Message
                </button>
                <p className="text-center text-text-dark text-xs">
                  Or WhatsApp us directly: <a href="https://wa.me/254106216699" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">+254 106 216 699</a>
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
