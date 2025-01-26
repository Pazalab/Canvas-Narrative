import { processes } from "../../data/process"
import process1 from "../../assets/process2.jpg"
import process2 from "../../assets/process1.jpg"
const ProcessSection = () => {
  return (
    <div className="process-section">
              <div className="inner-row">
                        <div className="process-section-content">
                                      <div className="process-intro">
                                                <h3>How We Do it</h3>
                                                <h2>Leap Ahead with Our Step-by-Step Customer Centric Process</h2>
                                                <p>We&apos;ve tailored our approach to put you at the heart of everything we do. By understanding your needs and delivering impactful solutions, we create a seamless, collaborative experience that achieves meaningful results.</p>
                                      </div>
                                      <div className="process-section-row">
                                                <div className="process-section-images">
                                                            <img src={process1} alt="" />
                                                            <img src={process2} alt="" />
                                                </div>
                                                <div  className="process-section-descriptions">
                                                        { processes.map(item => 
                                                            <div className="process-moja-wrap" key={item.id}>
                                                                         <div className="process-number">
                                                                                    <span>{item.number}</span>
                                                                         </div>
                                                                         <div className="process-moja">
                                                                                    <div className="process-title">
                                                                                             <img src={item.image} alt="" />
                                                                                             <h3> <span></span>{item.title}</h3>
                                                                                    </div>
                                                                                    <p>{item.description}</p>
                                                                         </div>
                                                            </div>
                                                        )}
                                                </div>
                                      </div>
                        </div>
              </div>
    </div>
  )
}

export default ProcessSection