import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

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
                                                  <div className="call-to-action">
                                                            <Link to={"/"}>
                                                                   <img src="" alt="" />
                                                             </Link>
                                                  </div>
                                                  <div className="hero-description">
                                                              <div className="hero-description-box">
                                                                        <h2>Achieve powerful results with digital ideas</h2>
                                                              </div>
                                                  </div>
                                      </div>
                          </div>
                </div>
    </div>
  )
}

export default HeroSection