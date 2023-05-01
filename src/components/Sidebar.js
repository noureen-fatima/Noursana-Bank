import accounts from "../resources/accounts.svg"
import credit from "../resources/credit-cards.svg"
import sendcash from "../resources/send-money.svg"
import scanQR from "../resources/qr-code.svg"
import loan from "../resources/loan-apply.svg"
import beneficiary from "../resources/profile-setting.svg"
import atm from "../resources/atm-location.svg"
import faq from "../resources/faq.svg"
import React from 'react';
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <>
            <div className="sidebar-bg">
                <Link to = "/accounts">
                <img className="accounts-svg" src={accounts} alt="Accounts" title="Accounts" />
                </Link>

                <Link to = "/cards">
                <img className="cards-svg" src={credit} alt="Credits" title="Cards" />
                </Link>

                <Link to = "/sendmoney">
                <img className="send-money-svg" src={sendcash} alt="send money" title="Send Money" />
                </Link>
                
                <Link to = "/qr">
                <img className="scan-qr-svg" src={scanQR} alt="scan QR" title = "QR Request"/>
                </Link>
                

                <Link to="/loan">
                <img className="loan-apply-svg" src={loan} alt="apply loan" title = "Apply for loan" />
                </Link>
                

                <Link to = "/benefactory">
                <img className="beneficiary-svg" src={beneficiary} alt="beneficiary management" title="Benefactory" />
                </Link>
                
                <Link to = "/">
                <img className="atm-near-me-svg" src={atm} alt="atm location" title="Nearby Atm" />
                </Link>
                

                <Link to = "/faqs">
                <img className="faq-svg" src={faq} alt="faq" />
                </Link>
                
            </div>
        </>
    )
}

export default Sidebar;