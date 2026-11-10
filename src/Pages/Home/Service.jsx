import { Link } from 'react-router-dom'
import backgroundCheckingImage from '../../assets/background_checking.jpg'
import corporateVerificationImage from '../../assets/corporate_verification.jpg'
import cyberInvestigationImage from '../../assets/cyber_investigation.jpg'
import loyaltyTestImage from '../../assets/loyality_test.jpg'
import missingPersonImage from '../../assets/missing_person.jpg'
import postMarriageImage from '../../assets/post.jpg'
import preMarriageImage from '../../assets/pre.jpg'
import surveillanceImage from '../../assets/recogination.jpg'

const services = [
  {
    name: 'Background Checking',
    link: '/our-services/background-checking',
    image: backgroundCheckingImage,
    description: 'Discreet checks to help you make informed decisions.',
  },
  {
    name: 'Corporate Verification',
    link: '/our-services/corporate-verification',
    image: corporateVerificationImage,
    description: 'Verification support for businesses and organizations.',
  },
  {
    name: 'Cyber Investigation',
    link: '/our-services/cyber-investigation',
    image: cyberInvestigationImage,
    description: 'Support for online fraud and suspicious digital activity.',
  },
  {
    name: 'Loyalty Test',
    link: '/our-services/loyalty-test',
    image: loyaltyTestImage,
    description: 'Confidential fact-finding for sensitive relationship concerns.',
  },
  {
    name: 'Missing Person Search',
    link: '/our-services/missing-person-search',
    image: missingPersonImage,
    description: 'Discreet search support for families and individuals.',
  },
  {
    name: 'Pre-Matrimonial Investigation',
    link: '/our-services/pre-matrimonial-investigation',
    image: preMarriageImage,
    description: 'Confidential checks before an important commitment.',
  },
  {
    name: 'Post-Matrimonial Investigation',
    link: '/our-services/post-matrimonial-investigation',
    image: postMarriageImage,
    description: 'Sensitive enquiries approached with care and discretion.',
  },
  {
    name: 'Surveillance & Reconnaissance',
    link: '/our-services/surveillance-reconnaissance',
    image: surveillanceImage,
    description: 'Professional field investigation and fact-finding.',
  },
]

const Service = () => {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              What we do
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
              Investigation services
            </h2>
          </div>
          <Link
            to="/our-services"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.link}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service