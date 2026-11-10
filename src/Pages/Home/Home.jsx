import { useEffect, useState } from 'react'
import {
  BadgeCheck,
  BriefcaseBusiness,
  LockKeyhole,
  PhoneCall,
  ShieldCheck,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import VideoBackground from '../../Components/VideoBackground/VideoBackground'
import AwardRecog from './AwardRecog'
import FounderMessage from './FounderMessage'
import HomeContact from './HomeContact'
import Process from './Process'
import Service from './Service'
import Testimonial from './Testimonial'
import WhyChoise from './WhyChoise'

const statCards = [
  { icon: BadgeCheck, value: '15+', label: 'Years Experience' },
  { icon: LockKeyhole, value: 'Licensed', label: 'Agency' },
  { icon: BriefcaseBusiness, value: '5,000+', label: 'Cases Solved' },
  { icon: ShieldCheck, value: 'Certified', label: 'Experts' },
]

const Home = () => {
  const [helpPopupOpen, setHelpPopupOpen] = useState(true)

  useEffect(() => {
    if (!helpPopupOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setHelpPopupOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [helpPopupOpen])

  return (
    <>
      <section className="relative isolate overflow-visible bg-slate-950 text-white">
        <VideoBackground className="object-[65%_center] opacity-75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />
        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-10 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-28 lg:pt-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 sm:text-sm">
              Discreet <span className="mx-2 text-blue-500">•</span>{" "}
              Professional <span className="mx-2 text-blue-500">•</span>{" "}
              Reliable
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[0.9] tracking-tight sm:text-5xl lg:text-7xl">
              UNCOVERING THE
              <span className="mt-2 block text-blue-400">TRUTH</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Professional private investigation and intelligence services for
              individuals, businesses, and legal matters. Confidential. Ethical.
              Result driven.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
              >
                Talk to an investigator
              </Link>
              <Link
                to="/our-services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore our services
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-2 gap-5 border-t border-white/20 pt-6 sm:grid-cols-4">
              {[
                "Confidential approach",
                "Experienced team",
                "Pan-India operations",
                "Personal support",
              ].map((item) => (
                <p
                  key={item}
                  className="text-xs font-medium leading-5 text-slate-300 sm:text-sm"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 translate-y-1/2">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-4 rounded-[22px] border border-white/10 bg-slate-950/75 p-4 shadow-[0_25px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:grid-cols-2 xl:grid-cols-4">
              {statCards.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-blue-600/20 text-blue-300 ring-1 ring-blue-400/30">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-xl font-black tracking-tight text-white">
                      {value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {helpPopupOpen && (
        <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 py-8 backdrop-blur-[2px]">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="help-popup-title"
            className="pointer-events-auto relative my-auto w-full max-w-md rounded-[28px] bg-white px-6 pb-7 pt-9 text-slate-900 shadow-[0_30px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/40 sm:px-8"
          >
            <button
              type="button"
              onClick={() => setHelpPopupOpen(false)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              aria-label="Close help popup"
            >
              <X className="size-5" />
            </button>
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-700/30">
              <PhoneCall className="size-8" />
            </div>
            <h2
              id="help-popup-title"
              className="mt-6 text-center text-3xl font-black tracking-tight text-slate-900"
            >
              NEED HELP?
            </h2>
            <p className="mt-2 text-center text-base font-medium text-slate-600">
              Talk to our expert now!
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-3 py-3 font-bold text-blue-700 shadow-inner shadow-blue-100 sm:px-4">
              <PhoneCall className="size-5 shrink-0" />
              <span className="flex flex-col text-left text-base tracking-tight sm:text-lg">
                <span>+91-9891915550</span>
                <span>01141882075</span>
              </span>
            </div>
            <a
              href="tel:+919891915550"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <PhoneCall className="size-4" />
              CALL NOW
            </a>
            <a
              href="tel:+911141882075"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-600 px-5 py-3.5 text-base font-semibold text-blue-700 transition-all hover:bg-blue-50"
            >
              <PhoneCall className="size-4" />
              CALL 01141882075
            </a>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
              <ShieldCheck className="size-4 text-blue-600" />
              100% Confidential
            </div>
          </section>
        </div>
      )}

      <WhyChoise />
      <AwardRecog />
      <FounderMessage />
      <Service />
      <Process />
      <Testimonial />
      <HomeContact />
    </>
  );
}

export default Home
