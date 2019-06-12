import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './component/user/signin';
import Signup from './component/user/signup';
import AddCustomer from './component/customer/add';
import AddAccountBank from './component/accountbank/add';
import ListAccountBank from './component/accountbank/list';
import ListCustomer from './component/customer/list';
import AddBill from './component/bill/add';
import ListBill from './component/bill/list';
import Main from './layout/main';
import ComtentList from './layout/content_index';
import { BrowserRouter as Router, Route } from "react-router-dom";
const routing = (
  <Router>
    <div>
      <Main />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/customer/add" component={AddCustomer} />
      <Route path="/accountbank-add" component={AddAccountBank} />
      <Route path="/accountbank" component={ListAccountBank} />
      <Route path="/customer-list/" component={ListCustomer} />
      <Route path="/bill-add" component={AddBill} />
      <Route path="/bill-list" component={ListBill} />
      <Route path="/index" component={ComtentList} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
