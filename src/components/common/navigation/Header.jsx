import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-section">
              <div className="inner-row">
                       <div className="header-content">
                                 <div className="header-content-column">
                                            <Link to={"/"}>
                                                       <h2>Canvas Narrative</h2>
                                             </Link>
                                             <nav>
                                                       <ul>
                                                                 <li><NavLink to={"/"}>Home</NavLink></li>
                                                                 <li><NavLink to={"/about"}>About</NavLink></li>
                                                                 <li><NavLink to={"/services"}>Services</NavLink></li>
                                                                 <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                                                                 <li><NavLink to={"/insights"}>Insights</NavLink></li>
                                                       </ul>
                                             </nav>
                                 </div>
                                 <div className="header-content-column">
                                             <Link to={"/contact-us"} className="action-btn">Get in Touch</Link>
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default Header