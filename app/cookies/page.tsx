import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | NexaFlow Digital',
  description: 'NexaFlow Digital cookie policy. How we use cookies on our website.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/cookies' }, openGraph: { url: 'https://www.nexaflow-digital.com/cookies' },
};

export default function CookiesPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-display">Cookie Policy</h1>
        <div className="space-y-6 text-text-muted">
          <p>Last updated: January 1, 2026</p>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">How We Use Cookies</h2>
            <p>We use cookies to analyze website traffic through tools like Google Analytics and Facebook Pixel. This helps us understand how visitors interact with our site and improve our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Please note that disabling cookies may affect your experience on our website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
