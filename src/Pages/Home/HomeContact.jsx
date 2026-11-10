import { Link } from 'react-router-dom'

const HomeContact = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900 px-6 py-9 text-white sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            A private conversation
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Let&apos;s discuss how we can help.
          </h2>
        </div>
        <Link
          to="/contact"
          className="shrink-0 rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
        >
          Contact our team
        </Link>
      </div>
    </section>
  )
}

export default HomeContact