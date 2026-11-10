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
  ChevronRight,
  Eye,
  Handshake,
  Scale,
  UserRoundCheck,
} from "lucide-react";

import postInvestigation from "../../assets/post.jpg";
import WhyChooseUs from "./WhyChooseUs";

// Keep this service's content and page layout together in this file.
const service = {
  id: "post-matrimonial-investigation",
  title: "Post-Matrimonial Investigation",
  image: postInvestigation,
  description:
    "Sensitive enquiries approached with care, professionalism, and discretion.",
  overview:
    "Concerns within a marriage can be difficult to talk about. We offer a private conversation to understand what is troubling you and to discuss whether an investigation may help clarify the situation.",
  focusAreas: [
    "Understanding the concern and the questions you want answered",
    "Agreeing on suitable boundaries and a clear scope",
    "Sharing relevant findings and explaining any limitations",
  ],
  approach:
    "We listen without making assumptions, explain possible approaches, and agree on the next steps before any work begins. Our role is to provide information within the agreed scope, not to promise a particular conclusion.",
  suitableFor:
    "People who would like to discuss a sensitive concern affecting their marriage.",
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

const focusIcons = [MessageCircle, ClipboardCheck, FileSearch];

const steps = [
  {
    number: "01",
    title: "Private Consultation",
    description:
      "Explain your concerns in a private discussion so we can understand the questions you would like to address.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Define the Scope",
    description:
      "Discuss suitable boundaries, available options and the proposed approach before any work begins.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Careful Enquiry",
    description:
      "Review relevant information using appropriate, lawful methods within the agreed scope.",
    icon: Search,
  },
  {
    number: "04",
    title: "Clear Findings",
    description:
      "Receive a factual summary of relevant findings, along with any limitations or unresolved questions.",
    icon: FileSearch,
  },
];

const PostMarriage = () => {
  useEffect(() => {
    document.title =
      "Post-Matrimonial Investigation | Vertex Intelligence Services";
  }, []);

  return (
    <main className="post-marriage-page overflow-hidden bg-white text-slate-900">
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
              <span className="text-white">Post-Matrimonial Investigation</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
                <ShieldCheck size={17} className="text-rose-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
                  Private. Professional. Discreet.
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.13] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Understanding
                <span className="mt-2 block text-rose-300">
                  Sensitive Matters.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {service.description} Discuss your concerns in a private setting
                and explore a considered approach to obtaining relevant
                information.
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
                  { icon: LockKeyhole, label: "Privacy-Conscious" },
                  { icon: HeartHandshake, label: "Respectful Approach" },
                  { icon: Scale, label: "Clear Boundaries" },
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

      {/* SERVICE OVERVIEW */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xl lg:mx-0">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-rose-300 sm:-left-6 sm:-top-6" />

              <div className="relative overflow-hidden rounded-t-[2rem] bg-slate-100 shadow-2xl shadow-slate-900/10">
                <img
                  src={service.image}
                  alt="A couple discussing a sensitive personal matter"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[470px]"
                />
              </div>
              <div className="flex items-center gap-4 rounded-b-[2rem] bg-slate-900 p-5 text-white sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-400/20 text-rose-200">
                  <HeartHandshake size={25} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    A considered approach to sensitive concerns
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Respectful discussion. Clear next steps.
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
                Sensitive matters deserve
                <span className="text-rose-600"> careful attention.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {service.overview}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                We begin by understanding your concerns without making
                assumptions. Together, we discuss whether an enquiry is
                appropriate, what can reasonably be explored and what
                limitations may apply.
              </p>

              <div className="post-marriage-help-card mt-8 rounded-2xl border border-rose-100 bg-rose-50/70 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="post-marriage-help-card__icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-rose-600 shadow-sm">
                    <UserRoundCheck size={23} />
                  </div>
                  <div>
                    <h3 className="post-marriage-help-card__title font-semibold text-slate-900">
                      Who this service may help
                    </h3>
                    <p className="post-marriage-help-card__description mt-2 text-sm leading-7 text-slate-600">
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
      <section className="post-marriage-focus-section relative overflow-hidden bg-[#f7f8fb] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-rose-100/60 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
              <span className="h-px w-8 bg-rose-500" />
              Areas of Focus
              <span className="h-px w-8 bg-rose-500" />
            </div>

            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Focused on the questions
              <span className="block text-rose-600">that matter to you.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
              A clear understanding of your concerns helps establish appropriate
              boundaries and a realistic scope for the enquiry.
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
                    className="post-marriage-focus-card group h-full rounded-[1.6rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-950/5 sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="post-marriage-focus-card__icon flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 transition-colors duration-300 group-hover:bg-rose-500 group-hover:text-white">
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

      {/* INVESTIGATION PROCESS */}
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
              Listen first.
              <span className="block text-rose-300">Proceed with care.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Every enquiry is different. We aim to keep the process
              transparent, respectful and focused on the agreed questions.
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
                    A thoughtful and transparent approach
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

      {/* PRIVACY & PROFESSIONALISM */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="post-marriage-privacy-card relative overflow-hidden rounded-[2rem] bg-rose-50 p-8 sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-rose-100" />

              <div className="relative">
                <div className="post-marriage-privacy-card__icon flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm">
                  <LockKeyhole size={30} />
                </div>

                <h2 className="mt-7 font-serif text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                  A private conversation is a good place to start.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  You can discuss your concerns and understand possible options
                  before deciding whether to proceed with an enquiry.
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
                Respectful handling of sensitive concerns.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Personal matters require careful communication and clearly
                defined boundaries. We aim to approach every enquiry without
                assumptions or promises about what the findings will show.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Clear expectations",
                    text: "The purpose, proposed scope and limitations are discussed before proceeding.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Privacy-conscious handling",
                    text: "Information is handled carefully and in accordance with applicable law.",
                  },
                  {
                    icon: Handshake,
                    title: "Professional communication",
                    text: "We aim to explain relevant findings objectively and without making assumptions.",
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
                  Would you like to talk privately?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  Discuss your concerns with our team and learn about possible
                  next steps in a professional, respectful setting.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-rose-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-rose-400"
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

export default PostMarriage;
