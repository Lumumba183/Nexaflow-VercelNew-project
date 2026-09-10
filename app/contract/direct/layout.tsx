import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direct Contract Application | NexaFlow Digital',
  description: 'Start your website project with a Direct Contract — 65% to begin, 35% on completion. Apply and our team responds within 4 hours.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/contract/direct' },
  openGraph: { url: 'https://www.nexaflow-digital.com/contract/direct' },
};

export default function DirectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
