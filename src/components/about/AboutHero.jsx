import about1 from "../../assets/about1.jpeg"
import about2 from "../../assets/about2.jpg"

const AboutHero = () => {
  return (
    <div className="about-hero">
             <div className="inner-row">
                        <div className="about-hero-content">
                                     <div className="about-hero-texts">
                                              <h1>Every Digital Story Begins with a <span>Blank Canvas</span>.</h1>
                                              <p>At Canvas Narrative, we believe every client’s journey starts with a fresh, unmarked canvas—an opportunity to craft something extraordinary. Your goals become the brushstrokes, and our expertise brings them to life, transforming your vision into a masterpiece. From concept to execution, we work hand-in-hand with you to design solutions that are as distinctive as your story. This is more than a process; it’s a collaboration built on trust, innovation, and the art of co-creating success.</p>
                                     </div>
                                     <div className="about-hero-images">
                                               <img src={about1} alt="" />
                                               <img src={about2} alt="" />
                                     </div>
                        </div>
             </div>
    </div>
  )
}

export default AboutHero