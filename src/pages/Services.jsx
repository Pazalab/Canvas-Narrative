import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ProcessSection from "../components/home/ProcessSection"
import ServicesSection from "../components/home/ServicesSection"
import Faqs from "../components/services/Faqs"
import ServicesHero from "../components/services/ServicesHero"
import "../css/services.css"
const Services = () => {
  return (
    <>
          <Navbar />
          <ServicesHero />
          <ServicesSection />
          <ProcessSection />
          <Faqs />
          <CallToAction />
          <Footer />
    </>
  )
}

export default Services