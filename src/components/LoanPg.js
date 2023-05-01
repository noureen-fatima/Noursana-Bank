import Loan from "./loan";
import Header from "./Header";
import Sidebar from "./Sidebar";
import React from 'react';
function LoanPg(){
    return(
        <>
        <Header/>
        <Sidebar/>
        <Loan/>
        </>

    );
}

export default LoanPg;