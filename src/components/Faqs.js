import React from 'react'
import faqs from "../resources/FAQS.svg"
import que from "../resources/que.svg"
function Faqs(){
    const faq = [
        {q: "What is Noursana Bank Internet Banking?", a: "Noursana Bank Internet Banking is a safe, free and convenient way to bank with Noursana Bank. You can perform all your transactions online such as bill payment, funds transfer etc., whenever and wherever you want to."},
        {q: "Why should I use Noursana Bank Internet Banking?", a: "Noursana Bank Internet Banking enables you to fulfill your banking needs from the comfort of your home, office or even if you are travelling. All you need is an internet connection and your Noursana Bank Internet Banking login credentials."},
        {q: "Who is eligible to use Noursana Bank Internet Banking?", a: "Any Noursana Bank account holder with an activated Noursana Bank DebitCard or Noursana Bank CreditCard."},
        {q: "What do I require to use Noursana Bank Internet Banking?", a: "You need the following to use Noursana Bank Internet Banking:\n• PC/Laptop or Mobile Phone\n• Internet connection\n• CNIC number\n• Activated Noursana Bank DebitCard or Noursana Bank CreditCard\n• Valid ATM PIN\n• Mobile Number registered with Noursana Bank\n• Email Address registered with Noursana Bank (for credit card customers)\n• Login ID and Password for Noursana Bank Internet Banking"},
        {q: "Do I need a specific internet connection for this service?", a: "No, this service will work with any type of internet connection."},
        {q: "What should I do if I have a query which is not answered here?", a: "Please send an email at karissa.kaal@gmail.com."}
        // {q: "", a: ""},
        // {q: "", a: ""},
        // {q: "", a: ""},
        // {q: "", a: ""},
        // {q: "", a: ""},
        // {q: "", a: ""},
        // {q: "", a: ""},
        // {q: "", a: ""}
    ]

    return(
        <div className="faqs">
            <div className="faq-heading">
                 <div><img className = "faqs-svg" src = {faqs} alt = "card"></img></div>
                 <div className="faq-h1"><h1>FAQS</h1></div>
            </div>
            <div className="questions">
                <ul className="q-list">
                    {faq.map((f) => (
                        <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">{f.q} <br /> <br /> {f.a} </span></li>
                    ))}
                    {/* <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">What is Internet Banking?</span></li>
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">Why should I use internet banking?</span></li>
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">What is Internet Banking?</span></li>
                    <li className="faq1"><img className = "que-svg" src = {que} alt = "q"></img><span className="q-text">Who is eligible to use Internet Banking?</span></li> */}
                </ul>
            </div>   
        </div>
    );
}
export default Faqs;