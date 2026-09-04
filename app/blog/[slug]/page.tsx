import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} | NexaFlow Digital Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://nexaflow-digital.com/blog/${slug}/` },
  };
}

function renderContent(content: string[]): ReactNode[] {
  const elements: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length) {
      const items = listItems;
      elements.push(
        <ul key={`ul-${key++}`} className="list-disc pl-6 space-y-2 text-text-muted leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  content.forEach((block) => {
    if (block.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-3 font-display">
          {block.slice(3)}
        </h2>
      );
    } else if (block.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-xl font-bold mt-8 mb-2 font-display">
          {block.slice(4)}
        </h3>
      );
    } else if (block.startsWith('• ')) {
      listItems.push(block.slice(2));
    } else {
      flushList();
      elements.push(
        <p key={key++} className="text-text-muted leading-relaxed">
          {block}
        </p>
      );
    }
  });
  flushList();
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog/" className="inline-flex items-center gap-2 text-gold text-sm font-bold mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <article className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="h-64 sm:h-80 overflow-hidden">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold text-xs font-bold uppercase bg-gold/10 px-3 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-1 text-text-dark text-xs">
                <Calendar size={12} /> {post.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 font-display">{post.title}</h1>
            <div className="space-y-4">{renderContent(post.content)}</div>
            <div className="mt-10 pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={16} className="text-gold" />
                <span className="text-sm font-medium">Keywords</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.keywords.map((k) => (
                  <span key={k} className="bg-primary-light px-3 py-1 rounded-full text-xs text-text-muted">
                    {k}
                  </span>
                ))}
              </div>
              <p className="text-gold text-sm">{post.hashtags}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
