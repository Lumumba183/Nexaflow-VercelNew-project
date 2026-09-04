import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'NexaFlow Digital — Professional Website Development & AI Automation in Kenya',
  description: 'Professional website development and AI automation services in Kenya. Websites from KSH 18,000, AI calling agents, WhatsApp automation, e-shop design, and white-label solutions. Nairobi-based.',
  metadataBase: new URL('https://nexaflow-digital.com'),
  openGraph: {
    title: 'NexaFlow Digital — Professional Website Development & AI Automation in Kenya',
    description: 'Professional website development and AI automation for Kenyan businesses. Websites from KSH 18,000. AI agents, WhatsApp automation, e-shop design. Based in Nairobi.',
    images: ['https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?w=1200&h=630&fit=crop&auto=format&q=80'],
    url: 'https://nexaflow-digital.com',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaFlow Digital — Professional Website Development & AI Automation',
    description: 'Professional website development and AI automation for Kenyan businesses.',
    images: ['https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?w=1200&h=630&fit=crop&auto=format&q=80'],
  },
  alternates: {
    canonical: 'https://nexaflow-digital.com/',
    languages: { 'en-ke': 'https://nexaflow-digital.com', 'x-default': 'https://nexaflow-digital.com' },
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'NexaFlow Digital' }],
  keywords: ['website development Kenya', 'web design Nairobi', 'AI automation Kenya', 'WhatsApp automation', 'e-shop design Kenya', 'AI calling agents', 'NexaFlow Digital'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1089974953979325');fbq('track','PageView');`,
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1089974953979325&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className="bg-primary text-text font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
