import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import BlogSection from "../components/home/BlogSection"
import ClientsSection from "../components/home/ClientsSection"
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
           <ClientsSection />
           <BlogSection />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Home