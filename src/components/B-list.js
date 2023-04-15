import profileLabel from "../resources/profile-label.svg"

function BeneList(){
    return(
        <div className="b-l-super">
             <h2 className="b-heading">Beneficiary List</h2>
             <div className="b-l-btns"><button className="btns b-l-sort">Sort</button> <button className="btns b-l-add">Add</button></div>
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
    );
}

export default BeneList;