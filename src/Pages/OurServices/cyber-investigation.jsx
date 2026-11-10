
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Search,
  FileSearch,
  Fingerprint,
  LockKeyhole,
  CheckCircle2,
  MessageSquareText,
  Eye,
  Network,
  ClipboardCheck,
  UserRoundCheck,
  ChevronRight,
  Shield,
} from 'lucide-react'

import cyberInvestigation from '../../assets/cyber_investigation.jpg'
import WhyChooseUs from './WhyChooseUs'

// Keep service content and page layout together.
const service = {
  id: 'cyber-investigation',
  title: 'Cyber Investigation',
  eyebrow: 'Digital intelligence. Responsible investigation.',
  description:
    'Navigate digital uncertainty with a structured, confidential review of suspicious online activity, potential impersonation, and suspected digital fraud.',
  image: cyberInvestigation,
  overview:
    'Digital incidents can leave you with unanswered questions, conflicting information, and uncertainty about what to do next. Vertex Intelligence Services helps you organize the available information, examine relevant details, and understand practical next steps.',
  focusAreas: [
    {
      icon: Search,
      title: 'Suspicious online activity',
      description:
        'Review reported incidents, unusual interactions, and available information to build a clearer timeline.',
    },
    {
      icon: Fingerprint,
      title: 'Online impersonation concerns',
      description:
        'Organize relevant profiles, messages, links, and other information relating to suspected impersonation.',
    },
    {
      icon: FileSearch,
      title: 'Digital information review',
      description:
        'Structure relevant material you provide and identify details that may warrant further assessment.',
    },
    {
      icon: ShieldCheck,
      title: 'Potential digital fraud',
      description:
        'Help you understand reported suspicious communications, transactions, and possible warning signs.',
    },
  ],
  process: [
    {
      number: '01',
      title: 'Confidential consultation',
      description:
        'Explain your concern and the circumstances surrounding the incident.',
      icon: MessageSquareText,
    },
    {
      number: '02',
      title: 'Information assessment',
      description:
        'Review the information you lawfully provide and identify relevant details.',
      icon: ClipboardCheck,
    },
    {
      number: '03',
      title: 'Structured findings',
      description:
        'Summarize observations, limitations, and questions that may need further investigation.',
      icon: FileSearch,
    },
    {
      number: '04',
      title: 'Next-step guidance',
      description:
        'Discuss appropriate options, including contacting the relevant platform or authorities.',
      icon: ArrowRight,
    },
  ],
  suitableFor:
    'Individuals and organizations dealing with suspicious digital communications, possible online impersonation, or concerns about digital fraud.',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
  })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const CyberInvestigation = () => {
  useEffect(() => {
    document.title = 'Cyber Investigation | Vertex Intelligence Services'
  }, [])

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#071426] text-white lg:min-h-[690px]">
        <div className="absolute inset-0 -z-20">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-top opacity-25 sm:object-cover sm:object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061224] via-[#071426]/95 to-[#071426]/65" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071426] via-transparent to-[#071426]/30" />

        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full border border-blue-300/10 sm:h-[450px] sm:w-[450px]">
          <div className="absolute inset-12 rounded-full border border-blue-300/10" />
          <div className="absolute inset-24 rounded-full border border-blue-300/10" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-28 lg:pt-12">
          <nav
            aria-label="Breadcrumb"
            className="mb-14 flex flex-wrap items-center gap-2 text-sm text-slate-400 sm:mb-20"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              to="/our-services"
              className="transition hover:text-white"
            >
              Our Services
            </Link>
            <ChevronRight size={14} />
            <span className="text-blue-300">{service.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-xs">
                  Confidential · Ethical · Professional
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300"
              >
                {service.eyebrow}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Clarity in a
                <span className="block text-blue-300">
                  connected world.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                {service.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Discuss Your Enquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#our-approach"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-blue-300 hover:bg-white/5"
                >
                  Explore Our Approach
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-blue-300" />
                  Privacy-conscious
                </span>
                <span className="flex items-center gap-2">
                  <ClipboardCheck size={17} className="text-blue-300" />
                  Structured review
                </span>
                <span className="flex items-center gap-2">
                  <UserRoundCheck size={17} className="text-blue-300" />
                  Professional guidance
                </span>
              </motion.div>
            </motion.div>

            {/* Hero information card */}
            <Reveal className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b1c31]/85 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                      Digital intelligence
                    </span>
                    <h2 className="mt-3 font-serif text-2xl font-semibold">
                      A clearer picture starts here.
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-blue-300/20 bg-blue-400/10 p-3">
                    <ShieldCheck
                      size={28}
                      className="text-blue-300"
                    />
                  </div>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-5">
                  {[
                    {
                      icon: Eye,
                      title: 'Understand the concern',
                      text: 'Establish what happened and what remains uncertain.',
                    },
                    {
                      icon: Network,
                      title: 'Organize available information',
                      text: 'Bring relevant details together for a structured review.',
                    },
                    {
                      icon: LockKeyhole,
                      title: 'Consider appropriate next steps',
                      text: 'Explore responsible options based on the circumstances.',
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300 ring-1 ring-white/10">
                          <Icon size={21} />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-7 rounded-xl border border-blue-300/15 bg-blue-400/5 p-4">
                  <p className="text-xs leading-6 text-slate-300">
                    Every enquiry is different. The scope of any review
                    depends on the information available, lawful access,
                    and the nature of the concern.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      </section>

      {/* SERVICE INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={service.image}
                  alt="Digital investigation and information review"
                  className="h-[330px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[470px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center gap-4 rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                  <FileSearch size={25} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Evidence-aware assessment
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Review the available information responsibly.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              Understanding the situation
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              When digital concerns demand a
              <span className="text-blue-700"> closer look.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {service.overview}
            </p>

            <div className="mt-8 space-y-4">
              {[
                'A structured review of the information available.',
                'Clear communication about findings and limitations.',
                'Practical guidance on possible next steps.',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-blue-700"
                  />
                  <p className="leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border-b-2 border-blue-700 pb-2 text-sm font-bold text-slate-900 transition hover:text-blue-700"
              >
                Talk to our team
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="relative bg-[#f5f8fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              Areas of focus
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
              Understand the details that matter.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Each enquiry is considered on its own circumstances, with
              attention to relevant information, responsible assessment,
              and appropriate next steps.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {service.focusAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <motion.article
                  key={area.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50 transition duration-300 group-hover:bg-blue-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071426] text-blue-300 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <span className="font-mono text-sm text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-bold leading-snug text-slate-900">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {area.description}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section
        id="our-approach"
        className="relative overflow-hidden bg-[#071426] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              A considered process.
              <span className="block text-blue-300">
                A clearer direction.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              We take a measured approach to understanding your concern.
              The process is shaped by the information available, the
              agreed scope, and applicable legal and ethical boundaries.
            </p>
          </Reveal>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-blue-500/50 via-blue-300/30 to-transparent lg:block" />

            {service.process.map((step) => {
              const Icon = step.icon

              return (
                <Reveal key={step.number}>
                  <article className="group relative">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-[#10243d] text-blue-300 transition duration-300 group-hover:border-blue-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <p className="mt-7 font-mono text-xs tracking-[0.2em] text-blue-300">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-3 text-lg font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHO THIS SERVICE HELPS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800">
              <Shield size={15} />
              Who we assist
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Support shaped around your concerns.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="flex items-start gap-5">
                <div className="hidden shrink-0 rounded-2xl bg-blue-50 p-4 text-blue-700 sm:block">
                  <UserRoundCheck size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Individuals and organizations
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {service.suitableFor}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-sm leading-7 text-slate-500">
                      The appropriate scope of assistance depends on
                      the circumstances. We do not promise access to
                      private accounts, guaranteed identification,
                      recovery of lost funds, or outcomes beyond our
                      lawful capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE VERTEX */}
      <WhyChooseUs serviceId={service.id} />

      {/* FINAL CTA */}
      <section className="px-5 pb-20 pt-8 sm:px-8 sm:pb-24 lg:px-10">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-blue-300/10 sm:h-96 sm:w-96">
              <div className="absolute inset-10 rounded-full border border-blue-300/10" />
              <div className="absolute inset-20 rounded-full border border-blue-300/10" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-400/10" />

            <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  <LockKeyhole size={15} />
                  A confidential first conversation
                </div>

                <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Have a digital concern that needs a closer look?
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-300">
                  Start with a conversation. Tell us about your
                  concern, and our team can discuss the information
                  available and the appropriate next steps.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Contact Vertex
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/our-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-white/5"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}

export default CyberInvestigation
