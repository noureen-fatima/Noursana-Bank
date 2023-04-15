import dis from "../resources/discount.svg"
import graph from "../resources/graph.svg"

function BodyHomePage() {
    return(
        <>
            <div className="home-page-body-bg">
                <div className="right-side">
                    <div className="welcome-user-txt"><p>Welcome, User</p></div>
                    <div className="discounts">
                        <div className="latest-offers-heading">
                            Latest Offers
                        </div>
                        <ul className="offer-list">
                            <li className="offer">
                                <img src={dis} alt="discount" className="discount-svg" />
                                <div className="discount-txt">50% OFF on this stuff</div>
                                <div className="b-l-btns"><button className="btns b-l-deets">Details</button></div>
                            </li>

                            <li className="offer">
                                <img src={dis} alt="discount" className="discount-svg" />
                                <div className="discount-txt">50% OFF on this stuff</div>
                                <div className="b-l-btns"><button className="btns b-l-deets">Details</button></div>
                            </li>

                            <li className="offer">
                                <img src={dis} alt="discount" className="discount-svg" />
                                <div className="discount-txt">50% OFF on this stuff</div>
                                <div className="b-l-btns"><button className="btns b-l-deets">Details</button></div>
                            </li>

                            <li className="offer">
                                <img src={dis} alt="discount" className="discount-svg" />
                                <div className="discount-txt">50% OFF on this stuff</div>
                                <div className="b-l-btns"><button className="btns b-l-deets">Details</button></div>
                            </li>

                            <li className="offer">
                                <img src={dis} alt="discount" className="discount-svg" />
                                <div className="discount-txt">50% OFF on this stuff</div>
                                <div className="b-l-btns"><button className="btns b-l-deets">Details</button></div>
                            </li>

                            <li className="offer">
                                <img src={dis} alt="discount" className="discount-svg" />
                                <div className="discount-txt">50% OFF on this stuff</div>
                                <div className="b-l-btns"><button className="btns b-l-deets">Details</button></div>
                            </li>

                            <div className="b-l-btns"><button className="btns b-l-seemore">See More</button></div>
                        </ul>
                    </div>                    
                </div>
                <div className="left-side">
                    <div className="acc-balance"><p>Rs. 50,789.00</p></div>
                    <img className="graph-svg" src={graph} alt="graph" />
                </div>
                    <div className="welcome-user-txt">Welcome, User</div>
                    
                </div>
                
                <div className="acc-balance">Rs. 50,789.00</div>
            </div>
        </>
    )
}

export default BodyHomePage;