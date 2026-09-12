import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { ArrowUpRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | NexaFlow Digital — Web Design & AI Automation Insights',
  description: 'Latest insights on website development, AI automation, WhatsApp marketing, and digital growth strategies for Kenyan businesses.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/blog' },
  openGraph: { url: 'https://www.nexaflow-digital.com/blog' },
};

export default function BlogPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[480px] h-[480px] bg-accent/12 -top-32 -right-40" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            Insights
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Blog</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Insights, guides, and strategies for growing your business online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`}
              className="block bg-card border border-border rounded-3xl overflow-hidden hover:border-accent/40 transition-colors group card-hover">
              <div className="relative h-48 overflow-hidden">
                <img src={post.img} alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-accent-glow text-[11px] font-bold uppercase tracking-[0.16em]">{post.category}</span>
                  <span className="flex items-center gap-1 text-text-dark text-xs">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h2 className="text-lg font-bold font-display group-hover:text-gold-bright transition-colors line-clamp-2">{post.title}</h2>
                <p className="text-text-muted text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-1.5 text-gold text-sm font-bold group-hover:text-gold-bright transition-colors">
                  Read More <ArrowUpRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
