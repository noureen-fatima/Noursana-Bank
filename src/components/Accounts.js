import React, { useEffect, useState } from 'react';
import { makeApiRequest } from '../api/api';

function Accounts() {
    const [transactions, setTransactions] = useState([]);
    const [openingBalance, setOpeningBalance] = useState('');
    const [closingBalance, setClosingBalance] = useState('');

    useEffect(() => {
        // Fetch transaction data from the API
        const fetchTransactions = async () => {
            try {
                const url = '/transactionData';
                const method = 'GET';
                const body = {};
                const response = await makeApiRequest(url, method, body);
                setTransactions(response.data);

                if (response.data.length > 0) {
                    const firstTransaction = response.data[0];
                    const openingBal = firstTransaction.bal + (firstTransaction.amount % 2 === 0 ? Math.abs(firstTransaction.amount) : -Math.abs(firstTransaction.amount));
                    setOpeningBalance(openingBal);

                    const lastTransaction = response.data[response.data.length - 1];
                    const closingBal = lastTransaction.bal;
                    setClosingBalance(closingBal);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchTransactions();
    }, []);

    return(
        <div className="Accounts">
            <div className="TransactionHistory">
                <div className="Balance">
                    <div className = "TotalCredit">
                        <p className="Debt-label">Balance</p>
                        <p className="Amt"> Rs. {closingBalance}</p>
                    </div>
                </div>
            {transactions.slice().reverse().map((transaction) => (
                <div key={transaction.transid}>
                    <p className="trans-date">{transaction.timestamp}</p>
                    <ul className="trans-list">
                    <li className="trans-list-item">
                        <div className="TransText">
                        Funds Transfer from {transaction.senderName} ({transaction.senderAccNo}) to {transaction.recipientName} ({transaction.recipientAccNo})
                        </div>
                        <p className="li-amt Amt">Rs. {transaction.amount}</p>
                    </li>
                    </ul>
                </div>
            ))}
                <div className="O-C-balance">
                    <div className="O-balance">
                        <p className="OB-label Debt-label">Opening Balance</p>
                        <p className="OB-Amt Amt"> Rs. {openingBalance}</p>
                    </div>
                    <div className="C-balance">
                        <p className="CB-label Debt-label">Closing Balance</p>
                        <p className="OB-Amt Amt"> Rs. {closingBalance}</p>
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