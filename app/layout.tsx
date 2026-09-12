import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'NexaFlow Digital — Professional Website Development & AI Automation in Kenya',
  description: 'Professional website development and AI automation services in Kenya. Websites from KSH 18,000, AI calling agents, WhatsApp automation, e-shop design, and white-label solutions. Nairobi-based.',
  metadataBase: new URL('https://www.nexaflow-digital.com'),
  openGraph: {
    title: 'NexaFlow Digital — Professional Website Development & AI Automation in Kenya',
    description: 'Professional website development and AI automation for Kenyan businesses. Websites from KSH 18,000. AI agents, WhatsApp automation, e-shop design. Based in Nairobi.',
    images: ['/og-image.jpg'],
    url: 'https://www.nexaflow-digital.com/',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaFlow Digital — Professional Website Development & AI Automation',
    description: 'Professional website development and AI automation for Kenyan businesses.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.nexaflow-digital.com/',
    languages: { 'en-ke': 'https://www.nexaflow-digital.com/', 'x-default': 'https://www.nexaflow-digital.com/' },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  other: { 'theme-color': '#04060e' },
  authors: [{ name: 'NexaFlow Digital' }],
  keywords: ['website development Kenya', 'web design Nairobi', 'AI automation Kenya', 'WhatsApp automation', 'e-shop design Kenya', 'AI calling agents', 'NexaFlow Digital'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1089974953979325');fbq('track','PageView');`,
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1089974953979325&ev=PageView&noscript=1" />
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'NexaFlow Digital',
            url: 'https://www.nexaflow-digital.com',
            logo: 'https://www.nexaflow-digital.com/logo.png',
            description: 'Professional website development and AI automation services in Kenya.',
            telephone: '+254106216699',
            email: 'smartsolutions870@gmail.com',
            address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
            sameAs: ['https://wedialai.com'],
          }),
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'NexaFlow Digital',
            url: 'https://www.nexaflow-digital.com',
          }),
        }} />
      </head>
      <body className="bg-primary text-text font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
