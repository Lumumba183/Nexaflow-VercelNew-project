import type { Metadata } from 'next';
import { featuredProjects } from '@/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | NexaFlow Digital — Website Development Projects Kenya',
  description: 'View our portfolio of websites, e-commerce stores, and AI automation projects built for Kenyan and international businesses.',
  alternates: { canonical: 'https://nexaflow-digital.com/portfolio/' },
};

export default function PortfolioPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Our Portfolio</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Websites and applications we have built for businesses across Kenya and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-2xl overflow-hidden card-hover group">
              <div className="h-56 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-bold uppercase tracking-wider">{p.category}</span>
                <h2 className="text-xl font-bold mt-1">{p.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-card border border-border rounded-2xl p-8">
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
