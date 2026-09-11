'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Products', href: '/products/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
      scrolled ? 'bg-[rgba(10,15,26,0.97)]' : 'bg-[rgba(10,15,26,0.85)]'
    } backdrop-blur-xl border-b border-border`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex justify-between items-center h-[72px]">
        <Link href="/" aria-label="NexaFlow Digital — Home" className="flex items-center">
          <img src="/logo.png" alt="NexaFlow Digital" className="h-9 sm:h-10 w-auto rounded-md" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link href={link.href}
                className={`text-sm font-medium transition-colors hover:text-text ${
                  pathname === link.href ? 'text-text' : 'text-text-muted'
                }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/get-started/"
            className="border border-gold text-gold px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gold/10 transition-colors">
            Get Started
          </Link>
          <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services"
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-gold text-primary px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-none border-none text-text text-2xl cursor-pointer p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-b border-border p-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href}
              className="text-text-muted font-medium hover:text-text transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/get-started/"
            className="text-gold font-medium hover:text-gold-bright transition-colors">
            Get Started
          </Link>
          <a href="https://wa.me/254106216699?text=Hi%20NexaFlow%2C%20I'm%20interested%20in%20your%20services"
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-gold text-primary px-6 py-2.5 rounded-lg font-semibold text-sm text-center mt-2">
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
