import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | NexaFlow Digital',
  description: 'NexaFlow Digital terms of service. Conditions for using our website development and AI automation services.',
  alternates: { canonical: 'https://nexaflow-digital.com/terms/' },
};

export default function TermsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-display">Terms of Service</h1>
        <div className="space-y-6 text-text-muted">
          <p>Last updated: January 1, 2026</p>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Service Agreement</h2>
            <p>By engaging NexaFlow Digital for website development or AI automation services, you agree to these terms. All projects require a signed commitment form or contract before work begins.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Payment Terms</h2>
            <p>For Direct Contract projects, a 75% deposit is due within 24 hours of live URL delivery. For See Before You Pay projects, 100% payment is due within 24 hours of live URL delivery. Failure to meet payment deadlines may result in project suspension and forfeiture of negotiated discounts.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Revision Policy</h2>
            <p>All edits and corrections must be requested within 14 days of live URL delivery. After this period, the project is considered complete. Additional changes will require a separate maintenance agreement.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Intellectual Property</h2>
            <p>Upon full payment, ownership of the completed website and its content transfers to the client. NexaFlow Digital retains the right to display the project in our portfolio unless otherwise agreed.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Limitation of Liability</h2>
            <p>NexaFlow Digital is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific project.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
