
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileSearch,
  Fingerprint,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Target,
} from "lucide-react";

import backgroundChecking from "../../assets/background_checking.jpg";
import WhyChooseUs from "./WhyChooseUs";

const service = {
  id: "background-checking",
  title: "Background Checking",
  image: backgroundChecking,
  description:
    "Discreet background checks to help you make informed personal and professional decisions.",
  overview:
    "Our background-checking service helps individuals and organizations review relevant information before making an important decision. We first clarify what you need to verify, then discuss an appropriate and proportionate scope for the enquiry.",
  focusAreas: [
    "Identity and background information relevant to the agreed enquiry",
    "Professional or personal details that need clarification",
    "Organized findings that help you assess the information available",
  ],
  approach:
    "We begin by understanding your question and the context behind it. After agreeing on a suitable scope, we review relevant information and share a clear summary of findings and limitations.",
  suitableFor:
    "People who need additional clarity before a personal, professional, or business decision.",
};

const processSteps = [
  {
    number: "01",
    title: "Understand Your Enquiry",
    description:
      "We discuss your concerns, the decision involved, and the information you need to clarify.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Agree on the Scope",
    description:
      "We identify relevant checks and discuss an appropriate, proportionate approach before proceeding.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Review Relevant Information",
    description:
      "Information relevant to the agreed enquiry is reviewed using appropriate and lawful methods.",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Clarify the Findings",
    description:
      "We communicate the available findings, important context, and any limitations clearly.",
    icon: BadgeCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const BackgroundChecking = () => (
  <main className="overflow-hidden bg-white text-slate-900">
    {/* HERO SECTION */}
    <section className="relative isolate overflow-hidden bg-[#071426] px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_20%,rgba(37,99,235,0.25),transparent_45%),radial-gradient(ellipse_at_5%_100%,rgba(30,64,175,0.2),transparent_45%)]" />

      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:55px_55px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-24 top-0 -z-10 size-80 rounded-full border border-blue-400/20 sm:right-10 sm:size-[480px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400"
        >
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight size={15} className="text-blue-400" />
          <Link
            to="/our-services"
            className="transition-colors hover:text-white"
          >
            Our Services
          </Link>
          <ChevronRight size={15} className="text-blue-400" />
          <span className="font-medium text-blue-200">{service.title}</span>
        </motion.nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.13 } },
            }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200 sm:text-sm"
            >
              <ShieldCheck size={16} />
              Confidential. Ethical. Professional.
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-7 font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
            >
              {service.title}
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-sky-200 to-white bg-clip-text text-transparent">
                Clarity Before Decisions.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {service.description}
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-4 max-w-xl text-sm leading-7 text-slate-400"
            >
              Understand the available information, clarify important details,
              and approach your next decision with a more informed perspective.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-950/40 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                Discuss Your Enquiry
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#service-overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-blue-300/50 hover:bg-white/5"
              >
                Learn More
                <ArrowRight size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-300" />
                Discreet approach
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-300" />
                Clear communication
              </span>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="group relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/15 blur-2xl transition-opacity duration-500 group-hover:bg-blue-500/25" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <img
                src={service.image}
                alt="Background checking and professional verification"
                className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[430px]"
              />
            </div>

            <div className="relative mt-3 rounded-2xl border border-white/15 bg-slate-950 p-5 shadow-xl sm:p-6">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white">
                <span className="size-2 rounded-full bg-blue-400" />
                Professional Verification
              </p>
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                  <Fingerprint size={27} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                    Vertex Intelligence Services
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
                    Information. Insight. Confidence.
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    A considered approach to important decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-4 -right-4 size-24 rounded-2xl border border-blue-400/20 sm:-right-6 sm:size-28" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* SERVICE OVERVIEW */}
    <section id="service-overview" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-sm"
          >
            <span className="h-px w-8 bg-blue-600" />
            Service Overview
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Make Informed Decisions With Greater Clarity
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-base leading-8 text-slate-600"
          >
            {service.overview}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition duration-300 hover:border-blue-200 hover:bg-blue-50 sm:p-6"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-200">
              <Target size={25} />
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Who This Service May Help
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {service.suitableFor}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="group relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-100 via-transparent to-slate-200 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl">
            <div className="overflow-hidden bg-slate-100">
              <img
                src={service.image}
                alt="Background checking service"
                loading="lazy"
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[430px]"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
                <LockKeyhole size={15} />
                Private & Discreet
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
                The Details Matter.
              </h3>

              <p className="mt-3 max-w-md text-base leading-7 text-slate-700">
                Every enquiry begins with understanding what needs to be
                clarified and why it matters.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* FOCUS AREAS */}
    <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-sm"
          >
            Areas of Focus
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            A Relevant, Agreed Scope
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 leading-7 text-slate-600"
          >
            Each enquiry is different. We focus on the information relevant to
            your question and the scope agreed before work begins.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-7 inline-flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
          >
            <ShieldCheck size={20} className="text-blue-700" />A focused and
            responsible approach
          </motion.div>
        </motion.div>

        <div className="space-y-4">
          {service.focusAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ x: 5 }}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                <Check size={21} strokeWidth={2.5} />
              </div>

              <div className="flex-1">
                <p className="text-base font-semibold leading-7 text-slate-800">
                  {area}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Considered within the agreed scope of the enquiry.
                </p>
              </div>

              <ArrowUpRight
                size={19}
                className="mt-1 shrink-0 text-slate-300 transition-colors group-hover:text-blue-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* OUR PROCESS */}
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
            Our Process
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            A Clearer Path From Enquiry to Findings
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A structured process helps keep expectations clear at every stage of
            your background-checking enquiry.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -7 }}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <span className="font-serif text-4xl font-bold text-slate-100 transition-colors group-hover:text-blue-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-20" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>

    {/* APPROACH SECTION */}
    <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
            The Vertex Approach
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
            Understand. Review. Clarify.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">{service.approach}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Responsible Information Handling
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                A thoughtful approach to sensitive enquiries.
              </p>
            </div>
          </div>

          <div className="my-6 h-px bg-slate-100" />

          <ul className="space-y-4">
            {[
              "Discuss the enquiry and clarify expectations.",
              "Agree on a suitable and proportionate scope.",
              "Communicate findings and limitations clearly.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-700"
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    <WhyChooseUs serviceId={service.id} />

    {/* CONTACT CTA */}
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] px-6 py-12 text-white shadow-2xl shadow-slate-300/40 sm:px-12 sm:py-16 lg:px-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border border-blue-400/20" />

        <div className="pointer-events-none absolute -bottom-36 -left-20 size-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/15 text-blue-300"
          >
            <LockKeyhole size={30} />
          </motion.div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-sm">
            Private & Confidential
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Questions About Background Checking?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Tell us what you need to clarify. Our team can discuss the service,
            explain the process, and help you understand the appropriate next
            steps for your enquiry.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            Contact Our Team
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-6 text-xs tracking-wide text-slate-400 sm:text-sm">
            Discretion · Professionalism · Responsible Practices
          </p>
        </div>
      </motion.div>
    </section>
  </main>
);

export default BackgroundChecking;