import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  FileSearch,
  ClipboardCheck,
  LockKeyhole,
  MessageCircle,
  ChevronRight,
  Eye,
  MapPin,
  CheckCircle2,
  Target,
  FileText,
  Scale,
  Radar,
} from "lucide-react";

import surveillanceImage from "../../assets/recogination.jpg";
import WhyChooseUs from "./WhyChooseUs";

// Keep this service's content and page layout together in this file.
const service = {
  id: "surveillance-reconnaissance",
  title: "Surveillance & Reconnaissance",
  image: surveillanceImage,
  description:
    "Professional field investigations to help clarify specific concerns.",
  overview:
    "When you need to understand a particular situation, carefully planned observations may help fill in important details. We discuss the purpose, scope, and practical limitations with you before deciding whether this service is suitable.",
  focusAreas: [
    "Planning observations around the question you want answered",
    "Documenting relevant information within the agreed scope",
    "Providing a factual summary of observations and limitations",
  ],
  approach:
    "We first discuss what you need to understand and whether this service is appropriate. If we agree to proceed, we set clear expectations and scope, then share relevant observations in a straightforward report.",
  suitableFor:
    "Individuals or organizations seeking factual observations to clarify a specific concern.",
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

const focusIcons = [Target, FileSearch, ClipboardCheck];

const steps = [
  {
    number: "01",
    title: "Understand the Concern",
    description:
      "Discuss the situation and identify the specific questions you need help clarifying.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Plan the Enquiry",
    description:
      "Agree on the purpose, scope, practical limitations and appropriate next steps.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Conduct Observations",
    description:
      "Carry out suitable observations within the agreed scope and applicable legal boundaries.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Report Relevant Findings",
    description:
      "Receive a factual summary of relevant observations and any limitations encountered.",
    icon: FileText,
  },
];

const SurveillanceReconnaissance = () => {
  useEffect(() => {
    document.title =
      "Surveillance & Reconnaissance | Vertex Intelligence Services";
  }, []);

  return (
    <main className="surveillance-page overflow-hidden bg-white text-slate-900">
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

        <div className="absolute -right-24 top-16 -z-10 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

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
              <ChevronRight size={15} className="text-blue-300" />
              <Link to="/our-services" className="transition hover:text-white">
                Our Services
              </Link>
              <ChevronRight size={15} className="text-blue-300" />
              <span className="text-white">Surveillance & Reconnaissance</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
                <Radar size={17} className="text-cyan-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Professional. Purposeful. Discreet.
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.13] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Observe the Facts.
                <span className="mt-2 block text-cyan-300">
                  Understand the Situation.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {service.description} A carefully planned, scope-led approach to
                gathering relevant observations and clarifying specific
                concerns.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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

                <Link
                  to="/our-services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
                {[
                  { icon: ShieldCheck, label: "Professional Approach" },
                  { icon: Target, label: "Purpose-Led Enquiries" },
                  { icon: FileSearch, label: "Factual Reporting" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={19} className="shrink-0 text-cyan-300" />
                    <span className="text-sm text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-blue-300 sm:-left-6 sm:-top-6" />

              <div className="relative overflow-hidden rounded-t-[2rem] bg-slate-100 shadow-2xl shadow-slate-900/10">
                <img
                  src={service.image}
                  alt="Investigation team reviewing information"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[470px]"
                />
              </div>
              <div className="flex items-center gap-4 rounded-b-[2rem] bg-slate-900 p-5 text-white sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-200">
                  <Eye size={25} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Focused on relevant observations
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Defined scope. Clear reporting.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-full bg-blue-100 blur-2xl sm:-right-8" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                <span className="h-px w-8 bg-blue-600" />
                Service Overview
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Focused observations.
                <span className="text-blue-700"> A clearer picture.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {service.overview}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Every situation has its own context. We discuss what you need to
                understand, the information that may be relevant and whether
                this service is suitable before agreeing on the next steps.
              </p>

              <div className="surveillance-help-card mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="surveillance-help-card__icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                    <MapPin size={23} />
                  </div>
                  <div>
                    <h3 className="surveillance-help-card__title font-semibold text-slate-900">
                      Who this service may help
                    </h3>
                    <p className="surveillance-help-card__description mt-2 text-sm leading-7 text-slate-600">
                      {service.suitableFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="surveillance-focus-section relative overflow-hidden bg-[#f6f8fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-100/70 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              <span className="h-px w-8 bg-blue-600" />
              Areas of Focus
              <span className="h-px w-8 bg-blue-600" />
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Relevant facts.
              <span className="block text-blue-700">Clearly documented.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              We keep the enquiry focused on the agreed purpose, with attention
              to relevant information, clear boundaries and realistic
              expectations.
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
                    className="surveillance-focus-card group h-full rounded-[1.6rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={26} />
                      </div>

                      <span className="surveillance-focus-card__number font-serif text-4xl font-semibold text-slate-100 transition-colors group-hover:text-blue-100">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-8 text-base leading-8 text-slate-700">
                      {area}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-20" />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INVESTIGATION PROCESS */}
      <section className="relative overflow-hidden bg-[#071426] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-300" />
              Our Approach
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Purpose before action.
              <span className="block text-cyan-300">
                Facts before conclusions.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We use a considered process to understand the concern, establish
              appropriate boundaries and communicate relevant findings clearly.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative h-full rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-cyan-300/40 hover:bg-white/[0.075] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-semibold text-cyan-300/80">
                      {number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
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
                    <div className="absolute -right-2 top-12 z-10 hidden h-4 w-4 rotate-45 border-r border-t border-cyan-300/40 bg-[#0b1a2e] lg:block" />
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <FileSearch size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    A clear, scope-led process
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

      {/* PROFESSIONAL STANDARDS */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="surveillance-standards-card relative overflow-hidden rounded-[2rem] bg-blue-50 p-8 sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100" />

              <div className="relative">
                <div className="surveillance-standards-card__icon flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                  <ShieldCheck size={30} />
                </div>

                <h2 className="mt-7 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  A clear purpose. A professional approach.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  Start with a discussion about your situation. We can explain
                  the service, its limitations and possible next steps before
                  you decide whether to proceed.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-900"
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
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                <span className="h-px w-8 bg-blue-600" />
                Professional Standards
              </div>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Responsible observations.
                <span className="block text-blue-700">
                  Clear communication.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Surveillance and reconnaissance must have a defined purpose and
                appropriate boundaries. Our approach focuses on relevant
                observations, respect for privacy and responsible handling of
                information.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Target,
                    title: "Clearly defined objectives",
                    text: "The enquiry is planned around the specific concern and agreed scope.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Privacy-conscious handling",
                    text: "Information is handled with care and in accordance with applicable law.",
                  },
                  {
                    icon: Scale,
                    title: "Objective reporting",
                    text: "Findings are presented factually, including relevant limitations.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
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
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-[80px]" />
            <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  <ShieldCheck size={15} />
                  Professional & Discreet
                </div>

                <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                  Need to clarify a specific concern?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  Talk with our team about your situation, understand the
                  available options and discuss a suitable approach.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Contact Our Team
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

export default SurveillanceReconnaissance;
