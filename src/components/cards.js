import React, { useState } from 'react';
import card from '../resources/cards.svg';


function Cards() {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [isCardBlocked, setIsCardBlocked] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [cardType, setCardType] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [cardNo, setCardNo] = useState(123456);
  const[PIN, setPIN]= useState(1111);

  const handleViewDetails = () => {
    setShowCardDetails(true);
  };

  const handleManageCard = () => {
    setIsCardBlocked(!isCardBlocked);
  };

  const handleApplyCard = () => {
    setShowApplyForm(true);
  };

  const handleCardTypeChange = (e) => {
    setCardType(e.target.value);
  };

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Handle the form submission and perform necessary actions
    console.log('Card Type:', cardType);
    console.log('Selected Card:', selectedCard);
  };

  return (
    <div className="Card-Info">
      <div className="card-details-container">
        <h1>Cards</h1>
        <div className="card-details">
          <img src={card} alt="card" />

          <div className="c-btns">
            <button className="cardbtns btns c-det-btn" onClick={handleViewDetails}>
              View Details
            </button>
            <button className="cardbtns btns c-manage-btn" onClick={handleManageCard}>
              {isCardBlocked ? 'Unblock' : 'Block'}
            </button>
            <button className="cardbtns btns apply-card-btn" onClick={handleApplyCard}>
              Apply
            </button>
          </div>
        </div>

        {showCardDetails && (
          <div className="card-details-info">
            <p>Card Number: {cardNo}</p>
            <p>PIN: {PIN}</p>
          </div>
        )}

        {showApplyForm && (
          <div className="apply-card-container">
            <div className="apply-card">
              <form className="card-application" onSubmit={handleSubmitApplication}>
                <div className="form-group">
                  <h2>Apply for a Card</h2>
                </div>

                <div className="form-group">
                  <label htmlFor="card-type">Card Type:</label>
                  <select id="card-type" value={cardType} onChange={handleCardTypeChange}>
                    <option value="">Select card type</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="card-options">Card Options:</label>
                  <div id="card-options" className="card-options">
                    <label htmlFor="mastercard">
                      <input
                        type="radio"
                        id="mastercard"
                        name="card"
                        value="mastercard"
                        checked={selectedCard === 'mastercard'}
                        onChange={() => handleCardSelection('mastercard')}
                      />
                      Mastercard
                    </label>
                    <label htmlFor="visa">
                      <input
                        type="radio"
                        id="visa"
                        name="card"
                        value="visa"
                        checked={selectedCard === 'visa'}
                        onChange={() => handleCardSelection('visa')}
                      />
                      Visa Card
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="cardbtns btns submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
