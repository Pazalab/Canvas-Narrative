import { team } from "../../data/team"

const TeamSection = () => {
  return (
    <div className="team-section">
            <div className="inner-row">
                        <div className="team-section-row">
                                   <div className="team-intro">
                                               <h2>Meet the Team Behind Canvas</h2>
                                               <p>At Canvas Narrative, our goal is to craft extraordinary stories every day. We achieve this through the passion and talent of our amazing team. With a keen eye for design, creativity, and innovation, our team takes pride in transforming every project into something truly unique and impactful.</p>
                                   </div>
                                   <div className="team-row">
                                              { team.map(item => 
                                                       <div className="team-moja" key={item.id}>
                                                                 <img src={item.image} alt="" />
                                                                  <div className="overshadow"></div>
                                                                 <div className="team-texts">
                                                                            <h3>{item.name}</h3>
                                                                            <p>{item.position}</p>
                                                                 </div>
                                                       </div>
                                              )}
                                   </div>
                        </div>
            </div>
    </div>
  )
}

export default TeamSection