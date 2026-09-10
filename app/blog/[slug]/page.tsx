import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import ShareBar from '@/components/ShareBar';

const BASE = 'https://www.nexaflow-digital.com';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function isoDate(d: string): string | undefined {
  const t = new Date(d);
  return isNaN(t.getTime()) ? undefined : t.toISOString();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  const url = `${BASE}/blog/${slug}`;
  const published = isoDate(post.date);
  return {
    title: `${post.title} | NexaFlow Digital Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: published,
      authors: ['NexaFlow Digital'],
      images: [{ url: post.img, width: 1200, height: 630, alt: post.title }],
      siteName: 'NexaFlow Digital',
      locale: 'en_KE',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.img],
    },
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

  const url = `${BASE}/blog/${slug}`;
  const published = isoDate(post.date);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${BASE}${post.img.startsWith('/') ? post.img : ''}`,
    datePublished: published,
    author: { '@type': 'Organization', name: 'NexaFlow Digital', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'NexaFlow Digital',
      logo: { '@type': 'ImageObject', url: `${BASE}/og-image.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords.join(', '),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  // Related: same category first, then latest others — 3 cards
  const others = blogPosts.filter((p) => p.slug !== slug);
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  return (
    <div className="py-20 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-xs text-text-dark mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>›</span>
          <Link href="/blog/" className="hover:text-gold transition-colors">Blog</Link>
          <span>›</span>
          <span className="text-text-muted line-clamp-1">{post.title}</span>
        </nav>
        <Link href="/blog/" className="inline-flex items-center gap-2 text-gold text-sm font-bold mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <article className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="h-64 sm:h-80 overflow-hidden">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-gold text-xs font-bold uppercase bg-gold/10 px-3 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-1 text-text-dark text-xs">
                <Calendar size={12} /> <time dateTime={published}>{post.date}</time>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 font-display">{post.title}</h1>
            <div className="mb-8 pb-6 border-b border-border">
              <ShareBar url={url} title={post.title} />
            </div>
            <div className="space-y-4">{renderContent(post.content)}</div>
            <div className="mt-10 pt-6 border-t border-border">
              <ShareBar url={url} title={post.title} />
            </div>
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

        {/* Related articles — internal linking */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold mb-6 font-display">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}/`}
                className="block bg-card border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-colors group card-hover">
                <div className="h-32 overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-gold text-[10px] font-bold uppercase">{r.category}</span>
                  <h3 className="text-sm font-bold mt-1 line-clamp-2 group-hover:text-gold transition-colors">{r.title}</h3>
                  <span className="inline-flex items-center gap-1 text-gold text-xs font-medium mt-3">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
