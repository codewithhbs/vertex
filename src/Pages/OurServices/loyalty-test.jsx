import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  ClipboardCheck,
  Eye,
  Scale,
  CheckCircle2,
  UserRoundCheck,
  HandHeart,
  Compass,
  ChevronRight,
} from 'lucide-react'

import loyaltyTestImage from '../../assets/loyality_test.jpg'
import WhyChooseUs from './WhyChooseUs'

const service = {
  id: 'loyalty-test',
  title: 'Loyalty Test',
  eyebrow: 'Sensitive concerns. Thoughtful guidance.',
  description:
    'Confidential support for sensitive relationship and trust concerns, helping you explore your options with clarity, discretion, and respect.',
  image: loyaltyTestImage,
  overview:
    'When trust becomes uncertain, emotions and unanswered questions can make it difficult to decide what to do next. Vertex Intelligence Services provides an opportunity to discuss your concerns privately, understand the circumstances, and consider whether a lawful, discreet fact-finding approach may be appropriate.',
  focusAreas: [
    {
      icon: MessageCircle,
      title: 'Understanding your concerns',
      description:
        'A private discussion to understand your situation, questions, and what you hope to clarify.',
    },
    {
      icon: ClipboardCheck,
      title: 'Defining the scope',
      description:
        'Establish clear expectations, agreed boundaries, and an appropriate approach before proceeding.',
    },
    {
      icon: Eye,
      title: 'Reviewing relevant observations',
      description:
        'Consider information obtained through lawful and appropriate means without assuming a particular outcome.',
    },
    {
      icon: HeartHandshake,
      title: 'Respectful guidance',
      description:
        'Discuss available options with sensitivity to personal circumstances, privacy, and individual dignity.',
    },
  ],
  process: [
    {
      number: '01',
      title: 'Private consultation',
      description:
        'Tell us about your concerns and the questions you would like to address.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Clarify expectations',
      description:
        'Discuss objectives, limitations, lawful boundaries, and the appropriate scope.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Discreet assessment',
      description:
        'Where appropriate, consider agreed fact-finding options within lawful and ethical limits.',
      icon: ClipboardCheck,
    },
    {
      number: '04',
      title: 'Discuss the findings',
      description:
        'Review relevant observations and understand what they can and cannot establish.',
      icon: HandHeart,
    },
  ],
  suitableFor:
    'People who would like to discuss a sensitive relationship or trust concern privately before deciding on their next steps.',
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

const Reveal = ({ children, className = '' }) => {
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
      className={className}
    >
      {children}
    </motion.div>
  )
}

const LoyaltyTest = () => {
  useEffect(() => {
    document.title = 'Loyalty Test | Vertex Intelligence Services'
  }, [])

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#101426] text-white lg:min-h-[690px]">
        <div className="absolute inset-0 -z-20">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-top opacity-25 sm:object-cover sm:object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101426] via-[#101426]/95 to-[#101426]/65" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101426] via-transparent to-[#101426]/30" />

        <div className="pointer-events-none absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full border border-rose-200/10 sm:h-[450px] sm:w-[450px]">
          <div className="absolute inset-12 rounded-full border border-rose-200/10" />
          <div className="absolute inset-24 rounded-full border border-rose-200/10" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10">
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

            <span className="text-rose-200">{service.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-rose-200/20 bg-rose-200/5 px-4 py-2"
              >
                <LockKeyhole size={15} className="text-rose-200" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-100 sm:text-xs">
                  Private · Respectful · Discreet
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-rose-200"
              >
                {service.eyebrow}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Clarity begins
                <span className="block text-rose-200">
                  with understanding.
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
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-700 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-rose-600"
                >
                  Discuss Your Concerns
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#our-approach"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-rose-200 hover:bg-white/5"
                >
                  Understand Our Approach
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-rose-200" />
                  Privacy-conscious
                </span>

                <span className="flex items-center gap-2">
                  <HeartHandshake size={17} className="text-rose-200" />
                  Sensitive approach
                </span>

                <span className="flex items-center gap-2">
                  <Scale size={17} className="text-rose-200" />
                  Ethical boundaries
                </span>
              </motion.div>
            </motion.div>

            {/* HERO INFORMATION CARD */}
            <Reveal className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] bg-rose-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#191b30]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-200">
                      A thoughtful approach
                    </span>

                    <h2 className="mt-3 font-serif text-2xl font-semibold">
                      Every concern deserves a considered response.
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-rose-200/20 bg-rose-200/10 p-3">
                    <HeartHandshake
                      size={28}
                      className="text-rose-200"
                    />
                  </div>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-5">
                  {[
                    {
                      icon: MessageCircle,
                      title: 'Listen without assumptions',
                      text: 'Understand your concerns before discussing possible options.',
                    },
                    {
                      icon: ShieldCheck,
                      title: 'Respect personal boundaries',
                      text: 'Consider privacy, dignity, and appropriate limits at every stage.',
                    },
                    {
                      icon: Compass,
                      title: 'Help you consider next steps',
                      text: 'Explain realistic options without promising a specific outcome.',
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-rose-200 ring-1 ring-white/10">
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

                <div className="mt-7 rounded-xl border border-rose-200/15 bg-rose-200/5 p-4">
                  <p className="text-xs leading-6 text-slate-300">
                    Our priority is to discuss your concern with
                    discretion and clarity. No particular finding or
                    relationship outcome is guaranteed.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-rose-200/50 to-transparent" />
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={service.image}
                  alt="A discreet setting for discussing sensitive personal concerns"
                  className="h-[330px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[470px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center gap-4 rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
                <div className="rounded-xl bg-rose-200/10 p-3 text-rose-200">
                  <ShieldCheck size={25} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Your concerns, treated with care
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    A measured approach to sensitive enquiries.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-800">
              Service overview
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A private conversation.
              <span className="text-rose-800">
                {' '}A clearer perspective.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {service.overview}
            </p>

            <div className="loyalty-help-card mt-8 rounded-2xl border border-rose-100 bg-rose-50/70 p-6">
              <div className="flex items-start gap-4">
                <div className="loyalty-help-card__icon rounded-xl bg-white p-3 text-rose-800 shadow-sm">
                  <UserRoundCheck size={23} />
                </div>

                <div>
                  <h3 className="loyalty-help-card__title font-bold text-slate-900">
                    Who this service may help
                  </h3>

                  <p className="loyalty-help-card__description mt-2 text-sm leading-7 text-slate-600">
                    {service.suitableFor}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                'A respectful discussion of your concerns.',
                'Clear expectations before any work begins.',
                'An honest explanation of limitations and possible outcomes.',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-rose-800"
                  />

                  <p className="leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="loyalty-focus-section relative bg-[#f8f7fa] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-rose-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-800">
              What we focus on
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
              Thoughtful guidance, built around your concerns.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Sensitive situations deserve a measured response.
              Our approach prioritizes clear communication, realistic
              expectations, and respect for everyone involved.
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
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-950/5 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-rose-50 transition duration-300 group-hover:bg-rose-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17192d] text-rose-200 transition duration-300 group-hover:bg-rose-800 group-hover:text-white">
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

                    <div className="mt-6 h-1 w-10 rounded-full bg-rose-800 transition-all duration-300 group-hover:w-20" />
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
        className="relative overflow-hidden bg-[#101426] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-rose-700/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-200">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Consider the facts.
              <span className="block text-rose-200">
                Respect every boundary.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              We begin with a conversation, not assumptions. Any
              proposed approach is discussed in advance, with attention
              to lawful boundaries, personal privacy, and the limitations
              of what an enquiry can establish.
            </p>
          </Reveal>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-rose-400/50 via-rose-200/30 to-transparent lg:block" />

            {service.process.map((step) => {
              const Icon = step.icon

              return (
                <Reveal key={step.number}>
                  <article className="group relative">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-200/20 bg-[#22243a] text-rose-200 transition duration-300 group-hover:border-rose-200 group-hover:bg-rose-800 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <p className="mt-7 font-mono text-xs tracking-[0.2em] text-rose-200">
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

      {/* PRIVACY AND TRUST */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-900">
              <LockKeyhole size={15} />
              Privacy and respect
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Sensitive matters deserve thoughtful handling.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Your concerns are personal. We aim to communicate
              professionally, establish clear expectations, and handle
              enquiry information responsibly.
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="flex items-start gap-5">
                <div className="hidden shrink-0 rounded-2xl bg-rose-50 p-4 text-rose-800 sm:block">
                  <ShieldCheck size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Discretion with clear boundaries
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    Before proceeding, we discuss the purpose of the
                    enquiry, the available options, and any applicable
                    limitations. We do not promise a particular finding,
                    relationship outcome, or access to information that
                    cannot lawfully be obtained.
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-rose-800"
                      />

                      <p className="text-sm leading-7 text-slate-600">
                        Your next steps remain your decision. Our role
                        is to discuss the enquiry and its limitations,
                        not to make personal or relationship decisions
                        on your behalf.
                      </p>
                    </div>
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
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#101426] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-rose-200/10 sm:h-96 sm:w-96">
              <div className="absolute inset-10 rounded-full border border-rose-200/10" />
              <div className="absolute inset-20 rounded-full border border-rose-200/10" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-rose-800/10 via-transparent to-rose-400/5" />

            <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-rose-200">
                  <LockKeyhole size={15} />
                  A private first conversation
                </div>

                <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Would you like to discuss your concerns privately?
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-300">
                  Start with a conversation. Share only what you feel
                  comfortable discussing, and our team can explain the
                  available options and appropriate next steps.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-800 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-rose-700"
                >
                  Contact Vertex
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/our-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-rose-200 hover:bg-white/5"
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

export default LoyaltyTest
