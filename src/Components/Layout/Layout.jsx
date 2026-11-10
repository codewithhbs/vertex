import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MessageCircleMore, PhoneCall } from 'lucide-react'
import ContactBar from '../ContactBar/ContactBar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ theme, onToggleTheme }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    const pageTitles = {
      '/': '',
      '/about': 'About Us',
      '/awards': 'Awards & Recognition',
      '/contact': 'Contact Us',
      '/faq': 'Frequently Asked Questions',
      '/media': 'Media & Insights',
      '/our-services': 'Investigation Services',
    }
    // This simple list sets the browser-tab title for individual service pages.
    const serviceTitles = {
      '/our-services/background-checking': 'Background Checking',
      '/our-services/corporate-verification': 'Corporate Verification',
      '/our-services/cyber-investigation': 'Cyber Investigation',
      '/our-services/loyalty-test': 'Loyalty Test',
      '/our-services/missing-person-search': 'Missing Person Search',
      '/our-services/pre-matrimonial-investigation': 'Pre-Matrimonial Investigation',
      '/our-services/post-matrimonial-investigation': 'Post-Matrimonial Investigation',
      '/our-services/surveillance-reconnaissance': 'Surveillance & Reconnaissance',
    }
    const pageTitle = serviceTitles[pathname] ?? pageTitles[pathname] ?? 'Page'

    document.title = pageTitle
      ? `Vertex Intelligence Service | ${pageTitle}`
      : 'Vertex Intelligence Service'
  }, [pathname])

  return (
    <div className="min-h-screen bg-white">
      <ContactBar />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-3 z-50 hidden sm:block sm:bottom-8 sm:left-8">
        <a
          href="https://wa.me/919891915550"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_35px_rgba(16,185,129,0.45)] transition-transform hover:scale-105 sm:size-14"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircleMore className="size-5 sm:size-7" />
        </a>
      </div>
      <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-50 hidden sm:block sm:bottom-8 sm:right-8">
        <a
          href="tel:+919891915550"
          className="pointer-events-auto flex size-11 items-center justify-center rounded-full bg-red-500 text-white shadow-[0_18px_35px_rgba(239,68,68,0.45)] transition-transform hover:scale-105 sm:size-14"
          aria-label="Call now"
        >
          <PhoneCall className="size-5 sm:size-7" />
        </a>
      </div>
    </div>
  )
}

export default Layout