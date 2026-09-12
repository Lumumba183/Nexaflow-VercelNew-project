import type { Metadata } from 'next';
import { projectCategories, portfolioStats } from '@/data';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | NexaFlow Digital — Website Development Projects Kenya',
  description: 'View our portfolio of 30+ websites, e-commerce stores, and AI automation projects built for Kenyan and international businesses.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/portfolio' }, openGraph: { url: 'https://www.nexaflow-digital.com/portfolio' },
};

export default function PortfolioPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[520px] h-[520px] bg-accent/12 -top-40 -right-40" />
      <div className="max-w-site mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Our Portfolio</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            {portfolioStats.totalProjects} live websites and platforms built for businesses across Kenya and beyond — every card opens the real, live site.
          </p>
          <div className="flex justify-center gap-6 sm:gap-10 mt-10">
            <div className="glass border border-border rounded-2xl px-6 sm:px-10 py-5 text-center">
              <div className="text-3xl font-extrabold text-gradient-gold font-display">{portfolioStats.totalProjects}+</div>
              <div className="text-text-muted text-[11px] uppercase tracking-[0.16em] mt-1">Projects Delivered</div>
            </div>
            <div className="glass border border-border rounded-2xl px-6 sm:px-10 py-5 text-center">
              <div className="text-3xl font-extrabold text-gradient-gold font-display">{portfolioStats.totalCategories}</div>
              <div className="text-text-muted text-[11px] uppercase tracking-[0.16em] mt-1">Industries</div>
            </div>
            <div className="glass border border-border rounded-2xl px-6 sm:px-10 py-5 text-center">
              <div className="text-3xl font-extrabold text-gradient-gold font-display">100%</div>
              <div className="text-text-muted text-[11px] uppercase tracking-[0.16em] mt-1">Live &amp; Running</div>
            </div>
          </div>
        </div>

        {projectCategories.map((cat) => (
          <section key={cat.id} className="mb-20">
            <div className="mb-7 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">{cat.label}</h2>
                <p className="text-text-muted text-sm mt-1.5">{cat.tagline}</p>
              </div>
              <div className="h-px flex-1 min-w-[60px] bg-gradient-to-r from-accent/40 to-transparent mb-2.5 hidden sm:block" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.projects.map((p) => (
                <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="bg-card border border-border rounded-3xl overflow-hidden card-hover group block hover:border-accent/40 transition-colors">
                  <div className="h-52 overflow-hidden relative">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    <span className="absolute top-3.5 left-3.5 glass text-accent-glow text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-accent/30">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-display group-hover:text-gold-bright transition-colors flex items-center gap-2">
                      {p.title}
                      <ArrowUpRight size={15} className="text-text-dark group-hover:text-accent-glow transition-colors shrink-0" />
                    </h3>
                    <p className="text-text-muted text-sm mt-2 line-clamp-3 leading-relaxed">{p.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-gold text-sm font-bold mt-4 group-hover:text-gold-bright transition-colors">
                      Visit Live Site <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-8 text-center border-glow rounded-3xl p-10 relative overflow-hidden">
          <div className="aurora-blob w-[360px] h-[360px] bg-accent/15 -bottom-40 -right-24" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-display">Want to see your project here?</h2>
            <p className="text-text-muted mb-7">Let us build something amazing for your business.</p>
            <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I%20want%20to%20start%20a%20project"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-white px-8 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-[0_12px_36px_rgba(110,99,246,0.35)]">
              Start Your Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
