import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import intelligenceImage from '../../assets/image-why.webp'

const serviceBenefits = {
  'background-checking': {
    title: 'Background Checking',
    benefits: [
      'A review shaped around your specific question',
      'A clearly agreed and proportionate scope',
      'Relevant details carefully considered',
      'Clear summaries of findings and limitations',
      'Discreet support for informed decisions',
    ],
  },
  'corporate-verification': {
    title: 'Corporate Verification',
    benefits: [
      'Professional corporate intelligence',
      'Confidential investigation methods',
      'Clear evidence summaries and reports',
      'A focused review of relevant business details',
      'Support for more informed business decisions',
    ],
  },
  'cyber-investigation': {
    title: 'Cyber Investigation',
    benefits: [
      'A structured review of suspicious online activity',
      'Relevant messages, links, and details organized',
      'Support with understanding possible online fraud',
      'Clear observations and practical next steps',
      'A discreet approach to sensitive digital concerns',
    ],
  },
  'loyalty-test': {
    title: 'Loyalty Test',
    benefits: [
      'A private, considerate first conversation',
      'Clear boundaries agreed before any work begins',
      'A discreet approach to sensitive concerns',
      'Relevant observations within the agreed scope',
      'Honest expectations about what can be established',
    ],
  },
  'missing-person-search': {
    title: 'Missing Person Search',
    benefits: [
      'A caring and respectful approach to your situation',
      'Timelines and relevant information brought together',
      'Potential leads reviewed within an agreed scope',
      'Clear updates on findings and limitations',
      'Practical guidance on sensible next steps',
    ],
  },
  'pre-matrimonial-investigation': {
    title: 'Pre-Matrimonial Investigation',
    benefits: [
      'Discreet support before an important commitment',
      'Checks focused on the details you want to clarify',
      'A respectful, clearly agreed scope',
      'Relevant findings explained without assumptions',
      'Greater clarity to support your own decision',
    ],
  },
  'post-matrimonial-investigation': {
    title: 'Post-Matrimonial Investigation',
    benefits: [
      'Sensitive concerns handled with care',
      'A private discussion without assumptions',
      'Clear boundaries and expectations from the start',
      'Factual findings within the agreed scope',
      'Thoughtful guidance on possible next steps',
    ],
  },
  'surveillance-reconnaissance': {
    title: 'Surveillance & Reconnaissance',
    benefits: [
      'Observations planned around a defined purpose',
      'A scope agreed before an assignment begins',
      'Relevant information documented carefully',
      'Straightforward reports of observations and limits',
      'Professional, discreet investigative support',
    ],
  },
}

const WhyChooseUs = ({ serviceId }) => {
  const service = serviceBenefits[serviceId]

  if (!service) return null

  return (
    <section
      aria-labelledby="why-choose-us-title"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-slate-50" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            A considered approach
          </p>
          <h2
            id="why-choose-us-title"
            className="mt-3 font-serif text-3xl font-bold text-slate-950 sm:text-4xl"
          >
            Why Choose Us for {service.title}
          </h2>
          <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-blue-600" />
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-3.5">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group flex min-h-[72px] items-center gap-4 rounded-xl border border-blue-100 bg-white px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/5 sm:px-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white transition duration-300 group-hover:scale-105 group-hover:bg-blue-600">
                  <ArrowRight size={19} strokeWidth={2.5} />
                </span>
                <span className="text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.figure
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="group relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-200/70 via-transparent to-slate-200/80 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-xl sm:p-3">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={intelligenceImage}
                  alt="Investigation team reviewing intelligence and case information"
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px] lg:h-[420px]"
                />
                <div className="pointer-events-none absolute inset-3 rounded-lg border border-white/40 sm:inset-4" />
              </div>
              <figcaption className="px-4 pb-4 pt-5 sm:px-5 sm:pb-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
                  <ShieldCheck size={15} className="text-blue-700" />
                  Discreet. Focused. Professional.
                </span>
                <p className="mt-3 font-serif text-xl font-semibold text-slate-900 sm:text-2xl">
                  Clarity begins with the right questions.
                </p>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
