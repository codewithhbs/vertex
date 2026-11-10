import { useState } from 'react'
import { Pause, Play, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Vertex Intelligence Services handled my case with complete professionalism and confidentiality. Their investigation reports were detailed, accurate, and delivered on time.',
    role: 'Business Client',
    location: 'Delhi',
  },
  {
    quote:
      'Their surveillance team is highly experienced and professional. We hired them for a corporate investigation and the results exceeded our expectations.',
    role: 'Corporate Client',
    location: 'Gurgaon',
  },
  {
    quote:
      'Professional investigators with modern surveillance techniques. Their quick response and accurate reporting helped us uncover important information within a short time.',
    role: 'Private Client',
    location: 'Noida',
  },
  {
    quote:
      'The team listened carefully, explained the process clearly, and treated a sensitive matter with the discretion it deserved.',
    role: 'Private Client',
    location: 'New Delhi',
  },
  {
    quote:
      'Communication was thoughtful throughout, and the findings were presented in a clear, professional manner.',
    role: 'Business Client',
    location: 'Gurgaon',
  },
]

const Testimonial = () => {
  const [testimonialsPaused, setTestimonialsPaused] = useState(false)

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto mb-9 flex max-w-7xl flex-col gap-5 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            Client feedback
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl font-semibold sm:text-4xl"
          >
            What our clients say
          </h2>
          {/* <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            These illustrative sample testimonials are placeholders. Replace
            them with approved client feedback before publishing.
          </p> */}
        </div>
        <button
          type="button"
          aria-label={
            testimonialsPaused
              ? 'Resume testimonial slider'
              : 'Pause testimonial slider'
          }
          aria-pressed={testimonialsPaused}
          onClick={() => setTestimonialsPaused((paused) => !paused)}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-blue-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
        >
          {testimonialsPaused ? (
            <Play className="size-4" />
          ) : (
            <Pause className="size-4" />
          )}
          {testimonialsPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div
        className={`testimonial-marquee${testimonialsPaused ? ' is-paused' : ''}`}
        role="region"
        aria-label="Illustrative testimonials, scrolling from right to left"
        tabIndex="0"
      >
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? 'duplicate' : 'original'}
            className="testimonial-marquee__group"
            aria-hidden={isDuplicate}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.role}-${testimonial.location}-${index}`}
                className="testimonial-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-200 ring-1 ring-blue-400/30">
                      {testimonial.role
                        .split(' ')
                        .map((word) => word[0])
                        .join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {testimonial.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Quote
                    className="size-6 shrink-0 text-blue-400/80"
                    aria-hidden="true"
                  />
                </div>
                <div
                  className="mt-5 flex gap-1 text-amber-400"
                  aria-label="Sample five-star rating"
                >
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  “{testimonial.quote}”
                </p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial