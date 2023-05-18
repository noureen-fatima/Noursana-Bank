import React, { useState, useEffect } from 'react';
import profileLabel from "../resources/profile-label.svg";
import { makeApiRequest } from '../api/api';

function BeneManage() {
  const [showAddBeneficiary, setShowAddBeneficiary] = useState(false);
  const [accountNumber, setAccountNumber] = useState(0);
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [benies, setBenies] = useState([]);
  const [acc, setAcc] = useState(0);

  useEffect(() => {
    const fetchAcc = async () => {
        try {
            const url = '/getAcc';
            const method = 'GET';
            const body = {};
            const response = await makeApiRequest(url, method, body);
            setAcc(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchBene = async () => {
    try {
        const url = '/getBeneCurr';
        const method = 'GET';
        const body = {};
        const response = await makeApiRequest(url, method, body);
        setBenies(response.data);
    } catch (error) {
        console.error(error);
    }
    };

    fetchBene();
    fetchAcc();

    });
  
  const handleAddBeneficiary = () => {
    setShowAddBeneficiary(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postBene = async () => {
        try {
            const url = '/addBeneficiary';
            const method = 'POST';
            const body = {"senderAccountNumber":acc, "beneficiaryName":beneficiaryName, "beneficiaryAccountNumber":accountNumber};
            console.log(acc, beneficiaryName, accountNumber);
            const response = await makeApiRequest(url, method, body);
            setShowAddBeneficiary(false);
            setAccountNumber('');
            setBeneficiaryName('');
            alert("Beneficiary Added");
            return response;
        } catch (error) {
            console.error(error);
        }
    };
    postBene();
}
    return(
        <>
        <div className="b-l-super">
        <h2 className="b-heading">Managing Beneficiary List</h2>
        <div className="b-l-btns">
          {!showAddBeneficiary && (
            <button className="btns b-l-add" onClick={handleAddBeneficiary}>
              Add
            </button>
          )}
        </div>

        {showAddBeneficiary && (
          <form className="add-beneficiary-form" onSubmit={handleSubmit}>
            <div className="add-beneficiary-inputs">
              <input
                type="number"
                placeholder="Account Number"
                className="amt-send-input"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.valueAsNumber)}
              />
              <input
                type="text"
                className="amt-send-input"
                placeholder="Name"
                value={beneficiaryName}
                onChange={(e) => setBeneficiaryName(e.target.value)}
              />
            </div>
            <button className="btns b-l-add" type="submit">Submit</button>
          </form>
        )}

                <ul className="b-ulist">
                    {benies.map((b) => (
                        <li className="b-list-item"><img className="profile-svg" src={profileLabel} alt="Accounts" /> <div className="B-list-item">{b.name}</div>
                        <div className="B-list-acc">{b.accountNumber}</div>
                        </li>
                    ))}
                </ul>
           </div>
           </>
    );

}

export default BeneManage;