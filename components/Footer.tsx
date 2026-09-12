import Link from 'next/link';
import { BrandLockup } from './Navbar';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-primary-light overflow-hidden">
      <div className="aurora-blob w-[480px] h-[480px] bg-accent/10 -top-64 -left-40" />
      <div className="relative max-w-site mx-auto px-4 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <BrandLockup />
            <p className="text-text-muted text-sm mt-5 max-w-xs leading-relaxed">
              Professional website development and AI automation. Based in Nairobi, Kenya — serving businesses worldwide.
            </p>
            <a href="https://wa.me/254106216699" target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-text-muted hover:text-text hover:border-accent/50 transition-colors">
              <MessageCircle size={15} className="text-accent-glow" /> WhatsApp: +254 106 216 699
            </a>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-text-dark mb-5">Services</h4>
            <ul className="list-none p-0 space-y-2.5">
              {['Website Development', 'AI Calling Agents', 'WhatsApp Automation', 'E-Shop Design', 'Web + Android Apps'].map(s => (
                <li key={s}>
                  <Link href="/services/" className="text-text-muted text-sm hover:text-text transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-text-dark mb-5">Company</h4>
            <ul className="list-none p-0 space-y-2.5">
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Our Products', href: '/products/' },
                { label: 'Portfolio', href: '/portfolio/' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Pricing', href: '/pricing/' },
                { label: '24-Hour Preview Contract', href: '/contract/preview/' },
                { label: 'Direct Contract', href: '/contract/direct/' },
              ].map(s => (
                <li key={s.label}>
                  <Link href={s.href} className="text-text-muted text-sm hover:text-text transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-text-dark mb-5">Contact</h4>
            <ul className="list-none p-0 space-y-3">
              <li>
                <a href="tel:+254106216699" className="flex items-center gap-2.5 text-text-muted text-sm hover:text-text transition-colors">
                  <Phone size={14} className="text-accent-glow shrink-0" /> +254 106 216 699
                </a>
              </li>
              <li>
                <a href="mailto:smartsolutions870@gmail.com" className="flex items-center gap-2.5 text-text-muted text-sm hover:text-text transition-colors break-all">
                  <Mail size={14} className="text-accent-glow shrink-0" /> smartsolutions870@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-text-muted text-sm">
                <MapPin size={14} className="text-accent-glow shrink-0" /> Nairobi, Kenya
              </li>
              <li>
                <a href="https://wedialai.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-bright transition-colors font-medium">
                  WeDial AI Platform <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-7 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-text-dark text-xs">
          <p>© 2026 NexaFlow Digital. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/privacy/" className="hover:text-text-muted transition-colors">Privacy</Link>
            <Link href="/terms/" className="hover:text-text-muted transition-colors">Terms</Link>
            <Link href="/cookies/" className="hover:text-text-muted transition-colors">Cookies</Link>
            <a href="mailto:smartsolutions870@gmail.com" className="hover:text-text-muted transition-colors hidden sm:inline">smartsolutions870@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
