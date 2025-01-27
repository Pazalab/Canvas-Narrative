import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";

const CallToAction = () => {
  return (
    <div className="call-to-action-section">
              <div className="inner-row">
                         <div className="call-to-action-content">
                                    <div className="call-to-action-texts">
                                                <h2>Ready to Chat about <span>Your Project?</span></h2>
                                                <p>Reach out to us today and discover how our expertise can help your business unlock its full potential and thrive in the digital world. Let’s work together to take your online presence to the next level!</p>
                                                <Link to={"/contact-us"}>Get in Touch <span><GoArrowUpRight /></span></Link>
                                    </div>
                         </div>
              </div>
    </div>
  )
}

export default CallToAction