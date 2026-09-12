'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Products', href: '/products/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src="/logo.png"
        alt="NexaFlow Digital logo"
        className={`${compact ? 'h-8' : 'h-9'} w-auto`}
      />
      <span className={`font-display font-bold tracking-tight ${compact ? 'text-base' : 'text-lg'}`}>
        Nexa<span className="text-aurora">Flow</span>
        <span className="text-text-muted font-medium"> Digital</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 border-b ${
      scrolled
        ? 'glass border-border shadow-[0_8px_32px_rgba(2,4,12,0.45)]'
        : 'bg-primary/60 backdrop-blur-md border-transparent'
    }`}>
      <div className="max-w-site mx-auto px-4 sm:px-8 flex justify-between items-center h-[76px]">
        <Link href="/" aria-label="NexaFlow Digital — Home" className="flex items-center shrink-0">
          <BrandLockup />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-1 list-none m-0 p-1 rounded-full border border-border/60 bg-primary-light/40">
          {navLinks.map(link => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <li key={link.label}>
                <Link href={link.href}
                  className={`block px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    active
                      ? 'bg-card text-text shadow-[inset_0_0_0_1px_rgba(110,99,246,0.35)]'
                      : 'text-text-muted hover:text-text'
                  }`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-text border border-border px-4 py-2 rounded-full transition-colors hover:border-accent/50">
            <MessageCircle size={15} /> WhatsApp
          </a>
          <Link href="/get-started/"
            className="inline-flex items-center gap-1.5 bg-gradient-gold text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_8px_24px_rgba(110,99,246,0.35)]">
            Get Started <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          className="lg:hidden text-text p-2 rounded-lg border border-border">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-b border-border p-6 flex flex-col gap-1">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href}
              className="text-text-muted font-medium hover:text-text transition-colors py-2.5 border-b border-border/40 last:border-0">
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link href="/get-started/"
              className="flex-1 text-center bg-gradient-gold text-white px-5 py-3 rounded-full font-semibold text-sm">
              Get Started
            </Link>
            <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center border border-border px-5 py-3 rounded-full font-semibold text-sm text-text-muted">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
