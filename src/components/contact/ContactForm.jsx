
const ContactForm = () => {
  return (
             <div className="contact-form"> 
                         <h3>Complete the form to get started. We&apos;ll get back to you soon.</h3>

                         <form>
                                   <div className="form-row">
                                               <input type="text" className="form-control" placeholder="Full Name*" />
                                   </div>
                                    <div className="form-row split">
                                                <div className="form-row-column">
                                                           <input type="text" className="form-control" placeholder="Phone*" />
                                               </div>
                                               <div className="form-row-column">
                                                           <input type="email" className="form-control" placeholder="Email*"/>
                                                </div>
                                   </div>
                                    <div className="form-row">
                                               <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                    <div className="form-row">
                                                <textarea placeholder="Tell us a little more about what we can do for you*"></textarea>
                                     </div>

                                     <div className="form-btn">
                                              <button type="submit">Submit</button>
                                     </div>
                        </form>
             </div>
  )
}

export default ContactForm