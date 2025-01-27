import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import Navbar from "../components/common/navigation/Navbar"
import "../css/about.css"

const About = () => {
  return (
    <>
           <Navbar />
           <AboutHero />
           <AboutBody />
    </>
  )
}

export default About