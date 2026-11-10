import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Film,
  Play,
  ShieldCheck,
  X,
  Volume2,
  Maximize2,
} from "lucide-react";

const mediaItems = [
  { number: 1, id: "HOI0Is_5C00" },
  { number: 2, id: "bOrqh6OFvo0" },
  { number: 3, id: "3xzZy0H3DNE" },
  { number: 4, id: "trtU7yCzSNs" },
  { number: 5, id: "Ey8jvyMvlFU" },
  { number: 6, id: "Zf2Cog-d6Kc" },
  { number: 7, id: "QY5cpZyyT7M" },
  { number: 8, id: "JiF-rM5WCuI" },
  { number: 9, id: "YIKPPThptqM" },
].map((video) => ({
  ...video,
  thumbnail: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${video.id}`,
}));

// Animation settings
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.15 };

const VideoPreview = ({ video, className = "" }) => {
  return (
    <img
      src={video.thumbnail}
      alt=""
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  );
};

const VideoCard = ({ video, index, onOpen }) => {
  const number = String(video.number).padStart(2, "0");

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      onClick={() => onOpen(video)}
      className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
        <VideoPreview
          video={video}
          className="transition-transform duration-700 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/20" />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/20 bg-slate-950/55 px-3 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Media {number}
          </span>
        </div>

        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 p-2 text-white backdrop-blur-md">
          <ArrowUpRight size={15} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-600">
            <Play size={23} fill="currentColor" className="ml-1" />
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
            Vertex Intelligence
          </p>
          <p className="mt-1 text-sm font-medium text-white">
            Watch video {number}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
            Video Collection
          </p>
          <h3 className="mt-1 font-serif text-xl font-semibold text-slate-950">
            Featured Media {number}
          </h3>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
          <ArrowRight size={17} />
        </span>
      </div>
    </motion.button>
  );
};

const Media = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (!activeVideo) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeVideo]);

  const featured = mediaItems[0];

  return (
    <main className="overflow-hidden bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#050d1c] text-white lg:min-h-[760px]">
        {/* Cinematic background */}
        {featured && (
          <div className="absolute inset-0 -z-20 overflow-hidden bg-[#050d1c]">
            <img
              src={featured.thumbnail}
              alt=""
              fetchPriority="high"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-45 blur-2xl"
            />
            <iframe
              src={`${featured.embedUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${featured.id}&playsinline=1&rel=0`}
              title="Muted featured Short background"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] max-w-none -translate-x-1/2 -translate-y-1/2 scale-100 lg:scale-[1.8]"
            />
            <div className="absolute inset-0 bg-[#050d1c]/45" />
          </div>
        )}

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050d1c]/75 via-[#050d1c]/45 to-[#050d1c]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050d1c]/55 via-transparent to-[#050d1c]/10" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[760px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">
                Vertex Intelligence Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[88px]"
            >
              The Story
              <br />
              Behind the
              <br />
              <span className="italic text-blue-400">Investigation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Step inside the world of professional intelligence. Explore our
              media collection and discover the perspective behind investigative
              work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#video-library"
                className="inline-flex items-center gap-3 rounded-md bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Explore Media Library
                <ArrowDownRight size={18} />
              </a>

              {featured && (
                <button
                  onClick={() => setActiveVideo(featured)}
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-blue-400 group-hover:bg-blue-600">
                    <Play size={16} fill="currentColor" />
                  </span>
                  Watch Featured Film
                </button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom hero strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#071329]/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-blue-400" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                Professional Intelligence Services
              </span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Media Archive / {String(mediaItems.length).padStart(2, "0")} Films
            </span>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                Our Media
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              A closer look at
              <br />
              <span className="italic text-blue-700">intelligence.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-9 text-slate-600">
              Investigation is about observation, precision, and understanding
              the details that matter. Our media library offers a visual
              introduction to Vertex Intelligence Service and the world of
              professional investigative solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-3">
                <Film size={21} className="text-blue-700" />
                <span className="text-sm font-semibold text-slate-800">
                  Video Archive
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={21} className="text-blue-700" />
                <span className="text-sm font-semibold text-slate-800">
                  Professional Approach
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED VIDEO ================= */}
      {featured && (
        <section className="bg-[#f5f7fb] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                  Editor's Selection
                </p>
                <h2 className="font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Featured Film
                </h2>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Vertex / Media 01
              </span>
            </div>

            <motion.button
              type="button"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.7 }}
              onClick={() => setActiveVideo(featured)}
              className="group relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 text-left shadow-2xl shadow-slate-900/15 sm:aspect-[21/9]"
            >
              <VideoPreview
                video={featured}
                className="transition-transform duration-700 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

              <span className="absolute left-5 top-5 rounded-md border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-8 sm:top-8">
                Featured Presentation
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 sm:h-24 sm:w-24">
                  <Play size={30} fill="currentColor" className="ml-1" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 sm:p-10">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                    Vertex Intelligence Service
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-white sm:text-4xl">
                    Inside the World of Intelligence
                  </h3>
                </div>

                <span className="hidden items-center gap-2 text-sm font-semibold text-white sm:flex">
                  Watch Film <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.button>
          </div>
        </section>
      )}

      {/* ================= MEDIA LIBRARY ================= */}
      <section
        id="video-library"
        className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-wrap items-end justify-between gap-6"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-blue-600" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                  Explore the Archive
                </p>
              </div>

              <h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Our Media <span className="italic text-blue-700">Library.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Explore our collection of videos and presentations. Select a
                film to watch in our cinematic player.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3">
              <Clapperboard size={17} className="text-blue-700" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                {mediaItems.length} Available Videos
              </span>
            </div>
          </motion.div>

          {mediaItems.length ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {mediaItems.map((video, index) => (
                <VideoCard
                  key={video.number}
                  video={video}
                  index={index}
                  onOpen={setActiveVideo}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-14 text-center">
              <Film size={36} className="mx-auto text-slate-400" />
              <p className="mt-4 text-slate-600">
                Our media collection will be available soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#071329] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                Confidential Consultation
              </p>

              <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Every detail matters.
                <br />
                <span className="italic text-blue-400">
                  Let's discuss yours.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Looking for professional investigative assistance? Connect with
                our team to discuss your enquiry privately and explore the next
                steps.
              </p>
            </motion.div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-5 rounded-md bg-blue-600 px-8 py-5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
            >
              Contact Our Team
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020611]/95 p-3 backdrop-blur-xl sm:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label="Video player"
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-[#0a1427] shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                    Vertex Intelligence Service
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-white">
                    Media Film {String(activeVideo.number).padStart(2, "0")}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-red-400 hover:bg-red-500"
                >
                  <X size={20} />
                </button>
              </div>

              <iframe
                key={activeVideo.id}
                src={`${activeVideo.embedUrl}?autoplay=1&playsinline=1`}
                title={`Vertex Intelligence Service Short ${activeVideo.number}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video max-h-[75vh] w-full bg-black"
              />

              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Volume2 size={15} />
                  Use player controls for audio
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Maximize2 size={15} />
                  Fullscreen available
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Media;
