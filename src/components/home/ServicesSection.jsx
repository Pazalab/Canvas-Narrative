import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServicesSection = () => {
  return (
    <div className="services-section">
              <div className="inner-row">
                         <div className="services-section-content">
                                      <div className="services-intro">
                                                  <h4>Our Services</h4>
                                                  <h3>Tailored innovative solutions designed to bring your unique digital vision to life.</h3>
                                                  
                                                  <Link to={"/services"} className="link-btn"><span className="text">Request a Proposal</span> <span className="cover-shadow"></span></Link>
                                      </div>
                                      <div className="services-section-body">
                                                 <h2>How can we help you?</h2>

                                                 <div className="digital-strategy-row">
                                                           <h3>Digital Marketing & Strategy</h3>

                                                           <div className="digital-strategy-content">
                                                                      <div className="digital-box">
                                                                               <h4><span></span>Data-Driven Digital Strategy</h4>

                                                                               <p>We believe every successful strategy starts with understand the numbers. By diving deep into analytics, audience behaviour, and industry trends, we create plans that are not only targeted but also effective.</p>
                                                                               <p>Whether it&apos;s identifying the right platforms to focus on, optimizing your campaigns, or uncovering hidden opportunities, we use data to guide every decision. Our approach ensures your efforts aren&apos;t just creative but also strategically aligned to reach the right people, at the right time, with the right message - delivering real, tangible results for you brand.</p>

                                                                               <div className="link-wrap">
                                                                                         <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                </div>
                                                                      </div>
                                                                      <div className="digital-box">
                                                                                 <h4><span></span> Social Media Management</h4>
                                                                                 <p>Think of us as your go-to for everything social! From creating engaging  posts and running impactful campaigns to responding to followers and growing your community, we ensure your brand stays active, relevant, and thriving across all platforms.</p>

                                                                                 <div className="link-wrap">
                                                                                         <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                </div>
                                                                      </div>
                                                                      <div className="digital-box">
                                                                                <h4><span></span> Social Media Management Recruitment</h4>
                                                                                <p>Finding the right person to represent your brand online is key, and we&apos;re here to help. We&apos;ll connect you with skilled social media managers who know how to engage you audience, build your presence, and align with your brand&apos;s voice and goals.</p>

                                                                                <div className="link-wrap">
                                                                                         <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                </div>
                                                                      </div>
                                                           </div>

                                                           <div className="branding-content">
                                                                      <h3>Branding & Creative Design</h3>
                                                                      <div className="branding-content-row">
                                                                               <div className="digital-box">
                                                                                         <h4><span></span>Branding & Experiential Marketing</h4>
                                                                                         <p>We craft engaging and memorable experiences that bring your brand to life. Through creative activations and unique interactions, we help your audience connect with your brand in ways they won&apos;t forget.</p>

                                                                                         <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                         </div>
                                                                               </div>
                                                                               <div className="digital-box">
                                                                                         <h4><span></span> Brand Kit Development</h4>
                                                                                         <p>We design everything your brand needs to look polished and consistent, from logos and color palettes to typography. It&apos;s all about creating a cohesive identity that captures your story and makes a lasting impact.</p>
                                                                                         <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                         </div>
                                                                               </div>
                                                                      </div>
                                                           </div>


                                                           <div className="production-content">
                                                                    <h3>Content Creation & Development</h3>

                                                                    <div className="production-content-row">
                                                                                 <div className="digital-box">
                                                                                             <h4><span></span>Short-Form Content Production</h4>
                                                                                             <p>We specialize in creating bite-sized, captivating videos like TikToks and Instagram Reels. These dynamic clips are designed to grab attention, tell a story, and keep audiences engaged, all while staying true to your brand&apos;s vibe.</p>
                                                                                             <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                         </div>
                                                                                 </div>
                                                                                 <div className="digital-box">
                                                                                             <h4><span></span> Product Videos</h4>
                                                                                             <p>From sleek visuals to engaging narratives, we craft product videos that not only showcase what you offer but also resonate with your audience, leaving a lasting impression.</p>
                                                                                             <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                         </div>
                                                                                 </div>
                                                                                 <div className="digital-box"> 
                                                                                          <h4><span></span> Podcast Production</h4>
                                                                                          <p>Whether you&apos;re just starting or leveling up, we handle it all - from brainstorming strategies to recording, editing, and publishing. We ensure your podcast is professional, engaging and ready to stand out.</p>
                                                                                          <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                         </div>
                                                                                 </div>
                                                                                 <div className="digital-box">
                                                                                           <h4><span></span> Event Content Production</h4>
                                                                                           <p>Have a big event? We&apos;ll be there to capture all the best moments - highlights, behind-the-scenes action, and everything in between. We&apos;ll turn it into stunning, brand-aligned content perfect for promotions or social media.</p>
                                                                                           <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                         </div>
                                                                                 </div>
                                                                    </div>
                                                           </div>

                                                           <div className="other-solutions">
                                                                      <h3>Other Solutions</h3>

                                                                      <div className="other-solutions-row">
                                                                                  <div className="digital-box small">
                                                                                            <h4> <span></span> Web Design & Development</h4>
                                                                                            <p>Get visually stunning, user-friendly, fast, and responsive websites tailored to your brand and needs.</p>
                                                                                            <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                            </div>
                                                                                  </div>
                                                                                  <div className="digital-box small">
                                                                                            <h4> <span></span> Graphic Design</h4>
                                                                                            <p>Impactful marketing visuals and illustrations that elevate your brand recognition.</p>
                                                                                            <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                            </div>
                                                                                  </div>
                                                                                  <div className="digital-box small">
                                                                                            <h4> <span></span> Communication & PR Strategy</h4>
                                                                                            <p>We craft PR campaigns and strategic messaging that amplify your brand&apos;s voice and align perfectly with your vision.</p>
                                                                                            <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                            </div>
                                                                                  </div>
                                                                                  <div className="digital-box small">
                                                                                            <h4> <span></span> Training & Capacity Building</h4>
                                                                                            <p>We help your team level up in social media, branding and other key digital skills.</p>
                                                                                            <div className="link-wrap">
                                                                                                  <Link to={"/"}>Learn More <span><HiOutlineArrowNarrowRight /></span> </Link>
                                                                                            </div>
                                                                                  </div>
                                                                      </div>
                                                           </div>
                                                 </div>
                                      </div>
                         </div>
              </div>
    </div>
  )
}

export default ServicesSection