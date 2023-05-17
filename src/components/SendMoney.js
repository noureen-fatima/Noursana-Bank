import React from 'react';
import profileLabel from "../resources/profile-label.svg";

function SendMoney(){

    return(
        <>
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

                <br></br>
                <button className="btns send-btn">Send</button>
            </div>
            <div className="b-l-super">
                <h2 className="b-heading">Beneficiary List</h2>
                <div className="b-l-btns"><button className="btns b-l-add">Add</button></div>
                <div className="B-list">
                    <ul className="b-ulist">
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                    <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div>
                    </li>
                    </ul>
                </div>
           </div>
           </>

    );
}

export default SendMoney;