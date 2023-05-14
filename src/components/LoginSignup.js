
import facerecg from "../resources/face-recg.svg"
import React from 'react';
import { useState } from 'react';

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [cnic, setCnic] = useState('');
    const [card, setCard] = useState('');
    const [showLoginFields, setShowLoginFields] = useState(false);
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const [name, setName] = useState("");
    const [CNIC, setCNIC] = useState("");
    const [Card, setCard] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
   
        if (!showLoginFields) {
        setShowLoginFields(true);
        } else {
        // handle form submission logic here
        }
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


    const handleLoginClick = () => setIsLogin(false);
    const handleSignupClick = () => setIsLogin(true);

    return (
        <div className="container-lg">
            <div className="form-structor">
                <div className={`signup ${!isLogin ? 'slide-up' : ''}`}>
                    <h2 className="form-title" id="signup" onClick={handleSignupClick}>
                        Sign up
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-holder">
                 
                        {!showLoginFields && (
                        <>
                            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" className="input" placeholder="CNIC" value={cnic} onChange={(e) => setCnic(e.target.value)} />
                            <input type="text" className="input" placeholder="Debit/Credit Card" value={card} onChange={(e) => setCard(e.target.value)} />
                        </>
                        )}
                        {showLoginFields && (
                        <>
                            <input type="text" className="input" placeholder="Log In ID" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
                            <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" className="input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                       
                        </>
                        )}
                        </div>
                        {showLoginFields && (
                            <div className="face-recog-svg">
                                <img src={facerecg} alt="face recognition" />
                            </div>
                        )}
                        <button type="submit" className="submit-btn">{showLoginFields ? 'Sign up' : 'Next'}</button>
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
    