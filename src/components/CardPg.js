import React from 'react';
import Cards from "./cards";
import Header from "./Header";
import Sidebar from "./Sidebar";
function CardPg(){
    return(
        <>
        <Header/>
        <Sidebar/>
        <Cards/>
        </>

    );
}

export default CardPg;