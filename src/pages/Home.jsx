import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import HeroSection from "../components/home/HeroSection"
import ProcessSection from "../components/home/ProcessSection"
import ServicesSection from "../components/home/ServicesSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
           <Navbar />
           <HeroSection />
           <div className="hero-extra"></div>
           <AboutSection />
           <ServicesSection />
           <ProcessSection />
    </>
  )
}

export default Home