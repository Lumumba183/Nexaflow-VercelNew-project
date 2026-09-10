import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-32 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <div className="text-7xl font-extrabold text-gradient-gold mb-4 font-display">404</div>
        <h1 className="text-3xl font-bold mb-4 font-display">Page Not Found</h1>
        <p className="text-text-muted mb-8">
          The page you are looking for does not exist or may have moved. Try one of these instead:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-gradient-gold text-primary px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">Home</Link>
          <Link href="/services/" className="border border-border px-6 py-3 rounded-xl font-bold hover:border-gold/50 transition-colors">Services</Link>
          <Link href="/portfolio/" className="border border-border px-6 py-3 rounded-xl font-bold hover:border-gold/50 transition-colors">Portfolio</Link>
          <Link href="/blog/" className="border border-border px-6 py-3 rounded-xl font-bold hover:border-gold/50 transition-colors">Blog</Link>
        </div>
      </div>
    </div>
  );
}
