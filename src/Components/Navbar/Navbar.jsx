import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logovertex.jpeg'

// These are the service names and URLs shown in the navigation dropdown.
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

const pages = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Awards', to: '/awards' },
  { label: 'Media', to: '/media' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

const linkClass = ({ isActive }) =>
  `block border-b-2 px-1 py-2 text-[17px] font-bold transition-colors ${
    isActive
      ? 'border-blue-600 text-blue-700'
      : 'border-transparent text-slate-900 hover:border-blue-600 hover:text-blue-700'
  }`

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const phoneNumber = '+919891915550'

  const closeMenus = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="Vertex Intelligence Services home"
          className="-ml-2 sm:-ml-3 lg:-ml-4"
        >
          <img className="h-auto w-48 sm:w-60 lg:w-[268px] xl:w-[300px]" src={logo} alt="Vertex Intelligence Services" />
        </Link>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-full border-t border-slate-100 bg-white px-4 pb-5 shadow-lg xl:static xl:block xl:flex-1 xl:border-0 xl:p-0 xl:pl-8 xl:shadow-none`}
        >
          <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:justify-center xl:gap-3">
            {pages.slice(0, 2).map((page) => (
              <NavLink key={page.to} to={page.to} className={linkClass} onClick={closeMenus}>
                {page.label}
              </NavLink>
            ))}

            <div className="relative">
              <div className="flex items-center">
                <NavLink to="/our-services" className={linkClass} onClick={closeMenus}>
                  Our Services
                </NavLink>
                <button
                  type="button"
                  aria-label="Toggle services menu"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                  className="ml-1 rounded p-2 text-slate-600 hover:bg-slate-100 lg:p-1"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {servicesOpen && (
                <div className="mt-1 grid gap-1 rounded-lg bg-slate-50 p-2 xl:absolute xl:left-0 xl:top-full xl:mt-3 xl:w-80 xl:border xl:border-slate-100 xl:bg-white xl:p-3 xl:shadow-xl">
                  {services.map((service) => (
                    <Link
                      key={service.link}
                      to={service.link}
                      onClick={closeMenus}
                      className="rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {pages.slice(2).map((page) => (
              <NavLink key={page.to} to={page.to} className={linkClass} onClick={closeMenus}>
                {page.label}
              </NavLink>
            ))}

            <div className="mt-3 xl:hidden">
              <a
                href={`tel:${phoneNumber}`}
                onClick={closeMenus}
                className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Talk to Investigator
              </a>
            </div>
          </div>
        </nav>

        <a
          href={`tel:${phoneNumber}`}
          className="hidden shrink-0 items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-blue-700 transition-colors hover:bg-blue-600 hover:text-white xl:inline-flex"
        >
          Talk to Investigator
        </a>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>

        <button
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 xl:hidden"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
