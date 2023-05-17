import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { makeApiRequest } from '../api/api';

function BodyHomePage() {
    const [transactions, setTransactions] = useState([]);
    const [closingBalance, setClosingBalance] = useState(0);
    const [lastLogIn, setLastLogin] = useState(Date);
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState({ bankData: {} });

    useEffect(() => {
        const fetchTransactions = async () => {
        try {
            const url = '/transactionData';
            const method = 'GET';
            const body = {};
            const response = await makeApiRequest(url, method, body);
            setTransactions(response.data);
            setClosingBalance(response.data[response.data.length - 1].bal);
        } catch (error) {
            console.error(error);
        }
        };

        const fetchCurrUser = async () => {
            try{
                const url = '/CurrentUser';
                const method = 'GET';
                const body = {};
                const response = await makeApiRequest(url, method, body);
                console.log("current user", response);
                setLastLogin(response.data.u[0].updatedAt);
                setCurrentUser(response.data.u[0].currentUser);
            
            } catch (error){
                console.error(error);
            }
        };

        fetchTransactions();
        fetchCurrUser();
    }, []);

    const chartData = {
        labels: transactions.map((transaction) => transaction.timestamp),
        datasets: [
        {
            label: 'Balance',
            data: transactions.map((transaction) => transaction.bal),
            fill: false,
            borderColor: 'rgba(216, 174, 94, 1)', // Single color for the border
            pointBackgroundColor: 'rgba(231, 212, 158, 1)', // Single color for the point background
            pointBorderColor: 'rgba(231, 212, 158, 1)', // Single color for the point border
            pointHoverBackgroundColor: 'rgba(231, 212, 158, 1)', // Single color for the point hover background
            pointHoverBorderColor: 'rgba(231, 212, 158, 1)', // Single color for the point hover border
            tension: 0.3,
        },
        ],
    };

    // Define the gradient colors for the line chart
    const gradientColors = [
        { offset: '0%', color: '#D8AE5E' },
        { offset: '100%', color: '#E7D49E' },
    ];

    // Create a linear gradient fill for the line chart
    const gradientFill = (canvas) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradientColors.forEach((color) => {
        gradient.addColorStop(color.offset, color.color);
        });
        return gradient;
    };

    const chartOptions = {
        plugins: {
        legend: {
            display: false,
        },
        },
        scales: {
        x: {
            ticks: {
            color: '#000000',
            },
        },
        y: {
            ticks: {
            color: '#000000',
            },
        },
        },
        elements: {
        line: {
            borderColor: gradientFill, // Use the gradient fill for the line border color
            borderWidth: 2,
            pointRadius: 4,
            pointBorderWidth: 2,
            pointBackgroundColor: gradientFill, // Use the gradient fill for the point background color
            pointBorderColor: gradientFill, // Use the gradient fill for the point border color
            pointHoverRadius: 6,
            pointHoverBorderWidth: 2,
            pointHoverBackgroundColor: gradientFill, // Use the gradient fill for the point hover background color
            pointHoverBorderColor: gradientFill, // Use the gradient fill for the point hover border color
        },
        },
    };

    
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
                    <div className="acc-balance"><p>Rs. {closingBalance.toFixed(2)}</p></div>
                    <Line data={chartData} />
                    <p>Last Log In: {lastLogIn}</p>
                </div>
            </div>
        </>
    );
};

export default BodyHomePage;