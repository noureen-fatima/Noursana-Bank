
import facerecg from "../resources/face-recg.svg"
import React from 'react';
import { useState } from 'react';

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    const handleLoginClick = () => setIsLogin(false);
    const handleSignupClick = () => setIsLogin(true);

    const [name, setName] = useState("");
    const [CNIC, setCNIC] = useState("");
    const [Card, setCard] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name,CNIC, Card);
        fetch("http://localhost:8000/register",{
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
                "Acess-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                name,
                CNIC,
                Card,
            }),
        }).then((res)=> res.json())
        .then((data)=>{
            console.log(data, "userRegister")
        })
    };
    // handle form submission

  
    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleCNICChange = (e) =>{
        setCNIC(e.target.value);
    }

    const handleCardChange = (e) =>{
        setCard(e.target.value);
    }


    return (
        <div className="container-lg">
            <div className="form-structor">
                <div className={`signup ${!isLogin ? 'slide-up' : ''}`}>
                    <h2 className="form-title" id="signup" onClick={handleSignupClick}>
                        Sign up
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" onChange={handleNameChange}/>
                        <input type="text" className="input" placeholder="CNIC" onChange={handleCNICChange}/>
                        <input type="text" className="input" placeholder="Debit/Credit Card" onChange={handleCardChange}/>
                        </div>

                        <div className="face-recog-svg">
                        <img src={facerecg} alt="face recognition" />
                        </div>
                        <button type="submit" className="submit-btn">Sign up</button>
                    </form>
                </div>

                <div className={`login ${isLogin ? 'slide-up' : ''}`}>
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={handleLoginClick}>
                        Log in
                        </h2>
                        <form onSubmit={handleSubmit}>
                        <div className="form-holder">
                            <input type="login-id" className="input" placeholder="Login ID" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button type="submit" className="submit-btn">Log in</button>
                        <hr/>
                        <div className="face-recog-svg">
                            <img src={facerecg} alt="face recognition" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
    