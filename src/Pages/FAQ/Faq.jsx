import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  CircleHelp,
  Clock3,
  Fingerprint,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const questions = [
  {
    question: 'What services does Vertex Intelligence Services provide?',
    answer:
      'Our services include background checking, corporate verification, cyber investigation, loyalty tests, missing-person searches, pre- and post-matrimonial investigations, and surveillance and reconnaissance.',
    icon: Fingerprint,
    category: 'Our services',
  },
  {
    question: 'How do I discuss a sensitive enquiry?',
    answer:
      'Contact us by phone or email to arrange a private conversation. You can share only the information needed for an initial discussion and ask questions about the process before deciding on next steps.',
    icon: MessageCircle,
    category: 'Getting started',
  },
  {
    question: 'Will my enquiry be handled confidentially?',
    answer:
      'We understand the sensitive nature of private investigations and approach enquiries discreetly. During your initial conversation, you can discuss how information will be handled for your specific matter.',
    icon: LockKeyhole,
    category: 'Privacy & trust',
  },
  {
    question: 'How long does an investigation take?',
    answer:
      'Timeframes depend on the type of enquiry, the information available, and the circumstances of the case. We can discuss likely next steps after learning more about your needs.',
    icon: Clock3,
    category: 'Process & timelines',
  },
  {
    question: 'Can you guarantee a particular result?',
    answer:
      'No investigation can guarantee a specific outcome. We can explain the proposed scope, process, and communication expectations before work begins.',
    icon: BadgeCheck,
    category: 'Our approach',
  },
  {
    question: 'Where can I ask about services or pricing?',
    answer:
      'Please contact our team with a brief outline of the service you are considering. We can discuss the requirements and provide information relevant to your enquiry.',
    icon: CircleHelp,
    category: 'Enquiries & pricing',
  },
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate overflow-hidden bg-[#071426] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(37,99,235,0.24),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(14,165,233,0.12),transparent_40%)]" />

        {/* Animated background ring */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="pointer-events-none absolute -right-40 -top-44 -z-10 size-[430px] rounded-full border border-white/[0.07] sm:size-[570px]"
        >
          <div className="absolute left-16 top-20 size-3 rounded-full bg-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.8)]" />
        </motion.div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
          {/* Hero content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300 sm:text-sm"
            >
              <Sparkles size={15} />
              Your questions, answered
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-3xl font-serif text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Clarity begins
              <br />
              with the right{' '}
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                questions.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Everything you need to know about our investigation services,
              confidentiality, and the process of getting started with Vertex
              Intelligence Services.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#faq-list"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#071426] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-sky-100 hover:shadow-xl hover:shadow-sky-400/10 active:translate-y-0"
              >
                Explore FAQs
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-sky-500/10 active:translate-y-0"
              >
                Contact our team
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-sky-300" />
                Discreet enquiries
              </span>

              <span className="flex items-center gap-2">
                <LockKeyhole size={16} className="text-sky-300" />
                Privacy-conscious approach
              </span>
            </motion.div>
          </motion.div>

          {/* Hero information card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: 'easeOut',
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/[0.08] blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl transition-colors duration-300 hover:border-sky-300/25 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.06 }}
                  transition={{ duration: 0.25 }}
                  className="flex size-14 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-300"
                >
                  <ShieldCheck size={29} strokeWidth={1.5} />
                </motion.div>

                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-medium text-emerald-300">
                  Here to help
                </span>
              </div>

              <h2 className="mt-7 font-serif text-2xl font-semibold sm:text-3xl">
                Information you can start with.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Understand the basics before discussing your enquiry with our
                team.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  ['01', 'Understand our services'],
                  ['02', 'Learn about our process'],
                  ['03', 'Discuss your next steps'],
                ].map(([number, title], index) => (
                  <motion.div
                    key={number}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + index * 0.12 }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.035] p-4 transition-colors duration-300 hover:border-sky-300/25 hover:bg-sky-300/[0.06]"
                  >
                    <span className="font-mono text-sm text-sky-300">
                      {number}
                    </span>

                    <span className="text-sm font-medium text-slate-100">
                      {title}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-slate-500 transition-colors group-hover:text-sky-300"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-slate-400">
                Every enquiry is different. The right next step depends on
                your circumstances and requirements.
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section
        id="faq-list"
        className="relative scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="pointer-events-none absolute left-0 top-0 -z-10 size-80 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
              <span className="h-px w-7 bg-blue-500" />
              Knowledge centre
              <span className="h-px w-7 bg-blue-500" />
            </span>

            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Frequently asked{' '}
              <span className="text-blue-700">questions.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Find straightforward answers to common questions about our
              services, approach, and enquiry process.
            </p>
          </motion.div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* Sidebar */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:sticky lg:top-28"
            >
              <motion.div
                whileHover={{
                  y: -4,
                  transition: { duration: 0.25 },
                }}
                className="relative overflow-hidden rounded-[1.75rem] bg-[#071426] p-7 text-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-950/20 sm:p-9"
              >
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-sky-300"
                  >
                    <CircleHelp size={25} />
                  </motion.div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold">
                    Looking for answers?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Start with the questions below. If you need more specific
                    information, our team can discuss your requirements.
                  </p>

                  <div className="my-7 h-px bg-white/10" />

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-3xl font-semibold">
                        {String(questions.length).padStart(2, '0')}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Helpful answers
                      </p>
                    </div>

                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((item) => (
                        <span
                          key={item}
                          className="flex size-9 items-center justify-center rounded-full border-2 border-[#071426] bg-slate-800 text-sky-300"
                        >
                          {item === 0 ? (
                            <ShieldCheck size={15} />
                          ) : item === 1 ? (
                            <LockKeyhole size={15} />
                          ) : (
                            <MessageCircle size={15} />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group mt-7 flex w-full items-center justify-between rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-950/30 active:translate-y-0"
                  >
                    Ask us directly

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -3,
                  transition: { duration: 0.25 },
                }}
                className="mt-5 flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <LockKeyhole
                  size={21}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Your privacy matters
                  </h4>

                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Ask how your information will be handled before sharing
                    sensitive details.
                  </p>
                </div>
              </motion.div>
            </motion.aside>

            {/* FAQ accordion */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="space-y-4"
            >
              {questions.map((item, index) => {
                const Icon = item.icon
                const isOpen = activeIndex === index
                const answerId = `faq-answer-${index}`

                return (
                  <motion.article
                    key={item.question}
                    variants={fadeUp}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.25 },
                    }}
                    className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? 'border-blue-200 shadow-xl shadow-blue-900/[0.06]'
                        : 'border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/[0.07]'
                    }`}
                  >
                    {/* Active accent */}
                    <div
                      className={`absolute bottom-0 left-0 top-0 w-1 transition-colors duration-300 ${
                        isOpen ? 'bg-blue-600' : 'bg-transparent'
                      }`}
                    />

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setActiveIndex(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6"
                    >
                      <motion.span
                        animate={{
                          scale: isOpen ? 1.04 : 1,
                        }}
                        whileHover={{ scale: 1.08 }}
                        className={`flex size-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/20'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700'
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </motion.span>

                      <span className="min-w-0 flex-1">
                        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 sm:text-xs">
                          {item.category}
                        </span>

                        <span
                          className={`block text-sm font-semibold leading-6 sm:text-base ${
                            isOpen
                              ? 'text-blue-950'
                              : 'text-slate-800 group-hover:text-blue-900'
                          }`}
                        >
                          {item.question}
                        </span>
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? 'border-blue-700 bg-blue-700 text-white'
                            : 'border-slate-200 bg-white text-slate-500 group-hover:border-blue-200 group-hover:text-blue-700'
                        }`}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    {/* Smooth expanding answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={answerId}
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.3,
                              ease: 'easeInOut',
                            },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="ml-[4.25rem] border-t border-slate-100 px-5 pb-6 pt-4 sm:ml-[5.25rem] sm:px-6 sm:pt-5">
                            <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                              {item.answer}
                            </p>

                            <Link
                              to="/contact"
                              className="group/link mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700 transition-colors hover:text-blue-950 sm:text-sm"
                            >
                              Have a follow-up question?

                              <ArrowRight
                                size={15}
                                className="transition-transform duration-200 group-hover/link:translate-x-1"
                              />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] px-6 py-12 text-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-950/15 sm:px-12 sm:py-16 lg:px-16"
        >
          <div className="absolute -right-20 -top-28 size-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 size-64 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                <span className="size-2 rounded-full bg-sky-300" />
                Let's talk
              </div>

              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Every enquiry starts with a conversation.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Tell us what information you are looking for. We can discuss
                your requirements, the process, and the appropriate next
                steps.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#071426] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-sky-100 hover:shadow-xl hover:shadow-blue-950/40 active:translate-y-0"
            >
              Contact us

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="relative mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-sky-300" />
              Professional approach
            </span>

            <span className="flex items-center gap-2">
              <LockKeyhole size={15} className="text-sky-300" />
              Discreet communication
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default Faq
