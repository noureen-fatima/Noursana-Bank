import React from 'react';
function SendMoney(){

    return(

        <div className="SendMoney">
            <h2>Send Money</h2>
            <div className="from-acc">
                <label for = "input-from-acc">From Account</label>
                <input className = "input-from-acc"type = "text"></input>
            </div>

            <div className="to-acc">
                <label for = "input-to-acc">To Account</label>
                <input className="input-to-acc" type = "text"></input>
            </div>
           
            <div className="amt-to-send">
                <label for = "amt-send-input">Amount</label>
                <input className="amt-send-input" type = "text"></input>
            </div>
           
            <label for = "payment-type">Payment Type</label>
            <select className = "select-payment-type" name="Payment-Type" id="payment-type">
                <option value="Donation">Donation</option>
                <option value="Paymment">Paymment</option>
                <option value="Online">Online Purchase</option>
                <option value="Other">Other</option>
            </select>
            <br></br>
            <button className="btns send-btn">Send</button>
        </div>

    );
}

export default SendMoney;