function DiscountOffer({ offer, index}) {
    return (
        <div>
            <li key={index}>
                <div>
                    <h3>{listItem.name}</h3>
                    <h4>{listItem.country}</h4>
                    <h4>{listItem.web_pages}</h4>
                </div>
            </li>
        </div>
    )
}

export default ListItem;