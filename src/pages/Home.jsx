import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
           <Navbar />
           <HeroSection />
           <div className="hero-extra"></div>
    </>
  )
}

export default Home