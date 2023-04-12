import profile from "../resources/profile.svg"

function Header(){
    return(
        <>
            <div className="header">
                <img className="logo" src={require("../resources/NSB-cropped.png")} alt={"Logo"}/>
                <div>
                    <img className="profile-icon" src={profile} alt={"profile icon"} />
                </div>
                
            </div>
        </>
    )
}

export default Header;