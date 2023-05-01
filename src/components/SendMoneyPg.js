import SendMoney from "./SendMoney";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BeneList from "./B-list";
import React from 'react';
function SendMoneyPg(){
    return(
        <>
        <Header/>
        <SendMoney/>
        <BeneList/>
        <Sidebar/>
        </>

    );
}

export default SendMoneyPg;