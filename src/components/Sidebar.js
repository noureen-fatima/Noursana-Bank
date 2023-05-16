import accounts from "../resources/accounts.svg"
import credit from "../resources/credit-cards.svg"
import sendcash from "../resources/send-money.svg"
import scanQR from "../resources/qr-code.svg"
import loan from "../resources/loan-apply.svg"
import beneficiary from "../resources/profile-setting.svg"
import atm from "../resources/atm-location.svg"
import faq from "../resources/faq.svg"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeImage, setActiveImage] = useState("");

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <>
      <div className="sidebar-bg">
        <Link to="/accounts">
          <img
            className={`accounts-svg ${activeImage === "accounts" ? "active" : ""}`}
            src={accounts}
            alt="Accounts"
            title="Accounts"
            onClick={() => handleImageClick("accounts")}
          />
        </Link>

        <Link to="/cards">
          <img
            className={`cards-svg ${activeImage === "cards" ? "active" : ""}`}
            src={credit}
            alt="Credits"
            title="Cards"
            onClick={() => handleImageClick("cards")}
          />
        </Link>

        <Link to="/sendmoney">
          <img
            className={`send-money-svg ${activeImage === "sendmoney" ? "active" : ""}`}
            src={sendcash}
            alt="send money"
            title="Send Money"
            onClick={() => handleImageClick("sendmoney")}
          />
        </Link>

        <Link to="/qr">
          <img
            className={`scan-qr-svg ${activeImage === "qr" ? "active" : ""}`}
            src={scanQR}
            alt="scan QR"
            title="QR Request"
            onClick={() => handleImageClick("qr")}
          />
        </Link>

        <Link to="/loan">
          <img
            className={`loan-apply-svg ${activeImage === "loan" ? "active" : ""}`}
            src={loan}
            alt="apply loan"
            title="Apply for loan"
            onClick={() => handleImageClick("loan")}
          />
        </Link>

        <Link to="/benefactory">
          <img
            className={`beneficiary-svg ${activeImage === "beneficiary" ? "active" : ""}`}
            src={beneficiary}
            alt="beneficiary management"
            title="Benefactory"
            onClick={() => handleImageClick("beneficiary")}
          />
        </Link>

        <Link to="/ATM">
          <img
            className={`atm-near-me-svg ${activeImage === "atm" ? "active" : ""}`}
            src={atm}
            alt="atm location"
            title="Nearby Atm"
            onClick={() => handleImageClick("atm")}
          />
        </Link>

        <Link to="/faqs">
          <img
            className={`faq-svg ${activeImage === "faqs" ? "active" : ""}`}
            src={faq}
            alt="faq"
            onClick={() => handleImageClick("faqs")}
          />
        </Link>
      </div>
    </>
  )
}

export default Sidebar;
