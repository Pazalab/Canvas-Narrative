import value1 from "../../assets/value1.jpg"
import value2 from "../../assets/value2.jpg"

const Values = () => {
  return (
    <div className="values-section">
                 <div className="inner-row">
                             <div className="values-section-content">
                                         <h2>Beliefs and Values</h2>
                                         <div className="values-section-row">
                                                      <div className="value-items">
                                                                 <div className="value-moja">
                                                                             <h3>Lead with Empathy and Authenticity</h3>
                                                                             <p>We dive deep into understanding your journey and your audience, crafting stories that remain true to your brand’s identity while fostering authentic and meaningful connections.</p>
                                                                 </div>
                                                                 <div className="value-moja">
                                                                             <h3>Take Ownership and Collaborate for Impact</h3>
                                                                             <p>We approach every project with full accountability, seeing it through from start to finish. Collaboration drives our process as we work closely with clients to bring their vision to life in impactful ways.</p>
                                                                 </div>
                                                                 <div className="value-moja">
                                                                             <h3>Strive for Excellence through Creativity and Innovation</h3>
                                                                             <p>Excellence is at the core of everything we do. By blending creativity with the latest trends and technologies, we deliver solutions that are both distinctive and enduring.</p>
                                                                 </div>
                                                                 <div className="value-moja">
                                                                           <h3>Build for Tomorrow with a Data-Driven Focus</h3>
                                                                           <p>We focus on long-term success, creating strategies informed by data-driven insights to ensure meaningful results and lasting value for your brand.</p>
                                                                 </div>
                                                      </div>
                                                      <div className="value-images">
                                                                   <div className="values-images-row">
                                                                              <img src={value1} alt="" />
                                                                              <img src={value2} alt="" />
                                                                   </div>
                                                      </div>
                                         </div>
                             </div>
                 </div>
    </div>
  )
}

export default Values