import Navbar from './Navbar';
import Footer from './Footer';
import FacebookPixel from './FacebookPixel';
import VisitorTracker from './VisitorTracker';
import CookieConsent from './CookieConsent';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-primary text-text font-sans">
      <FacebookPixel />
      <VisitorTracker />
      <Navbar />
      <main className="pt-[76px]">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
