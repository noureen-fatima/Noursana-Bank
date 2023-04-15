import form from "../resources/form.svg"
function Loan(){
    return(
        <div className="loan-req">
            <div className="loan-head">     
                <img src = {form} alt = "loan"></img>
            </div>
            <div className="loan-input">
                <h2>Loan Request</h2>
                <div className="l-email">
                    <label for = "email">Email</label>
                    <br></br>
                    <input className="email" type = "text"></input>
                </div>
                <br></br>
                <div className="loan-ref-no">
                    <label for = "ref-no">Loan Reference Number</label>
                    <br></br>
                    <input className="ref-no" type = "text"></input>
                </div>
                <br></br>
                <button className="btns loan-btn">Send Request</button>
            </div>
           
        </div>
    );
}

export default Loan;