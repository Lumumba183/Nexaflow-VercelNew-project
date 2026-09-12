import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Tag, MessageCircle } from 'lucide-react';
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

// CTA standard: every article carries 3 calls-to-action —
// 1) a soft mid-article banner (≈45% through the content),
// 2) a strong end-of-article card (products + WhatsApp),
// 3) an in-text mention inside the conclusion paragraph.
// CTAs point to the most relevant NexaFlow product for the article's topic.
type CtaTarget = { name: string; href: string };

function ctaTargetFor(slug: string, keywords: string[]): CtaTarget {
  const hay = `${slug} ${keywords.join(' ')}`.toLowerCase();
  if (/(whatsapp|chatbot|voice|ai[- ]agent|automation)/.test(hay)) {
    return { name: 'WeDial AI', href: '/products/wedialai/' };
  }
  if (/(m-?pesa|mpesa|shopify|woocommerce|card|payment)/.test(hay)) {
    return { name: 'Card Payment Integration', href: '/products/card-payment-integration/' };
  }
  if (/(outreach|cold email|lead gen)/.test(hay)) {
    return { name: 'NexaReach', href: '/products/nexareach/' };
  }
  if (/(content|publish|blog)/.test(hay)) {
    return { name: 'AutoDesk AI Publishing Agent', href: '/products/autodesk-ai-publishing-agent/' };
  }
  if (/(website|web design|web-design|seo|google|domain|app)/.test(hay)) {
    return { name: 'Website Development', href: '/products/website-development/' };
  }
  return { name: 'Our Products', href: '/products/' };
}

function MidCta({ target }: { target: CtaTarget }) {
  return (
    <div className="my-8 rounded-xl border border-gold/30 bg-gradient-to-r from-gold/10 to-transparent p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 not-prose">
      <p className="text-sm text-text-muted">
        <span className="font-bold text-text">Enjoying this?</span>{' '}
        See how {target.name} does it for your business — proven, managed, live.
      </p>
      <Link href={target.href}
        className="shrink-0 inline-flex items-center gap-2 bg-gradient-gold text-primary font-bold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
        Explore {target.name} <ArrowRight size={15} />
      </Link>
    </div>
  );
}

function EndCta({ target, title }: { target: CtaTarget; title: string }) {
  return (
    <div className="mt-12 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/15 via-card to-card p-8 text-center">
      <h2 className="text-2xl font-bold mb-3 font-display">Ready to put this into action?</h2>
      <p className="text-text-muted max-w-xl mx-auto mb-7 text-sm leading-relaxed">
        Everything in this article is something we build, deploy and manage for businesses like yours.
        Explore {target.name} — or tell us your goal on WhatsApp and we will recommend the right product.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href={target.href}
          className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
          Explore {target.name} <ArrowRight size={16} />
        </Link>
        <Link href="/products/"
          className="inline-flex items-center justify-center gap-2 border border-gold text-gold font-bold px-7 py-3.5 rounded-xl hover:bg-gold/10 transition-colors">
          All Products
        </Link>
        <a href={`https://wa.me/254106216699?text=${encodeURIComponent(`Hi NexaFlow, I just read "${title}" — I want to know more.`)}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3.5 rounded-xl font-bold text-text-muted hover:text-text hover:border-gold/60 transition-colors">
          <MessageCircle size={16} /> WhatsApp Us
        </a>
      </div>
    </div>
  );
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

function renderContentWithCtas(post: { slug: string; title: string; keywords: string[]; content: string[] }): ReactNode[] {
  const target = ctaTargetFor(post.slug, post.keywords);
  const elements = renderContent(post.content);
  const midAt = Math.min(elements.length - 1, Math.max(2, Math.floor(elements.length * 0.45)));
  elements.splice(midAt, 0, <MidCta key="mid-cta" target={target} />);
  elements.push(<EndCta key="end-cta" target={target} title={post.title} />);
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
            <div className="space-y-4">{renderContentWithCtas(post)}</div>
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
