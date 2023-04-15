import facerecg from "../resources/face-recg.svg"
import "../login-style.css"

function LoginSignup(){
    const handleSignup = (e) => {
        let parent = e.target.parentNode;
        Array.from(e.target.parentNode.classList).find((element) => {
          if(element !== "slide-up") {
            parent.classList.add('slide-up')
          } else {
            e.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
          }
        });
    }
    const handleLogin = (e) => {
        let parent = e.target.parentNode.parentNode;
        Array.from(e.target.parentNode.parentNode.classList).find((element) => {
          if(element !== "slide-up") {
            parent.classList.add('slide-up')
          } else {
            e.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
          }
        });
    };

    return(
        <>
            <div className="form-structor">
                <div className="signup">
                    <h2 className="form-title" id="signup" onClick={handleSignup}><span>or</span>Sign up</h2>
                    <div className="form-holder">
                        <input type="text" className="input" placeholder="Name" />
                        <input type="email" className="input" placeholder="Email" />
                        <input type="password" className="input" placeholder="Password" />
                    </div>

                    <div className="face-recog-svg">
                        <img src={facerecg} alt="face recognition" />
                    </div>
                    <button className="submit-btn">Sign up</button>
                </div>

                <div className="login slide-up">
                    <div className="center">
                        <h2 className="form-title" id="login" onClick={handleLogin}><span>or</span>Log in</h2>
                        <div className="form-holder">
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button className="submit-btn">Log in</button>
                        <hr/>
                        <div className="face-recog-svg">
                            <img src={facerecg} alt="face recognition" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup;