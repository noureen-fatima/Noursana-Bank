import profileLabel from "../resources/profile-label.svg"
import edit from "../resources/edit.svg"
import del from "../resources/delete.svg"
function BeneManage()
{
    return(
        <div className="BeneManage">
             <h2 className="b-heading b-m-heading">Manage Beneficiary List</h2>
             <div className="b-l-btns b-m-btns"><button className="btns b-l-sort">Sort</button> <button className="btns b-l-add">Add</button></div>
             <div className="b-m-list">
                    <ul className="b-ulist">
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        <li className="b-list-item bm-li"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">User 1</div>
                        <div className="B-list-acc">003944094094930</div><div className="currency">PKR</div><div><img className="edit-svg" src={edit}/>
                        <img className="del-svg" src={del}/></div>
                        </li>
                        
                    </ul>
                 </div>
        </div>
    );

}

export default BeneManage;