import profile from "../resources/profile.svg"
import React from 'react';
import { Link } from "react-router-dom";
function Header(){
    return(
        <>
            <div className="header">
                <Link to = "/welcome">
                <img className="logo" src={require("../resources/NSB-cropped.png")} alt={"Logo"}/>
                </Link>
                <div>
                    <img className="profile-icon" src={profile} alt={"profile icon"} />
                </div>
                
            </div>
        </>
    )
}

export default Header;