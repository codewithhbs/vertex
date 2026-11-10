import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Search,
  MapPin,
  FileSearch,
  Clock,
  HeartHandshake,
  ClipboardList,
  MessageCircle,
  CheckCircle2,
  UserRoundSearch,
  Compass,
  ChevronRight,
  LockKeyhole,
  Users,
} from 'lucide-react'

import missingPersonImage from '../../assets/missing_person.jpg'
import WhyChooseUs from './WhyChooseUs'

const service = {
  id: 'missing-person-search',
  title: 'Missing Person Search',
  eyebrow: 'Compassionate support. Careful investigation.',
  description:
    'Discreet investigative support for families and individuals seeking answers, organizing available information, and exploring appropriate next steps.',
  image: missingPersonImage,
  overview:
    'When someone goes missing, uncertainty can be overwhelming for the people who care about them. Vertex Intelligence Services offers a structured, considerate approach to reviewing available information, organizing potential leads, and discussing realistic options based on the circumstances.',
  focusAreas: [
    {
      icon: Clock,
      title: 'Timeline and key details',
      description:
        'Organize the known timeline, last confirmed contact, and other relevant details provided to us.',
    },
    {
      icon: Search,
      title: 'Reviewing potential leads',
      description:
        'Help structure available information and identify leads that may warrant further attention.',
    },
    {
      icon: FileSearch,
      title: 'Relevant information',
      description:
        'Review descriptions, photographs, known contacts, and other information shared lawfully.',
    },
    {
      icon: Compass,
      title: 'Practical next steps',
      description:
        'Discuss appropriate options and coordination with relevant authorities where necessary.',
    },
  ],
  process: [
    {
      number: '01',
      title: 'Initial consultation',
      description:
        'Explain the circumstances and share what is already known about the situation.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Organize the details',
      description:
        'Build a clear timeline and review the information and steps already taken.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Assess potential leads',
      description:
        'Consider appropriate avenues for further enquiries within lawful boundaries.',
      icon: Search,
    },
    {
      number: '04',
      title: 'Discuss next steps',
      description:
        'Review relevant observations, limitations, and options for moving forward.',
      icon: HeartHandshake,
    },
  ],
  suitableFor:
    'Families and individuals seeking additional private investigative support in a missing-person matter, alongside appropriate official reporting and assistance.',
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

const MissingPersonSearch = () => {
  useEffect(() => {
    document.title =
      'Missing Person Search | Vertex Intelligence Services'
  }, [])

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
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

        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full border border-sky-300/10 sm:h-[450px] sm:w-[450px]">
          <div className="absolute inset-12 rounded-full border border-sky-300/10" />
          <div className="absolute inset-24 rounded-full border border-sky-300/10" />
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

            <span className="text-sky-200">{service.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-300" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-100 sm:text-xs">
                  Compassionate · Discreet · Professional
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300"
              >
                {service.eyebrow}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Every lead matters.
                <span className="block text-sky-300">
                  Every detail counts.
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
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-sky-300 hover:bg-white/5"
                >
                  Explore Our Approach
                </a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-sky-300" />
                  Privacy-conscious
                </span>

                <span className="flex items-center gap-2">
                  <Users size={17} className="text-sky-300" />
                  Family-focused
                </span>

                <span className="flex items-center gap-2">
                  <ClipboardList size={17} className="text-sky-300" />
                  Structured review
                </span>
              </motion.div>
            </motion.div>

            {/* HERO INFORMATION CARD */}
            <Reveal className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2rem] bg-sky-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b1c31]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                      A structured approach
                    </span>

                    <h2 className="mt-3 font-serif text-2xl font-semibold">
                      Start with the information available.
                    </h2>
                  </div>

                  <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-3">
                    <UserRoundSearch
                      size={28}
                      className="text-sky-300"
                    />
                  </div>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-5">
                  {[
                    {
                      icon: Clock,
                      title: 'Establish the timeline',
                      text: 'Organize known events and the last confirmed contact.',
                    },
                    {
                      icon: MapPin,
                      title: 'Review relevant leads',
                      text: 'Bring available details and possible leads together.',
                    },
                    {
                      icon: ShieldCheck,
                      title: 'Consider safe next steps',
                      text: 'Discuss appropriate options and coordination with authorities.',
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-sky-300 ring-1 ring-white/10">
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

                <div className="mt-7 rounded-xl border border-sky-300/15 bg-sky-400/5 p-4">
                  <p className="text-xs leading-6 text-slate-300">
                    Private investigative support is not a substitute
                    for emergency services or official missing-person
                    reporting.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={service.image}
                  alt="Reviewing information related to a missing-person enquiry"
                  className="h-[330px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[470px]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center gap-4 rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
                <div className="rounded-xl bg-sky-400/10 p-3 text-sky-300">
                  <FileSearch size={25} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Information-led enquiries
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Careful review of details and potential leads.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              Service overview
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Searching for answers.
              <span className="text-blue-700">
                {' '}Supporting the next step.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {service.overview}
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Establish a clear timeline from known information.',
                'Organize potential leads and relevant identifying details.',
                'Understand realistic options and any limitations.',
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

            <div className="mt-9 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-blue-700 shadow-sm">
                  <HeartHandshake size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Who this service may help
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {service.suitableFor}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="missing-person-focus-section relative bg-[#f4f8fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              Areas of focus
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
              Every detail can help build a clearer picture.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A structured review can help bring together what is
              known, what remains unclear, and what may need further
              attention.
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071426] text-sky-300 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
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
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Review the details.
              <span className="block text-sky-300">
                Explore appropriate next steps.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              We begin by listening to your account of what happened
              and learning which steps have already been taken. Any
              proposed work is discussed in advance and must remain
              within lawful and appropriate boundaries.
            </p>
          </Reveal>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-sky-500/50 via-sky-300/30 to-transparent lg:block" />

            {service.process.map((step) => {
              const Icon = step.icon

              return (
                <Reveal key={step.number}>
                  <article className="group relative">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-300/20 bg-[#10243d] text-sky-300 transition duration-300 group-hover:border-sky-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <p className="mt-7 font-mono text-xs tracking-[0.2em] text-sky-300">
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

      {/* PRIVACY AND RESPONSIBILITY */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-800">
              <LockKeyhole size={15} />
              Privacy and responsibility
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Sensitive situations deserve responsible handling.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We understand that a missing-person matter can be
              emotionally difficult. Our aim is to communicate clearly,
              respect personal circumstances, and handle information
              responsibly.
            </p>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              <div className="flex items-start gap-5">
                <div className="hidden shrink-0 rounded-2xl bg-blue-50 p-4 text-blue-700 sm:block">
                  <ShieldCheck size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Careful, lawful, and realistic
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    Every matter has its own circumstances. We explain
                    the limits of a private enquiry and do not guarantee
                    that a person will be located. We do not claim
                    unauthorized access to private accounts, confidential
                    records, or restricted location data.
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-blue-700"
                      />

                      <p className="text-sm leading-7 text-slate-600">
                        Official missing-person reporting and emergency
                        assistance should always take priority where
                        appropriate.
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
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-sky-300/10 sm:h-96 sm:w-96">
              <div className="absolute inset-10 rounded-full border border-sky-300/10" />
              <div className="absolute inset-20 rounded-full border border-sky-300/10" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-sky-400/10" />

            <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                  <HeartHandshake size={16} />
                  A considerate first conversation
                </div>

                <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Looking for additional support with a missing-person enquiry?
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-300">
                  Tell us what has happened and what steps have already
                  been taken. Our team can discuss the information
                  available and appropriate next steps.
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
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-sky-300 hover:bg-white/5"
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

export default MissingPersonSearch