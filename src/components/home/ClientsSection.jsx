import { useState } from "react"
import { testimonials } from "../../data/clients"
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import PartnersSection from "./PartnersSection";

const ClientsSection = () => {
    const [activeTestimonial, setActiveTestimonial ] = useState(0)
  return (
    <div className="clients-section">
               <div className="inner-row">
                          <div className="clients-section-content">
                                     <div className="clients-intro">
                                                <div className="clients-intro-column">
                                                         <h3>Testimonials</h3>
                                                         <h2>Hear it straight from our Clients</h2>
                                                </div>
                                                <p>Don’t just take our word for it—hear directly from the people who matter most: <span>our clients</span>. Their experiences, feedback, and success stories highlight the impact of our work and the meaningful results we’ve achieved together. From exceeding expectations to building lasting partnerships, their words are a testament to the value we bring.</p>
                                     </div>

                                     <div className="clients-section-row">
                                                <div className="clients-tabs">
                                                           { testimonials.map(item =>
                                                            <div className={ activeTestimonial === item.id ? "client-tab-moja active" : "client-tab-moja"} onClick={() => setActiveTestimonial(item.id)} key={item.id}>
                                                                     <img src={item.image} alt="" />
                                                                     <div className="client-tab-texts">
                                                                               <h3>{item.name}</h3>
                                                                               <p>{item.position}</p>
                                                                     </div>
                                                              </div>
                                                           )}
                                                </div>
                                                <div className="clients-tab-content">
                                                           <div className="clients-tab-row">
                                                                     { testimonials.map(item => 
                                                                            <div className={activeTestimonial === item.id ? "testimonial-client-text active" : "testimonial-client-text"} key={item.id}>
                                                                                    <div className="reviews">
                                                                                               <span><BiSolidStar /></span>
                                                                                               <span><BiSolidStar /></span>
                                                                                               <span><BiSolidStar /></span>
                                                                                               <span><BiSolidStar /></span>
                                                                                               <span><BiSolidStarHalf /></span>
                                                                                   </div>
                                                                                     <p><span><BiSolidQuoteAltLeft /></span>{item.testimonial} <span></span></p>
                                                                            </div>
                                                                     )}
                                                           </div>
                                                </div>
                                     </div>


                                     <PartnersSection />
                          </div>
               </div>
    </div>
  )
}

export default ClientsSection