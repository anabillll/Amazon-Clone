import React, { useEffect, useState }from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import { Checkbox } from '@material-ui/core';
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {

  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
        <Header />
        <Checkout />
       </Route>
       <Route path="/login">
        <Login />
       </Route>
       <Route path="/">
       <Header />
        <Home />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App