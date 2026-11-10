// import { Link } from 'react-router-dom'
// import aboutImage from '../../assets/about.jpg'
// import analysisImage from '../../assets/image-why.webp'
// import VideoBackground from '../../Components/VideoBackground/VideoBackground'

// const About = () => {
//   return (
//     <>
//       <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28">
//         <VideoBackground className="object-[65%_center] opacity-70" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/15" />
//         <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />
//         <div className="relative mx-auto max-w-7xl">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Who we are</p>
//           <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
//             Professional insight. <span className="text-blue-400">A personal approach.</span>
//           </h1>
//           <p className="mt-5 max-w-2xl leading-7 text-slate-300">
//             A private investigation and intelligence agency offering discreet support to individuals,
//             corporates, legal firms, and organizations.
//           </p>
//         </div>
//       </section>

//       <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
//         <div>
//           <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Vertex Intelligence Services</p>
//           <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Clarity starts with listening.</h2>
//           <p className="mt-5 leading-7 text-slate-600">
//             Every enquiry is different. We take time to understand the situation, discuss an appropriate
//             investigative approach, and communicate clearly about the next steps. Discretion and respect
//             guide our work from the first conversation.
//           </p>
//           <p className="mt-4 leading-7 text-slate-600">
//             Our services cover personal investigations, background checks, corporate verification, cyber
//             investigations, and missing-person enquiries. We aim to provide useful information while
//             treating each matter with care.
//           </p>
//           <Link to="/our-services" className="mt-7 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
//             Explore our services
//           </Link>
//         </div>
//         <img src={aboutImage} alt="Investigator carefully reviewing information" className="h-80 w-full rounded-2xl object-cover shadow-xl sm:h-[440px]" />
//       </section>

//       <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
//         <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
//           <img src={analysisImage} alt="Team reviewing intelligence and case information" className="h-72 w-full rounded-2xl object-cover sm:h-[380px]" />
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Our principles</p>
//             <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Trust is earned through the details.</h2>
//             <div className="mt-7 space-y-5">
//               {[
//                 ['Discretion', 'Sensitive conversations and enquiries deserve a thoughtful, private response.'],
//                 ['Professionalism', 'We approach each matter with care, clear communication, and respect.'],
//                 ['Purposeful work', 'We focus on information relevant to the questions you need answered.'],
//               ].map(([title, text]) => (
//                 <div key={title} className="border-l-2 border-blue-600 pl-4">
//                   <h3 className="font-semibold text-slate-900">{title}</h3>
//                   <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8">
//         <h2 className="font-serif text-2xl font-semibold text-slate-900 sm:text-3xl">Have a sensitive matter to discuss?</h2>
//         <Link to="/contact" className="mt-5 inline-flex rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-700 hover:text-white">
//           Contact our team
//         </Link>
//       </section>
//     </>
//   )
// }

// export default About



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  LockKeyhole,
  Target,
  SearchCheck,
  FileCheck2,
  ClipboardList,
  MessageCircle,
  CheckCircle2,
  Scale,
  Fingerprint,
  Users,
  BadgeCheck,
  ArrowUpRight,
  PhoneCall,
  Sparkles,
  ScanSearch,
} from "lucide-react";

import aboutImage from "../../assets/about.jpg";
import analysisImage from "../../assets/image-why.webp";
import VideoBackground from "../../Components/VideoBackground/VideoBackground";

// Animation settings
const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const values = [
  {
    icon: LockKeyhole,
    title: "Confidentiality",
    description:
      "Sensitive information deserves careful handling. We prioritize discretion and privacy throughout every enquiry.",
  },
  {
    icon: Scale,
    title: "Integrity & Ethics",
    description:
      "Our approach is guided by honesty, professional responsibility, and legally appropriate investigative methods.",
  },
  {
    icon: Target,
    title: "Precision & Focus",
    description:
      "Every investigation is shaped around clear objectives, relevant facts, and the specific needs of the client.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Trust",
    description:
      "We build client confidence through respectful communication, careful planning, and responsible case handling.",
  },
];

const process = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Confidential Consultation",
    description:
      "We listen carefully, understand your concerns, and discuss the scope of your enquiry.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Strategic Planning",
    description:
      "A case-specific investigation plan is developed around your objectives and circumstances.",
  },
  {
    number: "03",
    icon: ScanSearch,
    title: "Investigation",
    description:
      "Relevant information is gathered and assessed through appropriate investigative methods.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Confidential Reporting",
    description:
      "Findings are communicated clearly and discreetly, with supporting information where available.",
  },
];

const benefits = [
  {
    icon: Fingerprint,
    title: "Case-Specific Approach",
    text: "Every case receives an approach tailored to its circumstances and objectives.",
  },
  {
    icon: Users,
    title: "Professional Investigative Support",
    text: "Structured assistance for personal, corporate, and legal enquiries.",
  },
  {
    icon: Scale,
    title: "Ethical Investigation Methods",
    text: "A commitment to responsible information gathering and lawful practices.",
  },
  {
    icon: FileCheck2,
    title: "Clear Communication",
    text: "Relevant updates and findings communicated with discretion.",
  },
];

const SectionHeading = ({ label, title, description, center = false }) => (
  <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div
        className={`mb-5 flex items-center gap-3 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="h-[2px] w-8 bg-blue-600" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
          {label}
        </span>
      </div>

      <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600">{description}</p>
      )}
    </motion.div>
  </div>
);

const About = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 lg:min-h-[620px]">
        <VideoBackground className="object-[65%_center] opacity-65" />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#020817]/95 via-[#020817]/75 to-[#020817]/35" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#020817]/80 via-transparent to-[#020817]/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
            >
              <ShieldCheck size={16} className="text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.17em] text-blue-100">
                About Vertex Intelligence Services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[70px]"
            >
              Uncovering Truth.
              <br />
              <span className="text-blue-400">Protecting Trust.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
            >
              Professional investigation and intelligence services built on
              discretion, ethical practices, and a commitment to helping
              individuals and organizations make informed decisions.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20"
              >
                Speak With Our Team
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/our-services"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-700 via-cyan-400 to-transparent" />
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[45px] border-l-4 border-t-4 border-blue-600 sm:-left-6 sm:-top-6" />

            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={aboutImage}
                alt="Vertex Intelligence Services investigation team"
                className="h-[370px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[530px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>

            <div className="absolute -bottom-6 right-3 flex max-w-[240px] items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl sm:-right-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <ShieldCheck size={26} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Discretion First
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Professional & confidential approach
                </p>
              </div>
            </div>
          </motion.div>

          <div className="pt-8 lg:pt-0">
            <SectionHeading
              label="Who We Are"
              title={
                <>
                  A Professional Approach to{" "}
                  <span className="text-blue-700">Finding the Truth.</span>
                </>
              }
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="mt-7 text-base leading-8 text-slate-600"
              >
                Vertex Intelligence Services is a professional private
                investigation and intelligence agency providing discreet
                investigative support to individuals, corporate clients, legal
                professionals, and organizations.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-8 text-slate-600"
              >
                We understand that every enquiry involves unique circumstances.
                Our approach begins with listening, understanding the concern,
                and identifying the most appropriate way to gather relevant
                information.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-8 text-slate-600"
              >
                From background verification and corporate investigations to
                cyber-related enquiries and personal matters, we focus on
                discretion, careful assessment, and clear communication.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7 grid gap-4 sm:grid-cols-2"
              >
                {[
                  "Confidential Case Handling",
                  "Case-Specific Planning",
                  "Ethical Investigation",
                  "Clear & Relevant Findings",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-blue-600"
                    />
                    <span className="text-sm font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-9">
                <Link
                  to="/our-services"
                  className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700"
                >
                  Discover Our Services
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Purpose"
            title="Driven by Purpose. Guided by Principles."
            description="Our mission and vision reflect the professional standards we aim to bring to every client interaction."
            center
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide discreet, ethical, and reliable investigative support that helps clients better understand complex situations and make informed decisions with greater confidence.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be a trusted name in professional intelligence services, recognized for responsible investigative practices, confidentiality, and a client-focused approach.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-10"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-blue-50 transition-transform duration-500 group-hover:scale-125" />

                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-7 font-serif text-2xl font-semibold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Our Core Values"
            title="The Principles Behind Every Investigation."
            description="Professional intelligence work requires more than information. It requires responsibility, discretion, and trust."
            center
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-300 hover:bg-slate-950 hover:shadow-2xl"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 transition-colors group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-300">
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative overflow-hidden bg-[#071326] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-blue-700/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-blue-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                  Why Choose Vertex
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[44px]">
                Intelligence You Can Trust.{" "}
                <span className="text-blue-400">Support You Can Rely On.</span>
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Choosing an investigation agency is a significant decision. We
                aim to provide a professional experience built around
                understanding your concerns and handling sensitive matters
                responsibly.
              </p>
            </motion.div>

            <div className="mt-9 space-y-4">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[32px] border border-blue-400/20" />

            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src={analysisImage}
                alt="Professional intelligence analysis and investigation"
                className="h-[420px] w-full object-cover sm:h-[590px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-6 right-6 rounded-2xl border border-white/20 bg-slate-950/65 p-6 backdrop-blur-lg sm:left-8 sm:right-8">
                <div className="mb-3 flex items-center gap-2 text-blue-400">
                  <BadgeCheck size={20} />
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">
                    Our Commitment
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-white">
                  Your Confidence Matters.
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Every enquiry is treated with attention, professionalism, and
                  respect for confidentiality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTIGATION PROCESS ================= */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="How We Work"
            title="Our Investigation Process"
            description="A structured approach helps us understand each enquiry, plan responsibly, and communicate meaningful findings."
            center
          />

          <div className="relative mt-16">
            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-blue-200 lg:block" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {process.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="group relative rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                        <Icon size={28} />
                      </div>

                      <span className="font-serif text-4xl font-bold text-slate-100 transition-colors group-hover:text-blue-100">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[30px] bg-blue-50 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="mb-5 flex items-center gap-3">
                <Sparkles size={18} className="text-blue-700" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Our Promise
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                Every Detail Matters.{" "}
                <span className="text-blue-700">Every Client Matters.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                Behind every enquiry is a person, business, or organization
                seeking greater clarity. We believe that professional
                investigative support should always begin with respect,
                understanding, and careful consideration.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 font-bold text-blue-700 transition-colors hover:text-blue-900"
              >
                Start a Confidential Conversation
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="flex flex-col justify-center gap-5 bg-blue-700 p-8 text-white sm:p-12">
              {[
                {
                  icon: LockKeyhole,
                  title: "Privacy & Discretion",
                  text: "Respectful handling of sensitive information.",
                },
                {
                  icon: SearchCheck,
                  title: "Focused Investigation",
                  text: "Attention to relevant facts and case objectives.",
                },
                {
                  icon: ShieldCheck,
                  title: "Professional Responsibility",
                  text: "An ethical, careful, and client-focused approach.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-white/15 bg-white/10 p-4"
                  >
                    <Icon size={25} className="mt-1 shrink-0 text-blue-100" />
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-blue-100">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative isolate overflow-hidden bg-[#061224] px-5 py-20 text-center text-white sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] max-w-full -translate-x-1/2 rounded-full bg-blue-700/20 blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative mx-auto max-w-3xl"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-600/15 text-blue-400">
            <ShieldCheck size={30} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
            Confidential Consultation
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Have a Sensitive Matter{" "}
            <span className="text-blue-400">to Discuss?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Whether you need assistance with a personal concern or a
            professional enquiry, our team is available to discuss your
            requirements discreetly.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20"
            >
              Contact Our Team
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="tel:+919891915550"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <PhoneCall size={18} />
              Call Our Team
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <LockKeyhole size={15} className="text-blue-400" />
              Discreet Enquiries
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-blue-400" />
              Professional Approach
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={15} className="text-blue-400" />
              Ethical Practices
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
