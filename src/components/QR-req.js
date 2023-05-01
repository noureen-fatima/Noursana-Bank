import React from 'react';
import QR from "../resources/qr.svg"
function QRcode(){
    return(
        <div className="qr-req">
            <div className="qr-head">     
                <img src = {QR} alt = "qr"></img>
            </div>
            <div className="qr-input">
                <h2>Send Money via QR</h2>
                <div className="f-acc">
                    <label for = "from-acc">From Account</label>
                    <br></br>
                    <input className="from-acc" type = "text"></input>
                </div>
                <br></br>
                <div className="amount">
                    <label for = "amount">Amount</label>
                    <br></br>
                    <input className="amount" type = "text"></input>
                </div>
                <br></br>
                <br></br>
                <button className="btns qr-btn">Proceed</button>
            </div>
           
        </div>
    );
}

export default QRcode;