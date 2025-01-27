import { Link } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs";
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"

const BlogSection = () => {
  return (
    <div className="blog-section">
              <div className="inner-row">
                         <div className="blog-section-content">
                                        <div className="blog-intro">
                                                      <div className="blog-intro-column">
                                                                  <h3>Latest News</h3>
                                                                   <h2>Insights on <span>Digital Innovation</span> and Growth</h2>
                                                      </div>
                                                      <div className="blog-intro-column">
                                                                 <p>Explore the latest trends, strategies, and tools driving  and helping businesses thrive in a rapidly evolving digital landscape.</p>
                                                                 
                                                                 <Link to={"/articles"} className="link-btn"><span className="text">More Articles</span> <span className="cover-shadow"></span></Link>
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

export default BlogSection