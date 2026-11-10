import { useEffect, useState } from 'react'
import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import founderImage from '../../assets/summit_sir.jpeg'
import vertexAward4 from '../../assets/awards_image/vertexaward4.jpeg'

const founderImages = [
  { src: vertexAward4, alt: 'Vertex Award 4' },
  { src: founderImage, alt: 'Founder with award trophy' },
]

const FounderMessage = () => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % founderImages.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
          <div className="relative h-[420px] overflow-hidden sm:h-[520px]">
            <AnimatePresence initial={false} mode="sync">
              <motion.img
                key={founderImages[activeImage].src}
                src={founderImages[activeImage].src}
                alt={founderImages[activeImage].alt}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                loading={activeImage === 0 ? 'eager' : 'lazy'}
              />
            </AnimatePresence>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold italic text-blue-800 sm:text-xl">
            Founder&apos;s Message
          </p>

          <h2 className="mt-4 max-w-[40rem] font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[3rem]">
            A LEGACY BUILT ON TRUTH,
            <span className="mt-2 block">DISCRETION &amp; RESULTS</span>
          </h2>

          <div className="mt-5 h-1 w-28 rounded-full bg-blue-600" />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-blue-900 shadow-sm">
            <Quote className="h-8 w-8 text-blue-600/80" />
            <p className="mt-3 text-base font-medium leading-8 text-slate-800 sm:text-lg">
              At Vertex Intelligence Services, we believe every case deserves
              thoughtful investigation, ethical judgment, and actionable clarity.
              Our mission is to protect our clients&apos; trust through confidential,
              professional, and result-driven intelligence support.
            </p>
          </div>

          <p className="mt-6 text-base font-medium leading-8 text-slate-800 sm:text-lg">
            With years of experience in private investigation and corporate
            intelligence, we help individuals, families, businesses, and legal
            teams uncover facts with integrity, precision, and empathy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Read Full Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderMessage
