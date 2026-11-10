import { Check } from 'lucide-react'
import awardImage from '../../assets/trophy.jpeg'

const recognitionPoints = [
  'Award Winning Investigation Agency',
  'Advanced Surveillance Expertise',
  'Trusted by Individuals & Corporates',
  'Confidential & Ethical Investigations',
  'PAN India Detective Network',
  'Proven Track Record of Successful Cases',
]

const AwardRecog = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div>
          <p className="text-lg font-medium italic text-blue-700 sm:text-xl">
            Award &amp; Recognition
          </p>

          <h2 className="mt-4 max-w-[46rem] font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-[3.1rem]">
            PROUD RECIPIENT OF INDIAN TRADE
            <span className="mt-2 block">AWARD 2025</span>
          </h2>

          <div className="mt-5 h-1 w-28 rounded-full bg-blue-600" />

          <p className="mt-7 max-w-[46rem] text-base leading-8 text-slate-700 sm:text-lg">
            Vertex Intelligence Services was honored with the prestigious Indian
            Trade Award for excellence in private detective and intelligence
            services. This recognition reflects our dedication to delivering
            confidential investigations, advanced surveillance solutions, and
            reliable intelligence support for clients across India and overseas.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {recognitionPoints.map((item) => (
              <div key={item} className="flex items-center gap-3 text-left">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 ring-1 ring-blue-200">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-lg font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
            <img
              src={awardImage}
              alt="Award recognition ceremony"
              className="h-[430px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardRecog
