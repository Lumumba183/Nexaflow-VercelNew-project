import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-32 px-4 text-center relative overflow-hidden">
      <div className="aurora-blob w-[480px] h-[480px] bg-accent/15 top-0 left-1/2 -translate-x-1/2" />
      <div className="max-w-xl mx-auto relative">
        <div className="text-8xl font-extrabold text-aurora mb-4 font-display tracking-tight">404</div>
        <h1 className="text-3xl font-bold mb-4 font-display">Page Not Found</h1>
        <p className="text-text-muted mb-10">
          The page you are looking for does not exist or may have moved. Try one of these instead:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-gradient-gold text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">Home</Link>
          <Link href="/services/" className="border border-border px-6 py-3 rounded-full font-bold hover:border-accent/50 transition-colors">Services</Link>
          <Link href="/portfolio/" className="border border-border px-6 py-3 rounded-full font-bold hover:border-accent/50 transition-colors">Portfolio</Link>
          <Link href="/blog/" className="border border-border px-6 py-3 rounded-full font-bold hover:border-accent/50 transition-colors">Blog</Link>
        </div>
      </div>
    </div>
  );
}
