import React, { useState, useEffect } from 'react';
import profileLabel from "../resources/profile-label.svg";
import { makeApiRequest } from '../api/api';

function SendMoney() {
  const [showAddBeneficiary, setShowAddBeneficiary] = useState(false);
  const [accountNumber, setAccountNumber] = useState(0);
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [benies, setBenies] = useState([]);
  const [acc, setAcc] = useState(0);
  const [amountToSend, setAmountToSend] = useState('');

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
  }, []);

  const handleAddBeneficiary = () => {
    setShowAddBeneficiary(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postBene = async () => {
      try {
        const url = '/addBeneficiary';
        const method = 'POST';
        const body = {
          senderAccountNumber: acc,
          beneficiaryName: beneficiaryName,
          beneficiaryAccountNumber: accountNumber,
        };
        const response = await makeApiRequest(url, method, body);
        setShowAddBeneficiary(false);
        setAccountNumber('');
        setBeneficiaryName('');
        alert('Beneficiary Added');
        return response;
      } catch (error) {
        console.error(error);
      }
    };

    postBene();
  };

  const handleBeneficiaryClick = (accountNumber) => {
    setAccountNumber(accountNumber);
  };

  const transaction = async () => {
    try {
      const url = '/transaction';
      const method = 'POST';
      const body = {
        senderAccNo: acc,
        recipientAccNo: accountNumber,
        amount: amountToSend,
      };
      const response = await makeApiRequest(url, method, body);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="SendMoney">
        <h2>Send Money</h2>
        <div className="from-acc">
          <label htmlFor="input-from-acc">From Account</label>
          <input
            className="input-from-acc"
            type="text"
            id="input-from-acc"
            placeholder={acc}
            value={acc}
          ></input>
        </div>

        <div className="to-acc">
          <label htmlFor="input-to-acc">To Account</label>
          <input
            className="input-to-acc"
            type="text"
            id="input-to-acc"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          ></input>
        </div>

        <div className="amt-to-send">
          <label htmlFor="amt-send-input">Amount</label>
          <input
            className="amt          -send-input"
            type="text"
            id="amt-send-input"
            value={amountToSend}
            onChange={(e) => setAmountToSend(e.target.value)}
          ></input>
        </div>

        <br />
        <button className="btns send-btn" onClick={transaction}>
          Send
        </button>
      </div>

      <div className="b-l-super">
        <h2 className="b-heading">Beneficiary List</h2>
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
            <button className="btns b-l-add" type="submit">
              Submit
            </button>
          </form>
        )}

        <ul className="b-ulist">
          {benies.map((b) => (
            <li
              key={b.accountNumber}
              className="b-list-item"
              onClick={() => handleBeneficiaryClick(b.accountNumber)}
            >
              <img
                className="profile-svg"
                src={profileLabel}
                alt="Accounts"
              />
              <div className="B-list-item">{b.name}</div>
              <div className="B-list-acc">{b.accountNumber}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SendMoney;

