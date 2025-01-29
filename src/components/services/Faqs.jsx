import { faqs_data } from "../../data/faqs"
import FaqMoja from "./FaqMoja"

const Faqs = () => {
  return (
    <div className="faqs-section">
             <div className="inner-row">
                         <div className="faqs-section-content">
                                      <div className="faqs-intro">
                                               <h2>Got Questions? We&apos;ve Got Answers!</h2>
                                               <p>Curious about how Canvas Narrative, a leading digital marketing technology firm operates? Check out common questions our potential customers ask for a detailed overview of our services and processes.</p>
                                      </div>
                                      <div className="faqs-row">
                                                 { faqs_data.map(item => <FaqMoja data={item} key={item.id}/>)}
                                      </div>
                         </div>
             </div>
    </div>
  )
}

export default Faqs