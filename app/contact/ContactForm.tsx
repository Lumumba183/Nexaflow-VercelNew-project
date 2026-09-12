'use client';
import { useState } from 'react';
import { Check, Send } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
    } catch {}
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div className="border-glow rounded-3xl p-10 text-center">
        <span className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-5">
          <Check size={32} className="text-success" />
        </span>
        <h2 className="text-2xl font-bold mb-2 font-display">Message Sent!</h2>
        <p className="text-text-muted">Thank you for reaching out. We will get back to you within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-6 sm:p-9 space-y-5 shadow-[0_24px_64px_rgba(2,4,12,0.4)]">
      <h2 className="text-xl font-bold mb-2 font-display">Send us a message</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Full Name *</label>
          <input name="name" type="text" required placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email *</label>
          <input name="email" type="email" required placeholder="john@company.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5">Phone</label>
          <input name="phone" type="tel" placeholder="+254 7XX XXX XXX" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Company</label>
          <input name="company" type="text" placeholder="Your Company Ltd" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Service Interested In *</label>
        <select name="service" required>
          <option value="">Select a service...</option>
          <option value="website">Website Development</option>
          <option value="ai-calling">AI Calling Agents</option>
          <option value="whatsapp">WhatsApp Automation</option>
          <option value="e-shop">E-Shop Design</option>
          <option value="web-app">Web App + Android</option>
          <option value="seo">SEO Services</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Message *</label>
        <textarea name="message" rows={5} required placeholder="Tell us about your project, timeline, and budget..." />
      </div>
      <button type="submit" className="w-full bg-gradient-gold text-white py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-[0_12px_36px_rgba(110,99,246,0.35)]">
        Send Message <Send size={18} />
      </button>
      <p className="text-center text-text-dark text-xs">
        By submitting this form, you agree to our <a href="/privacy/" className="text-gold hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
