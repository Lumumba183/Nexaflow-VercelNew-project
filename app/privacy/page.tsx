import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NexaFlow Digital',
  description: 'NexaFlow Digital privacy policy. How we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://nexaflow-digital.com/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
        <div className="space-y-6 text-text-muted">
          <p>Last updated: January 1, 2026</p>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including name, email address, phone number, company details, and project requirements when you fill out our contact or contract forms.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. How We Use Your Information</h2>
            <p>We use your information to provide our services, communicate with you about your project, process payments, and send you updates about our services. We do not sell your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Cookies</h2>
            <p>We use cookies to analyze website traffic and improve your browsing experience. You can control cookies through your browser settings.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:smartsolutions870@gmail.com" className="text-gold hover:underline">smartsolutions870@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
