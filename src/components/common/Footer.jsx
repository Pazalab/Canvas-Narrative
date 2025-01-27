import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { MdLocalPhone } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { PiMapPinLine } from "react-icons/pi";
const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                       <div className="footer-content">
                                  <div className="footer-column">
                                            <Link to={"/"} className="footer-logo">
                                                       <h2>Canvas <span>Narrative</span><span className="dot"></span></h2>
                                            </Link>
                                            <p className="footer-description">We empower businesses to succeed in the digital age by delivering customized solutions designed to achieve impactful and measurable results.</p>

                                            <div className="footer-socials">
                                                       <h5>Let&apos;s Connect</h5>
                                                       <ul>
                                                                <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaTiktok /></span></Link></li>
                                                       </ul>
                                            </div>
                                  </div>
                                  <div className="footer-column-grid">
                                             <div className="footer-column-box">
                                                        <h3>Links</h3>
                                                        <ul>
                                                                <li><Link to={"/"}>Home</Link></li>
                                                                <li><Link to={"/"}>About Us</Link></li>
                                                                <li><Link to={"/"}>Services</Link></li>
                                                                <li><Link to={"/"}>Articles</Link></li>
                                                                <li><Link to={"/"}>Contact Us</Link></li>
                                                        </ul>
                                             </div>

                                             <div className="footer-column-box">
                                                       <h3>Get in Touch</h3>
                                                       <div className="footer-wrap">
                                                                   <h4>Give us a Call</h4>
                                                                   <p><span><MdLocalPhone /></span>+254 7080 67392</p>
                                                       </div>
                                                       <div className="footer-wrap">
                                                                   <h4>Send us Mail</h4>
                                                                   <p><span><BsEnvelope /></span>hello@canvasnarrative.com</p>
                                                       </div>
                                                       <div className="footer-wrap">
                                                                  <h4>Visit our Office</h4>
                                                                  <p><span><PiMapPinLine /></span>The Avenue Building, Mpaka Road
                                                                  Westlands, Nairobi, Kenya</p>
                                                       </div>
                                             </div>
                                  </div>
                       </div>
                       <div className="copyright">
                                 <p>All rights reserved &copy; { new Date().getFullYear()} Canvas Narrative &trade;</p>
                       </div>
             </div>
    </footer>
  )
}

export default Footer