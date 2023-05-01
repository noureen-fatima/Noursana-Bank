import Accounts from "./Accounts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from 'react';
function AccountsPg(){
    return(
        <>
        <Header/>
        <Sidebar/>
        <Accounts/>
        </>

    );
}

export default AccountsPg;