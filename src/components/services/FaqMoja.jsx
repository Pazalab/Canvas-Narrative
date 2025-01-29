/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { TfiMinus } from "react-icons/tfi";
const FaqMoja = ({ data }) => {
    const [active, setActive ] = useState(false)
  return (
    <div className={active ? "faq-moja active" : "faq-moja"}>
              <div className="faq-header" onClick={() => setActive(!active)}>
                         <h3>{data.question}</h3>
                         { active ? <span><TfiMinus /></span> : <span><BsPlusLg /></span>}
              </div>
              <div className="faq-answer">
                         <div className="faq-answer-inner">
                                   <p>{data.answer}</p>
                         </div>
              </div>
    </div>
  )
}

export default FaqMoja