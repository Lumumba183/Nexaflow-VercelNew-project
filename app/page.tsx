'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services, pricing, additionalProducts, featuredProjects, testimonials, GOLD, GOLD_BRIGHT } from '@/data';
import { blogPosts } from '@/data/blog';
import { Check, X, ArrowRight, Star, Zap, Shield, Clock, ChevronRight, Eye } from 'lucide-react';

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(node);
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    }}>{children}</div>
  );
}

export default function Home() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
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
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,162,39,0.1) 0%, transparent 50%)'
        }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-card/80 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-gold" />
              <span className="text-sm text-gold-pale">24-Hour Website Delivery Available</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-display">
              Your Vision.<br />
              <span className="text-gradient-gold">Our Creativity.</span><br />
              Online Success.
            </h1>
            <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-8">
              Professional website development and AI automation for Kenyan businesses. 
              Lightning-fast sites, intelligent agents, and WhatsApp automation — all from Nairobi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-gradient-gold text-primary px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2">
                View Pricing <ArrowRight size={20} />
              </Link>
              <Link href="/portfolio/" className="border border-gold text-gold px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold/10 transition-colors inline-flex items-center justify-center gap-2">
                See Our Work <ArrowRight size={20} />
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-text-muted text-sm">
              <span className="flex items-center gap-2"><Shield size={16} className="text-gold" /> Secure & Fast</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-gold" /> 24h Delivery</span>
              <span className="flex items-center gap-2"><Star size={16} className="text-gold" /> 5-Star Rated</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">Our Services</h2>
              <p className="text-text-muted max-w-xl mx-auto">Everything you need to establish and grow your online presence</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-gold text-sm font-bold mb-2">{s.num}</span>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-text-muted text-sm flex-1">{s.desc}</p>
                    {s.price && <p className="text-gold font-bold mt-3">{s.price}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-primary-light/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">Transparent Pricing</h2>
              <p className="text-text-muted max-w-xl mx-auto">No hidden fees. Choose the package that fits your business.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className={`bg-card border rounded-2xl p-6 relative card-hover h-full flex flex-col ${p.popular ? 'border-gold' : 'border-border'}`}>
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{p.subtitle}</p>
                  <div className="text-3xl font-extrabold text-gradient-gold mb-6">{p.price}</div>
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
                  <Link href="#get-started" className={`mt-6 w-full py-3 rounded-xl font-bold text-center transition-colors ${
                    p.popular ? 'bg-gradient-gold text-primary' : 'border border-gold text-gold hover:bg-gold/10'
                  }`}>
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Get Started — Choose Your Contract Model */}
          <ScrollReveal>
            <div id="get-started" className="mt-20 scroll-mt-24">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">Get Started — Choose Your Contract Model</h3>
                <p className="text-text-muted max-w-xl mx-auto">Two safe ways to begin your project. Pick the one that fits how you like to work.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Link href="/contract/preview/" className="bg-card border border-accent/40 rounded-2xl p-8 card-hover block group">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <Eye size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">24-Hour Preview</h4>
                  <p className="text-accent text-sm font-bold mb-3">See It Before You Pay</p>
                  <p className="text-text-muted text-sm mb-5">We build your full website first and hand you a live URL within 24 hours. You review everything, then pay. Strict qualification applies.</p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-start gap-2"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>Pay only after you see your live website</span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>100% payment within 24h of URL delivery</span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>Trust-score verification required</span></li>
                  </ul>
                  <span className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all">Apply for Preview <ArrowRight size={16} /></span>
                </Link>
                <Link href="/contract/direct/" className="bg-card border border-gold/40 rounded-2xl p-8 card-hover block group">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                    <Shield size={24} className="text-gold" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Direct Contract</h4>
                  <p className="text-gold text-sm font-bold mb-3">Upwork-Protected Agreement</p>
                  <p className="text-text-muted text-sm mb-5">Sign a project commitment agreement with staged payments. Ideal for businesses that prefer a formal contract from day one.</p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex items-start gap-2"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>75% deposit after live URL delivery</span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>25% before domain mapping & handover</span></li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-success mt-0.5 shrink-0" /><span>Full contractual protection via Upwork</span></li>
                  </ul>
                  <span className="inline-flex items-center gap-2 text-gold font-bold group-hover:gap-3 transition-all">Start Direct Contract <ArrowRight size={16} /></span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Additional Products */}
          <ScrollReveal>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8 font-display">Add-On Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalProducts.map((a, i) => (
                  <div key={a.name} className="bg-card border border-border rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm">{a.name}</h4>
                      <p className="text-text-muted text-xs">{a.desc}</p>
                    </div>
                    <span className="text-gold font-bold text-sm whitespace-nowrap">{a.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">Featured Work</h2>
              <p className="text-text-muted max-w-xl mx-auto">Websites and apps we've built for businesses like yours</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <Link href="/portfolio/" className="block bg-card border border-border rounded-2xl overflow-hidden card-hover group">
                  <div className="h-52 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-lg font-bold mt-1">{p.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio/" className="inline-flex items-center gap-2 text-gold font-bold hover:underline">
              View Full Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-primary-light/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">What Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="text-gold fill-gold" />)}
                  </div>
                  <p className="text-text-muted text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-text-dark text-xs">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">Latest Insights</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}/`} className="block bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-gold text-xs font-bold uppercase">{post.category}</span>
                      <h3 className="text-lg font-bold mt-1 group-hover:text-gold transition-colors">{post.title}</h3>
                      <p className="text-text-muted text-sm mt-1">{post.excerpt}</p>
                    </div>
                    <ChevronRight size={20} className="text-text-dark group-hover:text-gold shrink-0" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-gold font-bold hover:underline">
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-primary-light/50">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-display">Get In Touch</h2>
              <p className="text-text-muted">Ready to start your project? Reach out and we will respond within 2 hours.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            {contactSubmitted ? (
              <div className="bg-card border border-success/30 rounded-2xl p-8 text-center">
                <Check size={48} className="text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-text-muted">We will get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <button type="submit" className="w-full bg-gradient-gold text-primary py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
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
