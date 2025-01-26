import { Link, NavLink} from "react-router-dom"
import { IoCloseOutline } from "react-icons/io5";
import { useContext, useEffect, useRef } from "react";
import { sidebarContext } from "./navContext";
import gsap from "gsap";
const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
    const sidebarRef = useRef();

    useEffect(() => {
            if(sidebarStatus){
                    sidebarRef.current.classList.add("active")
                    const tl = gsap.timeline();

                    tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                            y: 0,
                            duration: 0.75
                    })
                    tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                            x: 0,
                            duration: 0.5
                    })
            }else{
                  const tl = gsap.timeline();

                  tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                         x: "-100%",
                         duration: 0.75
                  })
                  tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                        y: "-100%",
                        duration: 0.75
                  })
                  setTimeout(() => {
                         sidebarRef.current.classList.remove("active")
                  }, 1600)
            }
    }, [sidebarStatus])
  return (
    <div ref={sidebarRef} className="sidebar-section">
             <div className="sidebar-overlay"></div>
             <div className="sidebar-content">
                       <div className="sidebar-header">
                                  <Link className="sidebar-logo">
                                            <h2>Canvas Narrative</h2>
                                  </Link>

                                  <span onClick={() => setSidebarStatus(false)}><IoCloseOutline /></span>
                       </div>
                       <div className="sidebar-nav">
                                  <ul>
                                         <li><NavLink to={"/"}>Home</NavLink></li>
                                         <li><NavLink to={"/about"}>About</NavLink></li>
                                         <li><NavLink to={"/services"}>Services</NavLink></li>
                                         <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                                         <li><NavLink to={"/insights"}>Insights</NavLink></li>
                                  </ul>

                                  <Link to={"/"} className="sidebar-action-btn">Get in Touch</Link>
                       </div>
             </div>
    </div>
  )
}

export default Sidebar