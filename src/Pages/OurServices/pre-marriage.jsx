import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Search,
  FileSearch,
  CheckCircle2,
  LockKeyhole,
  MessageCircle,
  ClipboardCheck,
  UserRoundCheck,
  ChevronRight,
  Eye,
  Handshake,
} from "lucide-react";

import preInvestigation from "../../assets/pre.jpg";
import WhyChooseUs from "./WhyChooseUs";

const service = {
  id: "pre-matrimonial-investigation",
  title: "Pre-Matrimonial Investigation",
  image: preInvestigation,
  description:
    "A discreet way to check important details before making a lifelong commitment.",
  overview:
    "Deciding to marry is a major step. If you have questions or details you would like to clarify, we can talk them through with you privately and agree on a focused, respectful enquiry.",
  focusAreas: [
    "Checking background details related to the questions you have raised",
    "Looking into information that seems incomplete or inconsistent",
    "Providing a discreet summary of relevant findings and limitations",
  ],
  approach:
    "We begin by listening to your concerns and understanding what you would like to clarify. Before proceeding, we agree on a suitable scope and explain how the enquiry will be handled. We then share a clear summary of our findings to help you make your own decision.",
  suitableFor:
    "Individuals or families who would like more clarity about important details before a marriage commitment.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const focusIcons = [Search, FileSearch, ClipboardCheck];

const steps = [
  {
    number: "01",
    title: "Private Consultation",
    description:
      "Share the details you would like to clarify in a confidential discussion with our team.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Scope & Planning",
    description:
      "We discuss your concerns, establish a suitable scope and explain the proposed approach.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Careful Review",
    description:
      "Relevant information is reviewed through appropriate and lawful enquiry methods.",
    icon: Search,
  },
  {
    number: "04",
    title: "Findings & Guidance",
    description:
      "Receive a clear summary of relevant findings, observations and any limitations.",
    icon: FileSearch,
  },
];

const PreMarriage = () => {
  useEffect(() => {
    document.title =
      "Pre-Matrimonial Investigation | Vertex Intelligence Services";
  }, []);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[600px] overflow-hidden bg-[#071426] text-white lg:min-h-[680px]">
        <div className="absolute inset-0 -z-20">
          <img
            src={service.image}
            alt=""
            className="h-full w-full object-contain object-top opacity-35 sm:object-cover sm:object-center"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061020] via-[#071426]/95 to-[#071426]/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071426] via-transparent to-[#071426]/30" />

        <div className="absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full bg-rose-500/10 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 -z-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />

        <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[680px] lg:px-10">
          <div className="max-w-4xl">
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-300"
            >
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight size={15} className="text-rose-300" />
              <Link to="/our-services" className="transition hover:text-white">
                Our Services
              </Link>
              <ChevronRight size={15} className="text-rose-300" />
              <span className="text-white">Pre-Matrimonial Investigation</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
                <ShieldCheck size={17} className="text-rose-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Private. Thoughtful. Discreet.
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.13] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Clarity Before
                <span className="mt-2 block text-rose-300">Commitment.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {service.description} Make informed decisions with a respectful,
                confidential and carefully considered approach.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-rose-950/30 transition duration-300 hover:-translate-y-1 hover:bg-rose-400"
                >
                  Discuss Your Enquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/our-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
                {[
                  { icon: LockKeyhole, label: "Confidential Enquiries" },
                  { icon: HeartHandshake, label: "Respectful Approach" },
                  { icon: ShieldCheck, label: "Careful Assessment" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={19} className="shrink-0 text-rose-300" />
                    <span className="text-sm text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-rose-300 sm:-left-6 sm:-top-6" />

              <div className="relative overflow-hidden rounded-t-[2rem] bg-slate-100 shadow-2xl shadow-slate-900/10">
                <img
                  src={service.image}
                  alt="A couple considering an important life decision"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[470px]"
                />
              </div>
              <div className="flex items-center gap-4 rounded-b-[2rem] bg-slate-900 p-5 text-white sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-400/20 text-rose-200">
                  <HeartHandshake size={25} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Every decision deserves clarity
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Thoughtful enquiries. Informed choices.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-full bg-rose-100 blur-2xl sm:-right-8" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                <span className="h-px w-8 bg-rose-500" />
                Service Overview
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                An important decision deserves
                <span className="text-rose-600"> informed clarity.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {service.overview}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Our role is to help you understand relevant information within
                an agreed scope—not to make the decision for you. Each enquiry
                is considered individually, with attention to privacy, relevance
                and the limitations of available information.
              </p>

              <div className="pre-marriage-help-card mt-8 flex items-start gap-4 rounded-2xl border border-rose-100 bg-rose-50/70 p-5 sm:p-6">
                <div className="pre-marriage-help-card__icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-rose-600 shadow-sm">
                  <UserRoundCheck size={23} />
                </div>
                <div>
                  <h3 className="pre-marriage-help-card__title font-semibold text-slate-900">
                    Who this service may help
                  </h3>
                  <p className="pre-marriage-help-card__description mt-2 text-sm leading-7 text-slate-600">
                    {service.suitableFor}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="pre-marriage-focus-section relative overflow-hidden bg-[#f7f8fb] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-rose-100/60 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
              <span className="h-px w-8 bg-rose-500" />
              Areas of Focus
              <span className="h-px w-8 bg-rose-500" />
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Relevant details.
              <span className="block text-rose-600">Carefully reviewed.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Every enquiry begins with your specific concerns. We focus on
              relevant questions and explain what can reasonably be assessed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.focusAreas.map((area, index) => {
              const Icon = focusIcons[index] || CheckCircle2;

              return (
                <Reveal key={area} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -7 }}
                    transition={{ duration: 0.25 }}
                    className="group h-full rounded-[1.6rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-950/5 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition-colors duration-300 group-hover:bg-rose-500 group-hover:text-white">
                        <Icon size={26} />
                      </div>

                      <span className="font-serif text-4xl font-semibold text-slate-100 transition-colors group-hover:text-rose-100">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-8 text-base leading-8 text-slate-700">
                      {area}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-rose-400 transition-all duration-300 group-hover:w-20" />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="relative overflow-hidden bg-[#071426] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-300">
              <span className="h-px w-8 bg-rose-300" />
              Our Approach
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              A clear process.
              <span className="block text-rose-300">
                A considered approach.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We believe that a sensitive enquiry should be handled with care,
              transparency and a clearly defined purpose.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative h-full rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-rose-300/40 hover:bg-white/[0.075] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-semibold text-rose-300/80">
                      {number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-400/10 text-rose-300">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {description}
                  </p>

                  {index !== steps.length - 1 && (
                    <div className="absolute -right-2 top-12 z-10 hidden h-4 w-4 rotate-45 border-r border-t border-rose-300/40 bg-[#0b1a2e] lg:block" />
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-400/10 text-rose-300">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Our approach to your enquiry
                  </h3>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                    {service.approach}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="pre-marriage-privacy-card relative overflow-hidden rounded-[2rem] bg-rose-50 p-8 sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-100" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm">
                  <LockKeyhole size={30} />
                </div>

                <h2 className="mt-7 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  Your concerns deserve a thoughtful conversation.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Start with a private discussion about the questions that
                  matter to you. We will explain the proposed scope and possible
                  next steps before any enquiry proceeds.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-rose-700 transition-colors hover:text-rose-900"
                >
                  Speak with our team
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                <span className="h-px w-8 bg-rose-500" />
                Privacy & Respect
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Sensitivity at every step.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Pre-matrimonial enquiries can involve personal and sensitive
                concerns. We aim to approach each conversation with discretion,
                respect and a clear understanding of the agreed purpose.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "A defined scope",
                    text: "We discuss the purpose and boundaries of the enquiry before proceeding.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Respect for privacy",
                    text: "Personal information is handled with care and in accordance with applicable law.",
                  },
                  {
                    icon: Handshake,
                    title: "Your decision remains yours",
                    text: "Our role is to present relevant findings and limitations, not to make personal decisions for you.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXISTING WHY CHOOSE US COMPONENT */}
      <WhyChooseUs serviceId={service.id} />

      {/* FINAL CTA */}
      <section className="px-5 pb-20 pt-6 sm:px-8 sm:pb-24 lg:px-10">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-rose-500/15 blur-[80px]" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-blue-500/15 blur-[80px]" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
                  <ShieldCheck size={15} />
                  Private & Confidential
                </div>

                <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Questions about this service?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  Talk with our team about your concerns, understand the
                  available options and discuss suitable next steps.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-rose-400"
                >
                  Discuss Your Enquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/our-services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  More Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default PreMarriage;
