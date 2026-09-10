import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24-Hour Preview Application | NexaFlow Digital — See Before You Pay',
  description: 'See your full website before paying a single shilling. Apply for the NexaFlow 24-hour preview — strict qualification, 24-hour payment deadline on approval.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/contract/preview' },
  openGraph: { url: 'https://www.nexaflow-digital.com/contract/preview' },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
