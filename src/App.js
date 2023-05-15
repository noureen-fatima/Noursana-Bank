import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AccountsPg from './components/AccountsPg';
import SendMoneyPg from './components/SendMoneyPg';
import BManagePg from './components/B-Manage-Pg';
import LoanPg from './components/LoanPg'; 
import QrPg from './components/Qr-page';
import CardPg from './components/CardPg';
import FaqPg from './components/FaqPg';
import HomePage from './components/HomePage';
import SignIn from './components/LoginSignup';
import MapsPg from './components/MapsPg';
function App() {
  return(
    <>

    <BrowserRouter>
    <Routes>
        <Route exact path = "/" element = {<SignIn/>}></Route>
        <Route path = "/welcome" element = {<HomePage/>}></Route>
        <Route path = "/accounts" element = {<AccountsPg/>}></Route>
        <Route path = "/sendmoney" element = {<SendMoneyPg/>}></Route>
        <Route path = "/faqs" element = {<FaqPg/>}></Route>
        <Route path = "/benefactory" element = {<BManagePg/>}></Route>
        <Route path = "/loan" element = {<LoanPg/>}></Route>
        <Route path = "/qr" element = {<QrPg/>}></Route>
        <Route path = "/cards" element = {<CardPg/>}></Route>
        <Route path = "/ATM" element = {<MapsPg/>}></Route>


    </Routes>
    </BrowserRouter>
      
    </>   
  );
 }
export default App;
