import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import aboutImage from '../../assets/about.jpg'

const features = [
  'Licensed Investigators',
  'Advanced Surveillance Tools',
  'Confidential Operations',
  'Legal & Ethical Investigations',
  'Real-Time Reporting',
]

const WhyChoise = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-center text-lg font-medium italic text-blue-700 sm:text-xl lg:text-left">
            About Us
          </p>

          <h2 className="mt-4 text-center font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-left lg:text-[3.2rem]">
            ABOUT VERTEX INTELLIGENCE
            <span className="mt-2 block text-slate-900">SERVICES</span>
          </h2>

          <div className="mt-5 h-1 w-28 rounded-full bg-blue-600 lg:mt-6" />

          <p className="mt-7 max-w-[39rem] text-base leading-8 text-slate-700 sm:text-lg">
            Vertex Intelligence Services is a professional private investigation
            agency offering discreet, ethical, and result-oriented detective
            services for individuals, corporates, legal firms, and organizations.
            Our experienced investigators use modern surveillance techniques and
            intelligence methods to uncover facts with complete confidentiality.
          </p>

          <div className="mt-8 grid max-w-[42rem] gap-x-8 gap-y-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-left">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 ring-1 ring-blue-200">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-lg font-medium text-slate-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 rounded-xl border-[2px] border-blue-600 px-7 py-3 text-base font-bold uppercase tracking-[0.08em] text-blue-700 transition hover:bg-blue-600 hover:text-white"
            >
              Learn More
              <span aria-hidden="true" className="text-xl">→</span>
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <img
            src={aboutImage}
            alt="Professional intelligence analysis workspace"
            className="h-[430px] w-full object-cover sm:h-[520px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChoise
