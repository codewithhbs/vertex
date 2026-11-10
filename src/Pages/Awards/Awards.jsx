import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Eye,
  Fingerprint,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import recognitionImage from "../../assets/recogntion.webp";
import trophyImage from "../../assets/trophy.jpeg";
import ceremonyImage from "../../assets/awards_image/vertexaward1.jpeg";
import doctorateImage from "../../assets/awards_image/vertexaward2.jpeg";
import ceremonyImage1 from "../../assets/awards_image/vertexaward4.jpeg";

const standards = [
  {
    number: "01",
    title: "Confidentiality",
    text: "Every enquiry is handled with discretion, privacy, and respect for the sensitive nature of each case.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Professional Conduct",
    text: "We believe in clear communication, ethical practices, and a responsible approach to every assignment.",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Quality of Service",
    text: "Our focus is on delivering relevant investigative support with attention to detail and professional care.",
    icon: Target,
  },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    text: "Building confidence through responsible professional practices.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    text: "A focused approach to every enquiry and assignment.",
  },
  {
    icon: BadgeCheck,
    title: "Client Commitment",
    text: "Keeping client needs, communication, and discretion at the forefront.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const Awards = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[470px] items-center overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-8 lg:min-h-[530px]">
        <img
          src={ceremonyImage}
          alt="Vertex Intelligence Services award ceremony"
          fetchPriority="high"
          className="absolute inset-0 z-0 h-full w-full scale-[1.12] object-cover object-[center_38%]"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(0deg,rgba(2,6,23,0.24),transparent_65%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium tracking-wide text-blue-200"
            >
              <Sparkles size={16} />
              Excellence • Integrity • Trust
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Awards &{" "}
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-white bg-clip-text text-transparent">
                Recognition
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Our greatest achievement is the trust we build. We strive to
              uphold the highest standards of discretion, professionalism, and
              client-focused investigative support.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                Connect With Us
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-standards"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-blue-300/60 hover:bg-white/10"
              >
                Explore Our Standards
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      </section>

      {/* FEATURED RECOGNITION */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 size-96 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -top-20 -z-10 size-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              <Sparkles size={15} />
              A moment of distinction
            </p>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Indian Trade Award
              <span className="mt-2 block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 bg-clip-text text-transparent">
                2025
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              A proud milestone in the Vertex Intelligence Services journey. This recognition is a reminder of the dedication, care, and commitment behind the work we do.
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10 text-amber-200">
                <Trophy size={22} />
              </span>
              <p className="text-sm leading-6 text-slate-300">
                <span className="block font-semibold text-white">A valued recognition</span>
                Presented to Mr. Sumit Aggarwal
              </p>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-300/30 via-blue-500/15 to-transparent opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-200/20 bg-slate-900 p-2 shadow-2xl shadow-black/40 sm:p-3">
              <img
                src={trophyImage}
                alt="Indian Trade Award 2025 trophy presented to Mr. Sumit Aggarwal"
                loading="lazy"
                className="h-[380px] w-full rounded-[1.15rem] object-cover object-center transition duration-700 group-hover:scale-[1.02] sm:h-[500px]"
              />
              <figcaption className="absolute inset-x-2 bottom-2 rounded-b-[1.1rem] bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent px-5 pb-5 pt-14 sm:inset-x-3 sm:bottom-3 sm:px-7 sm:pb-7">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200 sm:text-xs">
                  <Award size={15} />
                  Indian Trade Award · 2025
                </span>
                <p className="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">
                  A proud milestone. A lasting inspiration.
                </p>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </section>

      {/* AWARD GALLERY */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Milestones worth celebrating
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Recognition in pictures
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              A look back at meaningful moments in the Vertex Intelligence
              Services journey.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2">
            {[
              {
                image: ceremonyImage1,
                alt: "Vertex Intelligence Services award ceremony",
                title: "An award ceremony",
                mobileAspect: "aspect-[4/3]",
                imageFit: "object-cover",
                description:
                  "A proud moment celebrating achievement and professional dedication.",
              },
              {
                image: doctorateImage,
                alt: "Honorary doctorate presented to Dr. Sumit Aggrawal of Vertex Intelligence Services",
                title: "Honorary Doctorate",
                mobileAspect: "aspect-[2/3]",
                imageFit: "object-contain",
                description:
                  "Recognition presented to Dr. Sumit Aggrawal of Vertex Intelligence Services.",
              },
            ].map((award, index) => (
              <motion.figure
                key={award.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div
                  className={`relative flex w-full items-center justify-center overflow-hidden bg-slate-100 lg:h-[420px] lg:aspect-auto ${award.mobileAspect}`}
                >
                  <img
                    src={award.image}
                    alt={award.alt}
                    loading="lazy"
                    className={`h-full w-full ${award.imageFit} transition duration-500 group-hover:scale-[1.02]`}
                  />
                </div>
                <figcaption className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <Award size={22} />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 sm:text-2xl">
                        {award.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-700"
            >
              <span className="h-px w-8 bg-blue-600" />
              Our Commitment
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-5 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Recognition begins with{" "}
              <span className="text-blue-700">doing things right.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-6 text-base leading-8 text-slate-600"
            >
              At Vertex Intelligence Services, we believe that professional
              credibility is built through consistent conduct, careful
              attention, and respect for every client. Our approach is grounded
              in the values that guide our work, not simply in accolades.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-8 flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 transition duration-300 hover:border-blue-200 hover:bg-blue-50"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-200">
                <Award size={25} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Excellence in Every Assignment
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We aim to make professionalism, discretion, and responsible
                  service the foundation of every client interaction.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200 via-transparent to-slate-200 opacity-70 blur-xl transition duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-300/40">
              <img
                src={recognitionImage}
                alt="Recognition and professional standards"
                loading="lazy"
                className="h-[320px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[440px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <ShieldCheck size={15} />
                  Professional Standards
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Built on Trust.
                  <br />
                  Guided by Integrity.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                  A commitment to responsible investigative support and
                  professional client care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STANDARDS SECTION */}
      <section
        id="our-standards"
        className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              The Principles We Follow
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              The Standards Behind Our Work
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Meaningful recognition starts with a strong foundation. These
              principles shape how we approach every client and assignment.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {standards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.13 }}
                  whileHover={{ y: -9 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-8"
                >
                  <span className="absolute -right-3 -top-7 font-serif text-8xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                    {item.number}
                  </span>

                  <div className="relative flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="relative mt-7 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-24" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mb-12 max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Our Core Values
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              What sets our approach apart
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -5 }}
                  className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl shadow-slate-300/40 sm:px-12 sm:py-16 lg:px-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border border-blue-400/20" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 size-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-500/15 text-blue-200"
            >
              <Trophy size={31} />
            </motion.div>

            <h2 className="mt-7 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Looking for Professional Assistance?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Have questions about our services, professional approach, or
              company credentials? Our team is here to help you take the next
              step with confidence.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              Get in Touch
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-5 text-xs tracking-wide text-slate-400">
              Professionalism • Discretion • Client Care
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Awards;