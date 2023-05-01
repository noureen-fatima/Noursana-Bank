import DiscountOffer from "./DiscountOffer"
import React from 'react';
function Discounts({offers}) {
  return (
    <div>
        <ul>
            {offers.map((offer, index) => (
                <DiscountOffer offer={offer} key={index} index={index} />
            ))}
        </ul>
    </div>
  )
}

export default Discounts;