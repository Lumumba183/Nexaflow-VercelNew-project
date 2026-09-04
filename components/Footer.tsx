import Link from 'next/link';

const GOLD_BRIGHT = '#e8c547';

export default function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-border pt-12 pb-8 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-extrabold mb-4 font-display">
            Nexa<span style={{ color: GOLD_BRIGHT }}>Flow</span> Digital
          </h3>
          <p className="text-text-muted text-sm">
            Professional website development and AI automation. Based in Nairobi, Kenya — serving businesses worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-base font-bold mb-4">Services</h4>
          <ul className="list-none p-0 space-y-2">
            {['Website Development', 'AI Calling Agents', 'WhatsApp Automation', 'E-Shop Design', 'Web + Android Apps'].map(s => (
              <li key={s}>
                <Link href="/services/" className="text-text-muted text-sm hover:text-text transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-base font-bold mb-4">Company</h4>
          <ul className="list-none p-0 space-y-2">
            {[
              { label: 'About Us', href: '/#about' },
              { label: 'Portfolio', href: '/portfolio/' },
              { label: 'Blog', href: '/blog/' },
              { label: 'Pricing', href: '/pricing/' },
            ].map(s => (
              <li key={s.label}>
                <Link href={s.href} className="text-text-muted text-sm hover:text-text transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-base font-bold mb-4">Contact</h4>
          <ul className="list-none p-0 space-y-2">
            <li><a href="https://wa.me/254106216699" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-text">WhatsApp: +254 106 216 699</a></li>
            <li><a href="tel:+254106216699" className="text-text-muted text-sm hover:text-text">Phone: +254 106 216 699</a></li>
            <li><a href="mailto:smartsolutions870@gmail.com" className="text-text-muted text-sm hover:text-text">smartsolutions870@gmail.com</a></li>
            <li><a href="https://wedialai.com" target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm hover:text-text">WeDial AI Platform</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-8 pt-8 border-t border-border text-center text-text-dark text-sm">
        <p>© 2026 NexaFlow Digital. All rights reserved. |{' '}
          <Link href="/privacy/" className="hover:text-text-muted">Privacy</Link> |{' '}
          <Link href="/terms/" className="hover:text-text-muted">Terms</Link> |{' '}
          <Link href="/cookies/" className="hover:text-text-muted">Cookies</Link> |{' '}
          <a href="mailto:smartsolutions870@gmail.com" className="hover:text-text-muted">smartsolutions870@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}
