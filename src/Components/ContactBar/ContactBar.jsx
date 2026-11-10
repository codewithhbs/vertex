import { MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { socialLinks } from '../../data/socialLinks'

const ContactBarContent = () => (
  <div className="flex shrink-0 items-center gap-6 px-4 py-2 text-xs sm:gap-8 sm:px-6 sm:text-sm lg:px-8">
    <p className="whitespace-nowrap text-center font-medium uppercase tracking-wide">
      Private detective agency | ISO certified company
    </p>
    <div className="flex shrink-0 items-center gap-4">
      <a
        className="inline-flex items-center gap-1 whitespace-nowrap font-semibold hover:text-blue-700"
        href="https://www.google.com/maps/search/?api=1&query=43%2F17%2C%20A-Block%2C%20Mange%20Ram%20Park%2C%20Pooth%20Kalan%2C%20Rohini%20Sector%2020%2C%20New%20Delhi%2C%20Delhi%20110085"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the office address in Google Maps (opens in a new tab)"
      >
        <MapPin className="size-4 text-blue-700" aria-hidden="true" />
        43/17, A-Block, Mange Ram Park, Pooth Kalan, Rohini Sector 20, New
        Delhi, Delhi 110085
      </a>
      <a
        className="whitespace-nowrap hover:text-blue-700"
        href="tel:+919891915550"
      >
        <strong>+91-9891915550 </strong>
      </a>
      <span className="h-5 border-l border-blue-200" aria-hidden="true" />
      <a
        className="whitespace-nowrap hover:text-blue-700"
        href="tel:+911141882075"
      >
        <strong> 01141882075 </strong>
      </a>
      <span className="h-5 border-l border-blue-200" aria-hidden="true" />
      <a
        className="whitespace-nowrap hover:text-blue-700"
        href="mailto:detectiveservice7@gmail.com"
      >
        <strong>detectiveservice7@gmail.com</strong>
      </a>
      <a
        className="inline-flex items-center gap-1 whitespace-nowrap font-semibold text-green-700 hover:text-green-800"
        href="https://wa.me/919891915550?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20an%20investigator."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message an investigator on WhatsApp (opens in a new tab)"
      >
        <FaWhatsapp className="size-4" aria-hidden="true" />
        WhatsApp
      </a>
      <span className="h-5 border-l border-blue-200" aria-hidden="true" />
      <nav className="flex items-center gap-2" aria-label="Social media">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${social.label} page (opens in a new tab)`}
            title={social.label}
            className={`flex size-7 items-center justify-center rounded-full text-xs font-bold text-white transition-opacity hover:opacity-80 ${social.className}`}
          >
            <social.icon className="size-4" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  </div>
);

const ContactBar = () => {
  return (
    <div className="contact-bar bg-blue-50 text-slate-800">
      <div className="contact-bar__track">
        <ContactBarContent />
      </div>
    </div>
  );
}

export default ContactBar
