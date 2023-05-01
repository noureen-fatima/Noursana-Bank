import React from 'react';
import card from "../resources/cards.svg"
function Cards(){
    return(
        <div className="Card-Info">
            <h1>Cards</h1>
            <div className="card-details">
                <img src = {card} alt = "card"></img>
            </div>
            <div className="c-btns">
                <button className = "btns c-det-btn">View Details</button>
                <button className = "btns c-manage-btn">Manage Cards</button>
            </div>
        </div>
    );
}

export default Cards;