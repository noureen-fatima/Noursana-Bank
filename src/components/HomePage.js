import BodyHomePage from "./BodyHomePage.js"
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import React from 'react';
function HomePage(){
    return(
        <>
            <Header />
            <Sidebar />
            <BodyHomePage />
        </>
    )
}

export default HomePage;