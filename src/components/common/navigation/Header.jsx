import { Link, NavLink } from "react-router-dom"
import { TbMenu4 } from "react-icons/tb";
import { useContext } from "react";
import { sidebarContext } from "./navContext";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);

  return (
    <div className="header-section">
              <div className="inner-row">
                       <div className="header-content">
                                 <div className="header-content-column">
                                            <Link to={"/"} className="logo">
                                                       <h2>Canvas <span>Narrative</span><span className="dot"></span></h2>
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

                                             <span className="menu-btn" onClick={() => setSidebarStatus(true)}>
                                                    <TbMenu4 />
                                             </span>
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default Header