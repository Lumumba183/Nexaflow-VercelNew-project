import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.nexaflow-digital.com';

  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, freq: 'weekly' },
    { path: '/services', priority: 0.9, freq: 'monthly' },
    { path: '/pricing', priority: 0.9, freq: 'monthly' },
    { path: '/portfolio', priority: 0.9, freq: 'weekly' },
    { path: '/blog', priority: 0.9, freq: 'daily' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },
    { path: '/contract/preview', priority: 0.7, freq: 'monthly' },
    { path: '/contract/direct', priority: 0.7, freq: 'monthly' },
    { path: '/privacy', priority: 0.3, freq: 'yearly' },
    { path: '/terms', priority: 0.3, freq: 'yearly' },
    { path: '/cookies', priority: 0.3, freq: 'yearly' },
  ];

  return [
    ...pages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
