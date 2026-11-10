import { Navigate, useParams } from 'react-router-dom'
import BackgroundChecking from './background-checking'
import CorporateVerification from './corporate-verification'
import CyberInvestigation from './cyber-investigation'
import LoyaltyTest from './loyalty-test'
import MissingPersonSearch from './missing-person-search'
import PreMarriage from './pre-marriage'
import PostMarriage from './post-marriage'
import SurveillanceReconnaissance from './surveillance-reconnaissance'

// Each URL slug maps directly to its independently maintained service page.
const servicePages = {
  'background-checking': BackgroundChecking,
  'corporate-verification': CorporateVerification,
  'cyber-investigation': CyberInvestigation,
  'loyalty-test': LoyaltyTest,
  'missing-person-search': MissingPersonSearch,
  'pre-matrimonial-investigation': PreMarriage,
  'post-matrimonial-investigation': PostMarriage,
  'surveillance-reconnaissance': SurveillanceReconnaissance,
}

const ServicePageRoute = () => {
  const { serviceId } = useParams()
  const Page = servicePages[serviceId]

  if (!Page) {
    return <Navigate to="/our-services" replace />
  }

  return <Page />
}

export default ServicePageRoute
