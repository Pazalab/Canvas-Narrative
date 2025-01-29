import { Link } from "react-router-dom"
import results from "../../assets/results.png"
import creativity from "../../assets/creativity.png"
import collaboration from "../../assets/collaborate.png"
import customization from "../../assets/customization.png"
import innovation from "../../assets/innovation.png"
import { LuMoveUpRight } from "react-icons/lu";

const AboutSection = () => {
  return (
    <div className="about-section">
               <div className="inner-row">
                        <div className="about-section-content">
                                    <div className="about-section-row">
                                                <div className="about-section-column">
                                                          <h2>You bring the Blank Canvas, We craft the Masterpiece.</h2>
                                                </div>
                                                <div className="about-section-column">
                                                           <p>Every brand should captivate, connect, and create lasting impact. At Canvas Narrative, we transform your vision into a strategic and impactful brand message tailored to resonate with your audience. Our approach goes beyond creativity; it’s about delivering a solution that aligns with your goals, amplifies your presence, and builds meaningful connections that translate into tangible outcomes.</p>
                                            
                                                           <p>We prioritize building long-lasting relationships with our clients, rooted in trust and collaboration by fostering open communication and a strong rapport throughout every business engagement. Our goal is to be more than a service provider—we strive to be your trusted partner in achieving sustained success.</p>

                                                           <Link to={"/about-us"} className="link-btn"> <span className="text">More About Us</span> <span className="cover-shadow"></span> <span className="icon2"><LuMoveUpRight /></span></Link>
                                                </div>
                                    </div>

                                    <div className="features-row">
                                                 <div className="feature-row-moja">
                                                             <img src={results} alt="" />
                                                             <h3>Results that Speak</h3>
                                                             <p>We focus on data and insights to craft strategies that deliver real, measurable outcomes, helping you get the most out of every effort.</p>
                                                 </div>
                                                 <div className="feature-row-moja">
                                                             <img src={customization} alt="" />
                                                             <h3>Strategies Built for You</h3>
                                                             <p>Everything we create is tailored to your unique goals and audience, ensuring your brand stands out where it matters most.</p>
                                                 </div>
                                                 <div className="feature-row-moja">
                                                             <img src={innovation} alt="" />
                                                             <h3>Tools that Keep you Ahead</h3>
                                                             <p>We use the latest tech and innovation to fine-tune performance and keep you a step ahead of the competition.</p>
                                                 </div>
                                                 <div className="feature-row-moja">
                                                             <img src={creativity} alt="" />
                                                             <h3>Content that Connects</h3>
                                                             <p>From bold visuals to compelling stories, we craft creative content that grabs attention and drives action.</p>
                                                 </div>
                                                 <div className="feature-row-moja">
                                                             <img src={collaboration} alt="" />
                                                             <h3>Collaboration you can Count on</h3>
                                                             <p>Think of us as part of your team - clear communication, honest feedback, and support that drives real progress.</p>
                                                 </div>
                                    </div>
                        </div>
               </div>
    </div>
  )
}

export default AboutSection