import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Handshake,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Target,
  Building2,
} from 'lucide-react'

import corporateVerification from '../../assets/corporate_verification.jpg'
import WhyChooseUs from './WhyChooseUs'

const service = {
  id: 'corporate-verification',
  title: 'Corporate Verification',
  image: corporateVerification,
  description:
    'Practical verification support for businesses, employees, partners, and organizations.',
  overview:
    'Before entering a business relationship or making an important hiring decision, you may want to confirm key details. We help identify the questions that matter and agree on a focused review suited to your needs.',
  focusAreas: [
    'Business and organizational details relevant to your enquiry',
    'Professional background information within the agreed scope',
    'Clarifying details that appear incomplete or inconsistent',
  ],
  approach:
    'We first learn about your business context and the decision you are considering. Together, we define what needs to be checked, review relevant information, and explain what we were able to establish.',
  suitableFor:
    'Businesses and professionals who want added clarity before starting or continuing a business relationship.',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const CorporateVerification = () => {
  const focusIcons = [Building2, FileSearch, ClipboardCheck]

  const processSteps = [
    {
      number: '01',
      title: 'Understand the requirement',
      description:
        'We discuss your business context and what you need to clarify.',
      icon: MessageSquareText,
    },
    {
      number: '02',
      title: 'Define the scope',
      description:
        'We agree on relevant details and a suitable approach to the enquiry.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Review relevant information',
      description:
        'Information is reviewed within the agreed scope of the assignment.',
      icon: FileSearch,
    },
    {
      number: '04',
      title: 'Explain the findings',
      description:
        'We share a clear summary of what could be established and any limitations.',
      icon: ClipboardCheck,
    },
  ]

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate bg-[#071426] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:55px_55px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400"
            >
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="text-blue-400" aria-hidden="true">
                /
              </span>

              <Link
                to="/our-services"
                className="transition hover:text-white"
              >
                Our Services
              </Link>

              <span className="text-blue-400" aria-hidden="true">
                /
              </span>

              <span className="text-white">{service.title}</span>
            </nav>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 sm:text-sm">
              <ShieldCheck size={16} />
              Confidential. Ethical. Professional.
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Corporate Verification
              <span className="mt-2 block text-blue-400">
                Built on Clarity.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {service.description} Get a clearer understanding of the details
              that matter before making important professional and business
              decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Discuss Your Enquiry
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/our-services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition duration-300 hover:border-blue-400 hover:bg-white/5"
              >
                Explore Services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-400" />
                Focused Reviews
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-400" />
                Clear Communication
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-400" />
                Confidential Enquiries
              </span>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-blue-400/20 sm:-inset-4" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-800 shadow-2xl shadow-black/30">
              <img
                src={service.image}
                alt="Corporate verification and business documentation"
                className="h-[300px] w-full object-cover sm:h-[390px] lg:h-[440px]"
              />
            </div>

            <motion.div
              className="relative mt-3 flex items-center gap-4 rounded-2xl border border-white/15 bg-slate-900 p-5 shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                <Building2 size={26} />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Informed Business Decisions
                </h2>
                <p className="mt-1 text-sm leading-5 text-slate-300">
                  Verification shaped around your enquiry.
                </p>
              </div>
              <ShieldCheck size={25} className="ml-auto hidden shrink-0 text-blue-400 sm:block" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              <span className="h-0.5 w-8 bg-blue-600" />
              Service Overview
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Make business decisions with
              <span className="text-blue-700"> greater clarity.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {service.overview}
            </p>

            <div className="mt-8 flex gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Handshake size={24} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Who This Service May Help
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {service.suitableFor}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-100/70 transition duration-500 group-hover:bg-blue-200/70" />

            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl">
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt="Documents for corporate verification"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[440px]"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  A focused approach
                </p>

                <h3 className="mt-2 max-w-sm text-2xl font-bold text-slate-900 sm:text-3xl">
                  The details matter in every business relationship.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              What We Focus On
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Verification shaped around your needs
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Every enquiry is different. We discuss the purpose of your
              verification and focus on relevant details within the agreed scope.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.focusAreas.map((area, index) => {
              const Icon = focusIcons[index]

              return (
                <motion.article
                  key={area}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    Focus Area 0{index + 1}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-900">
                    {area}
                  </h3>

                  <div className="mt-6 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              A structured, focused review.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              {service.approach}
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <LockKeyhole
                size={22}
                className="mt-0.5 shrink-0 text-blue-700"
              />

              <p className="text-sm leading-6 text-slate-600">
                The scope of each enquiry is discussed in advance, with
                appropriate attention to confidentiality and relevant boundaries.
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:gap-5 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-blue-700">
                        STEP {step.number}
                      </span>

                      <h3 className="font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="mt-1 shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs serviceId={service.id} />

      {/* CONTACT CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] text-white"
        >
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                <ShieldCheck size={17} />
                Confidentiality and Professional Care
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Clarity for your next business decision.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Tell us what you need to verify. Our team can discuss your
                requirements and help define a suitable scope for your enquiry.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Contact Our Team
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/our-services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-semibold text-white transition duration-300 hover:border-blue-400 hover:bg-white/5"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default CorporateVerification
