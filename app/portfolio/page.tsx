import type { Metadata } from 'next';
import { projectCategories, portfolioStats } from '@/data';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | NexaFlow Digital — Website Development Projects Kenya',
  description: 'View our portfolio of 30+ websites, e-commerce stores, and AI automation projects built for Kenyan and international businesses.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/portfolio' }, openGraph: { url: 'https://www.nexaflow-digital.com/portfolio' },
};

export default function PortfolioPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Our Portfolio</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            {portfolioStats.totalProjects} live websites and platforms built for businesses across Kenya and beyond — every card opens the real, live site.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gradient-gold">{portfolioStats.totalProjects}+</div>
              <div className="text-text-muted text-xs uppercase tracking-wider mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gradient-gold">{portfolioStats.totalCategories}</div>
              <div className="text-text-muted text-xs uppercase tracking-wider mt-1">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-gradient-gold">100%</div>
              <div className="text-text-muted text-xs uppercase tracking-wider mt-1">Live &amp; Running</div>
            </div>
          </div>
        </div>

        {projectCategories.map((cat) => (
          <section key={cat.id} className="mb-16">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-display">{cat.label}</h2>
              <p className="text-text-muted text-sm mt-1">{cat.tagline}</p>
              <div className="h-0.5 w-16 bg-gradient-gold mt-3 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.projects.map((p) => (
                <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="bg-card border border-border rounded-2xl overflow-hidden card-hover group block hover:border-gold/50 transition-colors">
                  <div className="h-52 overflow-hidden relative">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-primary/80 backdrop-blur text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-gold/30">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold group-hover:text-gold transition-colors flex items-center gap-2">
                      {p.title}
                      <ExternalLink size={14} className="text-text-dark group-hover:text-gold transition-colors shrink-0" />
                    </h3>
                    <p className="text-text-muted text-sm mt-2 line-clamp-3">{p.desc}</p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4">
                      Visit Live Site <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-8 text-center bg-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3 font-display">Want to see your project here?</h2>
          <p className="text-text-muted mb-6">Let us build something amazing for your business.</p>
          <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I%20want%20to%20start%20a%20project"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Start Your Project <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
