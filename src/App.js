import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AccountsPg from './components/AccountsPg';
import SendMoneyPg from './components/SendMoneyPg';
import BManagePg from './components/B-Manage-Pg';
import LoanPg from './components/LoanPg'; 
import QrPg from './components/Qr-page';
import CardPg from './components/CardPg';
import FaqPg from './components/FaqPg';
import HomePage from './components/HomePage';
function App() {
  return(
    <>

    <BrowserRouter>
    <Switch>
        <Route exact path = "/" component = {HomePage}></Route>
        <Route path = "/accounts" component = {AccountsPg}></Route>
        <Route path = "/sendmoney" component = {SendMoneyPg}></Route>
        <Route path = "/faqs" component = {FaqPg}></Route>
        <Route path = "/benefactory" component = {BManagePg}></Route>
        <Route path = "/loan" component = {LoanPg}></Route>
        <Route path = "/qr" component = {QrPg}></Route>
        <Route path = "/cards" component = {CardPg}></Route>


    </Switch>
    </BrowserRouter>
      
    </>   
  );
 }
export default App;
