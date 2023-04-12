import accounts from "../resources/accounts.svg"
import credit from "../resources/credit-cards.svg"
import sendcash from "../resources/send-money.svg"
import scanQR from "../resources/qr-code.svg"
import loan from "../resources/loan-apply.svg"
import beneficiary from "../resources/profile-setting.svg"
import atm from "../resources/atm-location.svg"
import faq from "../resources/faq.svg"
function Sidebar(){
    return(
        <>
            <div className="sidebar-bg">
                <img className="accounts-svg" src={accounts} alt="Accounts" />
                <img className="cards-svg" src={credit} alt="Credits" />
                <img className="send-money-svg" src={sendcash} alt="send money" />
                <img className="scan-qr-svg" src={scanQR} alt="scan QR" />
                <img className="loan-apply-svg" src={loan} alt="apply loan" />
                <img className="beneficiary-svg" src={beneficiary} alt="beneficiary management" />
                <img className="atm-near-me-svg" src={atm} alt="atm location" />
                <img className="faq-svg" src={faq} alt="faq" />
            </div>
        </>
    )
}

export default Sidebar;