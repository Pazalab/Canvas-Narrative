import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs";
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"

const InsightsBody = () => {
  return (
    <div className="insights-body">
               <div className="inner-row">
                          <div className="insights-body-content">
                                    <div className="insights-intro">
                                                <h1>Insights on Digital News & Trends</h1>
                                                 <div className="search-area">
                                                              <span><TfiSearch /></span>
                                                             <input type="text" placeholder="Search" />
                                                 </div>
                                    </div>

                                    <div className="blog-section-row">
                                                   <div className="blog-moja">
                                                             <div className="blog-image">
                                                                       <img src={blog1} alt="" />
                                                             </div>
                                                             <div className="blog-texts">
                                                                           <h3>UI/UX Design Principles for Better User Engagement</h3>
                                                                           <Link to={"/"}>Read More <span><BsArrowUpRight /></span></Link>
                                                             </div>
                                                   </div>
                                                   <div className="blog-moja">
                                                             <div className="blog-image">
                                                                       <img src={blog3} alt="" />
                                                             </div>
                                                             <div className="blog-texts">
                                                                           <h3>Content Marketing Essentials for Growing Your Brand</h3>
                                                                           <Link to={"/"}>Read More <span><BsArrowUpRight /></span></Link>
                                                             </div>
                                                   </div>
                                                   <div className="blog-moja">
                                                             <div className="blog-image">
                                                                       <img src={blog2} alt="" />
                                                             </div>
                                                             <div className="blog-texts">
                                                                           <h3>Why Your Business Needs a Mobile-Optimized Website</h3>
                                                                           <Link to={"/"}>Read More <span><BsArrowUpRight /></span></Link>
                                                             </div>
                                                   </div>
                                        </div>
                          </div>
               </div>
    </div>
  )
}

export default InsightsBody