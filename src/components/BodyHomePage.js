import graph from "../resources/graph.svg"
import React, { useState } from 'react';
function BodyHomePage() {

    const ads = [
        {imgLink: "https://autodeals.pk/blog/wp-content/uploads/2023/03/Rolls-Royce-unveils-The-Wraith-Black-Arrow-V-12-Coupe-Model.jpg", per: "5%", name: "Rolls Royce"},
        {imgLink: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/126864-zfwymgwgcj-1567691366.jpeg", per: "15%", name: "Dior"},
        {imgLink: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4d1a4058093051.59ef630403100.png", per: "10%", name: "Mercedes Benz"},
        {imgLink: "https://robbreport.com/wp-content/uploads/2021/04/PP5236PII.jpg", per: "5%", name: "Patek Philippe"},
        {imgLink: "https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/262542030_10158782435019075_2828094903355745012_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=d2Y088BwG7gAX8CQDic&_nc_ht=scontent.flhe13-1.fna&oh=00_AfDsu9QIqWzo1nR0ZSCFOvEEmZJDKNYEvGjQNbI2GFuchg&oe=6466DA3B", per: "25%", name: "Khaadi"},
        {imgLink: "https://i.ytimg.com/vi/iCPOpGa4mKY/maxresdefault.jpg", per: "12%", name: "Louis Vuitton"},
        {imgLink: "https://i.insider.com/53aaf6ba69beddf754c768a8?width=1000&format=jpeg&auto=webp", per: "20%", name: "L'oreal Paris"},
        {imgLink: "https://theimpression.com/wp-content/uploads/2021/08/Saint-Laurent-denim-zoe-kravitz-fall-2021-ad-campaign-film-poster-the-impression-001.jpg", per: "15%", name: "Saint Laurent"},
        {imgLink: "https://i.pinimg.com/originals/51/c2/63/51c263720725e23ef8a637beecdca6d2.jpg", per: "20%", name: "Christian Louboutin"},
        {imgLink: "https://i.ytimg.com/vi/V8x3ais9nes/maxresdefault.jpg", per: "25%", name: "MacBook Pro"},
        {imgLink: "https://pbs.twimg.com/media/EwDu7RlWEA0CaAa.jpg", per: "20%", name: "JafferJees"},
    ]

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedAds = showAll ? ads : ads.slice(0, 3);
    const buttonText = showAll ? 'See Less' : 'See More';

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
                            {displayedAds.map((k) => (
                                <li className="offer" key={k.name}>
                                <img src={k.imgLink} alt="discount" className="discount-svg" />
                                <div className="discount-txt">{k.per} at {k.name}</div>
                                </li>
                            ))}
                            {ads.length > 3 && (
                                <div className="b-l-btns">
                                <button className="btns b-l-seemore" onClick={toggleShowAll}>{buttonText}</button>
                                </div>
                            )}
                        </ul>
                    </div>                    
                </div>
                <div className="left-side">
                    <div className="acc-balance"><p>Rs. 50,789.00</p></div>
                    <img className="graph-svg" src={graph} alt="graph" />
                </div>
            </div>
        </>
    )
}

export default BodyHomePage;