import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
//import { LuMoveUpRight } from "react-icons/lu";
import { RiPlayLargeFill } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="hero-section">
                <div className="hero-texts">
                          <div className="inner-row">
                                     <h1>Transforming businesses with <br></br>
                                      <span className="outerbox" >
                                                <Typewriter 
                                                      words={[ "Tailored Digital Solutions.", "Data-Driven Precision.", "Creativity & Impactful Content."]}
                                                      loop={0}
                                                 />
                                      </span></h1>

                                      <div className="hero-row">
                                                  <div className="action-column">
                                                           {/* <Link to={""}>Explore Services <span><LuMoveUpRight /></span></Link> */}
                                                           <Link className='link-btn' to={"/"}><span className="text">Read More About Us</span> <span className="cover-shadow"></span> </Link>
                                                            <div className="action-vid">
                                                                      <span><RiPlayLargeFill /></span>
                                                            </div>
                                                  </div>
                                                  <div className="hero-description">
                                                              <div className="hero-description-box">
                                                                        <h2><span>Achieve exceptional Results</span> with bold digital innovation.</h2>
                                                                        <p>You deserve an online presence that sets you apart. At Canvas Narrative, we provide tailored solutions designed to elevate your brand and deliver outstanding results.</p>
                                                              </div>
                                                  </div>
                                      </div>
                          </div>
                </div>
    </div>
  )
}

export default HeroSection