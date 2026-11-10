import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import footerBackground from '../../assets/footer-bg.webp'
import { socialLinks } from '../../data/socialLinks'

// These are the service names and URLs shown in the footer.
const services = [
  { name: 'Background Checking', link: '/our-services/background-checking' },
  { name: 'Corporate Verification', link: '/our-services/corporate-verification' },
  { name: 'Cyber Investigation', link: '/our-services/cyber-investigation' },
  { name: 'Loyalty Test', link: '/our-services/loyalty-test' },
  { name: 'Missing Person Search', link: '/our-services/missing-person-search' },
  { name: 'Pre-Matrimonial Investigation', link: '/our-services/pre-matrimonial-investigation' },
  { name: 'Post-Matrimonial Investigation', link: '/our-services/post-matrimonial-investigation' },
  { name: 'Surveillance & Reconnaissance', link: '/our-services/surveillance-reconnaissance' },
]

const usefulLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Awards', to: '/awards' },
  { label: 'Media', to: '/media' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

const Footer = () => {
  return (
    <footer
      className="bg-slate-950 bg-cover bg-center text-slate-200"
      style={{
        backgroundImage: `linear-gradient(105deg, rgba(4, 20, 48, .97), rgba(4, 20, 48, .94)), url(${footerBackground})`,
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.25fr_.7fr_1fr_1.35fr] lg:gap-12 lg:py-16">
        <section>
          <h2 className="font-serif text-xl font-semibold text-white">
            About Us
          </h2>
          <span className="mt-3 block h-1 w-12 rounded bg-blue-600" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Vertex Intelligence Services is a professional private investigation
            agency offering discreet, ethical, and result-oriented detective
            services for individuals, corporates, legal firms, and
            organizations.
          </p>
          <nav className="mt-6 flex gap-3" aria-label="Social media">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                aria-label={`Visit our ${social.label} page (opens in a new tab)`}
                className={`flex size-9 items-center justify-center rounded-full border border-slate-600 text-sm font-semibold text-white transition-colors hover:border-blue-500 hover:bg-blue-600 ${social.className}`}
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">
            Useful Links
          </h2>
          <span className="mt-3 block h-1 w-12 rounded bg-blue-600" />
          <ul className="mt-5 space-y-3 text-sm">
            {usefulLinks.map((item) => (
              <li key={item.to}>
                <Link
                  className="text-slate-300 transition-colors hover:text-white"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">
            Our Services
          </h2>
          <span className="mt-3 block h-1 w-12 rounded bg-blue-600" />
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.link}>
                <Link
                  className="text-slate-300 transition-colors hover:text-white"
                  to={service.link}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-white">
            Contact Info
          </h2>
          <span className="mt-3 block h-1 w-12 rounded bg-blue-600" />
          <ul className="mt-5 space-y-5 text-sm leading-6">
            <li className="flex gap-3">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
              </span>
              <span>
                43/17, A-Block, Mange Ram Park, Pooth Kalan, Rohini Sector 20,
                New Delhi, Delhi 110085
              </span>
            </li>
            <li className="flex gap-3">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
              </span>
              <span>
                Office 29, Wakson Building, Second Floor, Sheikh Zayed Road,
                Dubai, UAE
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2 .5v.5l8 5.7 8-5.7V6H4Zm16 2.9-7.42 5.28a1 1 0 0 1-1.16 0L4 8.9v9.6c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.9Z" />
                </svg>
              </span>
              <a
                className="break-all hover:text-white"
                href="mailto:detectiveservice7@gmail.com"
              >
                detectiveservice7@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
                </svg>
              </span>
              <a className="hover:text-white" href="tel:+919891915550">
                +91-9891915550
              </a>
              <br />
              <a className="hover:text-white" href="tel:+911141882075">
                01141882075
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-white"
                aria-hidden="true"
              >
                <FaWhatsapp className="size-4" />
              </span>
              <a
                className="hover:text-white"
                href="https://wa.me/919891915550?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20an%20investigator."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message an investigator on WhatsApp (opens in a new tab)"
              >
                Chat with us on WhatsApp
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-t border-white/20">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-sm text-slate-300 sm:px-8">
          © {new Date().getFullYear()} Vertex Intelligence Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
