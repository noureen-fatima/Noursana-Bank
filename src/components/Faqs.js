import React from 'react'
import faqs from "../resources/FAQS.svg"
import que from "../resources/que.svg"
function Faqs(){
    return(
        <div className="faqs">
            <div className="faq-heading">
                 <div><img className = "faqs-svg" src = {faqs} alt = "card"></img></div>
                 <div className="faq-h1"><h1>FAQS</h1></div>
            </div>
            <div className="questions">
                <ul className="q-list">
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">What is Internet Banking?</span></li>
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">Why should I use internet banking?</span></li>
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">What is Internet Banking?</span></li>
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">Who is eligible to use Internet Banking?</span></li>
                </ul>
            </div>   
        </div>
    );
}
export default Faqs;