import ContactForm from "./ContactForm"
import { MdLocalPhone } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { PiMapPinLine } from "react-icons/pi";

const ContactBody = () => {
  return (
    <div className="contact-body">
               <div className="inner-row">
                          <div className="contact-body-content">
                                       <div className="contact-body-intro">
                                                   <h1>Get in Touch with Us</h1>
                                                   <p>We&apos;re excited to connect with you! Whether you&apos;re looking for expert guidance or just need answers, we&apos;re here to help—no matter where you are in your journey. Let&apos;s make things happen together!</p>
                                       </div>

                                       <div className="contact-body-row">
                                                 <div className="contact-details">
                                                            <div className="contact-details-wrap">
                                                                       <h3>Give us a call</h3>
                                                                       <div className="contact-box">
                                                                                 <span><MdLocalPhone /></span>
                                                                                 <p>+254 7080 67392</p>
                                                                       </div>
                                                            </div>
                                                            <div className="contact-details-wrap">
                                                                       <h3>Send us mail</h3>
                                                                       <div className="contact-box">
                                                                                 <span><BsEnvelope /></span>
                                                                                 <p>hello@canvasnarrative.com</p>
                                                                       </div>
                                                            </div>
                                                            <div className="contact-details-wrap">
                                                                       <h3>Visit our office</h3>
                                                                       <div className="contact-box">
                                                                                 <span><PiMapPinLine /></span>
                                                                                 <p>The Avenue Building, Mpaka Road Westlands, Nairobi, Kenya</p>
                                                                       </div>
                                                            </div>
                                                 </div>
                                                 <div className="contact-form-wrap">
                                                            <ContactForm />
                                                 </div>
                                       </div>
                          </div>
               </div>
    </div>
  )
}

export default ContactBody