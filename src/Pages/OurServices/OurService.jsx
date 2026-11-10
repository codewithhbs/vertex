import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Fingerprint,
  Eye,
  FileSearch,
  LockKeyhole,
  Search,
  Shield,
  ShieldCheck,
  UserSearch,
} from "lucide-react";

import backgroundCheckingImage from "../../assets/background_checking.jpg";
import corporateVerificationImage from "../../assets/corporate_verification.jpg";
import cyberInvestigationImage from "../../assets/cyber_investigation.jpg";
import loyaltyTestImage from "../../assets/loyality_test.jpg";
import missingPersonImage from "../../assets/missing_person.jpg";
import preMarriageImage from "../../assets/pre.jpg";
import postMarriageImage from "../../assets/post.jpg";
import surveillanceImage from "../../assets/recogination.jpg";

const services = [
  {
    number: "01",
    name: "Background Checking",
    link: "/our-services/background-checking",
    image: backgroundCheckingImage,
    description:
      "Discreet checks to help you make informed decisions with greater confidence and clarity.",
    icon: FileSearch,
    category: "PERSONAL & PROFESSIONAL",
  },
  {
    number: "02",
    name: "Corporate Verification",
    link: "/our-services/corporate-verification",
    image: corporateVerificationImage,
    description:
      "Verification support for businesses seeking greater confidence in important professional decisions.",
    icon: BriefcaseBusiness,
    category: "BUSINESS INTELLIGENCE",
  },
  {
    number: "03",
    name: "Cyber Investigation",
    link: "/our-services/cyber-investigation",
    image: cyberInvestigationImage,
    description:
      "Support for investigating suspected online fraud, digital risks, and suspicious online activity.",
    icon: Fingerprint,
    category: "DIGITAL INVESTIGATION",
  },
  {
    number: "04",
    name: "Loyalty Test",
    link: "/our-services/loyalty-test",
    image: loyaltyTestImage,
    description:
      "Confidential fact-finding for sensitive relationship concerns, approached with care and discretion.",
    icon: Eye,
    category: "PERSONAL ENQUIRIES",
  },
  {
    number: "05",
    name: "Missing Person Search",
    link: "/our-services/missing-person-search",
    image: missingPersonImage,
    description:
      "Discreet search assistance for families and individuals seeking answers about a missing person.",
    icon: UserSearch,
    category: "SEARCH & TRACING",
  },
  {
    number: "06",
    name: "Pre-Matrimonial Investigation",
    link: "/our-services/pre-matrimonial-investigation",
    image: preMarriageImage,
    description:
      "Confidential verification to help individuals and families make informed decisions before marriage.",
    icon: ShieldCheck,
    category: "MATRIMONIAL ENQUIRIES",
  },
  {
    number: "07",
    name: "Post-Matrimonial Investigation",
    link: "/our-services/post-matrimonial-investigation",
    image: postMarriageImage,
    description:
      "Sensitive enquiries handled thoughtfully, with an emphasis on discretion and responsible practices.",
    icon: Search,
    category: "MATRIMONIAL ENQUIRIES",
  },
  {
    number: "08",
    name: "Surveillance & Reconnaissance",
    link: "/our-services/surveillance-reconnaissance",
    image: surveillanceImage,
    description:
      "Professional field enquiries and fact-finding conducted within appropriate legal boundaries.",
    icon: Eye,
    category: "FIELD INVESTIGATION",
  },
];

