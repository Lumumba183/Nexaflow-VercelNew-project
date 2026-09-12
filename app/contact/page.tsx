import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | NexaFlow Digital — Get In Touch',
  description: 'Contact NexaFlow Digital for website development, AI automation, and digital marketing services in Kenya. WhatsApp +254 106 216 699.',
  alternates: { canonical: 'https://www.nexaflow-digital.com/contact' },
  openGraph: { url: 'https://www.nexaflow-digital.com/contact' },
};

const cards = [
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    body: <a href="tel:+254106216699" className="text-text-muted hover:text-gold transition-colors">+254 106 216 699</a>,
  },
  {
    icon: Mail,
    title: 'Email',
    body: <a href="mailto:smartsolutions870@gmail.com" className="text-text-muted hover:text-gold transition-colors break-all">smartsolutions870@gmail.com</a>,
  },
  {
    icon: MapPin,
    title: 'Location',
    body: <><p className="text-text-muted">Nairobi, Kenya</p><p className="text-text-dark text-sm">P.O BOX 35496-00100</p></>,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    body: <>
      <p className="text-text-muted">Monday – Friday: 8:00 AM – 6:00 PM</p>
      <p className="text-text-muted">Saturday: 9:00 AM – 2:00 PM</p>
      <p className="text-text-dark text-sm">Sunday: Closed</p>
    </>,
  },
];

export default function ContactPage() {
  return (
    <div className="py-24 px-4 relative overflow-x-clip">
      <div className="aurora-blob w-[520px] h-[520px] bg-accent/12 -top-40 -right-40" />
      <div className="max-w-site mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.22em] text-gold border border-accent/30 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
            Contact
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold mb-5 font-display tracking-tight">Get In Touch</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Ready to start your project? We respond to all inquiries within 2 hours during business hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-5">
            {cards.map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-accent/12 border border-accent/25 flex items-center justify-center">
                    <c.icon size={18} className="text-accent-glow" />
                  </span>
                  <h3 className="font-bold font-display">{c.title}</h3>
                </div>
                {c.body}
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
