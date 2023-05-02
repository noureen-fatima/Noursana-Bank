import facerecg from "../resources/face-recg.svg"
import React from 'react';
import { useState } from 'react';

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    const handleLoginClick = () => setIsLogin(false);
    const handleSignupClick = () => setIsLogin(true);

    const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    };

    return (
        <div className="container-lg">
            <div className="form-structor">
                <div className={`signup ${!isLogin ? 'slide-up' : ''}`}>
                    <h2 className="form-title" id="signup" onClick={handleSignupClick}>
                        Sign up
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="cnic" className="input" placeholder="CNIC" />
                        <input type="card" className="input" placeholder="Debit/Credit Card" />
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
    