const principles = [
  {
    icon: LockKeyhole,
    title: "Confidential Approach",
    description:
      "We treat enquiries with discretion and respect the sensitive nature of each situation.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Standards",
    description:
      "Clear communication and a responsible approach guide our client interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Practices",
    description:
      "We aim to provide focused support while respecting applicable laws and privacy.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const OurService = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426] px-5 py-24 text-white sm:px-8 sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(37,99,235,0.24),transparent_42%),radial-gradient(ellipse_at_5%_100%,rgba(30,64,175,0.18),transparent_45%)]" />

        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:55px_55px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -right-24 top-10 -z-10 size-80 rounded-full border border-blue-400/20 sm:right-10 sm:size-[500px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.1 }}
          className="pointer-events-none absolute right-12 top-32 -z-10 size-52 rounded-full border border-blue-300/10 sm:right-36 sm:size-80"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.14 },
              },
            }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 sm:text-sm"
            >
              <ShieldCheck size={16} />
              Confidential. Ethical. Results-driven.
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 max-w-3xl font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Intelligence That
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-sky-200 to-white bg-clip-text text-transparent">
                Inspires Confidence.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Explore professional investigation and verification services
              designed around your needs. Every enquiry begins with
              understanding your concerns and discussing a responsible way
              forward.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 sm:text-base"
              >
                Discuss Your Enquiry
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-blue-300/50 hover:bg-white/5 sm:text-base"
              >
                Explore Services
                <ArrowDown size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-300" />
                Discreet communication
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-blue-300" />
                Client-focused approach
              </span>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <img
                src={cyberInvestigationImage}
                alt="Professional investigation services"
                className="h-[330px] w-full object-cover sm:h-[410px]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mt-3 rounded-2xl border border-white/15 bg-slate-950 p-5 shadow-xl sm:p-6"
            >
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-white">
                <span className="size-2 rounded-full bg-blue-400" />
                Intelligence &amp; Verification
              </p>
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                    <Fingerprint size={27} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                      Vertex Intelligence Services
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      Clarity Through Investigation
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      A considered approach to sensitive enquiries.
                    </p>
                  </div>
                </div>
            </motion.div>

            <div className="pointer-events-none absolute -bottom-4 -right-4 size-24 rounded-2xl border border-blue-400/20 sm:-right-7 sm:size-32" />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative px-5 py-16 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-20 size-72 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="mb-12 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm"
              >
                <span className="h-px w-8 bg-blue-600" />
                Our Areas of Expertise
              </motion.p>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
              >
                Professional Services.
                <span className="block text-blue-700">
                  A More Informed Perspective.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mt-5 max-w-2xl text-base leading-7 text-slate-600"
              >
                From personal enquiries to corporate verification, explore our
                service areas and find the support relevant to your situation.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex shrink-0 items-center gap-3 self-start rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm lg:self-auto"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Shield size={23} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">08</p>
                <p className="text-xs font-medium text-slate-500">
                  Service Areas
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* SERVICE CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.link}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 4) * 0.09,
                  }}
                  whileHover={{ y: -8 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)] transition-[border-color,box-shadow] duration-300 hover:border-blue-200 hover:shadow-[0_25px_55px_-22px_rgba(15,23,42,0.3)]"
                >
                  <Link
                    to={service.link}
                    aria-label={`Learn more about ${service.name}`}
                    className="relative block h-56 overflow-hidden bg-slate-100"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-800">
                        <Icon size={14} strokeWidth={2} />
                        {service.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                      {service.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <Link
                        to={service.link}
                        className="group/link inline-flex w-full items-center justify-between gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-900"
                      >
                        Explore Service
                        <span className="flex size-8 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-blue-700 group-hover/link:text-white">
                          <ArrowRight size={16} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST & PROFESSIONALISM */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm">
              The Vertex Approach
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Built Around Your Confidence
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Sensitive enquiries deserve a thoughtful process, clear
              communication, and a responsible professional approach.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-20" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071426] px-6 py-12 text-center text-white shadow-2xl shadow-slate-300/40 sm:px-12 sm:py-16 lg:px-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border border-blue-400/20" />

          <div className="pointer-events-none absolute -bottom-36 -left-20 size-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-500/15 text-blue-300"
            >
              <ShieldCheck size={32} />
            </motion.div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
              Your Enquiry. Our Attention.
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Not Sure Which Service You Need?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Tell us about your concerns and the assistance you are looking
              for. Our team can discuss the relevant service, explain the
              process, and help you understand the next steps.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              Speak With Our Team
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-slate-400 sm:text-sm">
              <span className="flex items-center gap-2">
                <LockKeyhole size={15} className="text-blue-300" />
                Discretion
              </span>
              <span className="size-1 rounded-full bg-slate-600" />
              <span>Professionalism</span>
              <span className="size-1 rounded-full bg-slate-600" />
              <span>Responsible Practices</span>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default OurService;
