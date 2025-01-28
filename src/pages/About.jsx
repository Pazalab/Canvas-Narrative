import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import TeamSection from "../components/about/TeamSection"
import Values from "../components/about/Values"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ClientsSection from "../components/home/ClientsSection"
import "../css/about.css"

const About = () => {
  return (
    <>
           <Navbar />
           <AboutHero />
           <AboutBody />
           <Values />
           <TeamSection />
           <ClientsSection />
           <CallToAction />
           <Footer />
    </>
  )
}

export default About