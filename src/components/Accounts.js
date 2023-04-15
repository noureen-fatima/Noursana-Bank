function Accounts(){

    return(
        <div className="Accounts">
            <div className="TransactionHistory">
                <div className="Balance">
                    <div className="TotalDebt">
                    <p className="Debt-label">Total Debt</p>
                    <p className="Amt"> Rs. 20000</p>
                    </div>
                    <div className = "TotalCredit">
                        <p className="Debt-label">Total Credit</p>
                        <p className="Amt"> Rs. 20000</p>
                    </div>
                </div>

                <div className="Transaction-details">
                    <p className="trans-date">12/Apr/23</p>
                    <ul className="trans-list trans-list1">
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                    </ul>

                    <p className="trans-date">11/May/23</p>
                    <ul className="trans-list trans-list2">
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                    </ul>

                    <p className="trans-date">11/May/23</p>
                    <ul className="trans-list trans-list2">
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                    </ul>

                    <p className="trans-date">11/May/23</p>
                    <ul className="trans-list trans-list2">
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                    </ul>

                    <p className="trans-date">11/May/23</p>
                    <ul className="trans-list trans-list2">
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                        <li className="trans-list-item"><div className="TransText">Funds Transfer 12456787 from HBL 12345 to HBL 2345566 </div><p className="li-amt Amt"> Rs. 20000</p></li>
                    </ul>

                </div>
                <div className="O-C-balance">
                    <div className="O-balance">
                    <p className="OB-label Debt-label">Opening Balance</p>
                    <p className="OB-Amt Amt"> Rs. 20000</p>
                    </div>
                    <div className = "C-balance">
                        <p className="CB-label Debt-label">Closing Balance</p>
                        <p className="OB-Amt Amt"> Rs. 20000</p>
                    </div>
                </div>
    
            </div>

            <div className="HistoryDetails">
                <div className="ProfileInfo">
                    <p className="person-label">Person Name</p>
                    <p className="details">50409433049304 | Name | Branch</p>
                </div>
                <div className="FindHistory">
                    <div className="B-name">
                        <span>Branch Name</span>
                        <span>Wapda Town</span>
                    </div>
                    <div className="Currency">
                        <span>Currency</span>
                        <span>Pkr</span>
                    </div>
                    <div className="Avail-bal">
                        <span>Available Balance</span>
                        <span>2002</span>
                    </div>
                    <div className="Cur-bal">
                        <span>Current Balance</span>
                        <span>2002</span>
                    </div>
                    
                    <br></br>
                    <span>From Date</span>
                    <br></br>
                    <input type="date" className="Date-Input"></input>
                    <br></br>
                    <br></br>
                    <span>To Date</span>
                    <br></br>
                    <input type="date"  className="Date-Input"></input>
                    <br></br>
                    <br></br>
                    <span>No of Days</span>
                    <br></br>
                    <input type="number"  className="Date-Input"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="button-container">
                        <btn className="btns D-btn">Download</btn>
                        <btn className="btns P-btn">Generate</btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accounts;