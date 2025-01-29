import service1 from "../../assets/service1.jpg"
const ServicesHero = () => {
  return (
    <div className="services-hero">
               <div className="inner-row">
                         <div className="services-hero-content">
                                    <div className="services-hero-texts">
                                               <h1>Our Expertise <br /> <span>Your Vision</span></h1>
                                               <p>We offer a wide range of creative services to help your brand stand out and grow.</p>
                                               <p>We craft compelling brand identities that tell your story and connect with your audience. From design to brand strategy, we ensure every element reflects your unique value.</p>
                                    </div>
                                    <div className="services-hero-image">
                                                 <img src={service1} alt="" />
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default ServicesHero