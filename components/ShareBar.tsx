'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Link2, Check, MessageCircle } from 'lucide-react';

export default function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, icon: <Facebook size={16} /> },
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, icon: <MessageCircle size={16} /> },
    { label: 'X', href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, icon: <span className="text-sm font-bold">𝕏</span> },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, icon: <Linkedin size={16} /> },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-bold text-text-muted">Share this article:</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-light border border-border px-4 py-2 rounded-full text-sm font-medium hover:border-gold/50 hover:text-gold transition-colors">
          {l.icon} {l.label}
        </a>
      ))}
      <button onClick={copy}
        className="inline-flex items-center gap-2 bg-primary-light border border-border px-4 py-2 rounded-full text-sm font-medium hover:border-gold/50 hover:text-gold transition-colors">
        {copied ? <Check size={16} className="text-success" /> : <Link2 size={16} />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}
