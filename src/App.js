import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useEffect, useState } from "react"; 
import axios from "axios"

import HomeScreen from "./screen/HomeScreen"
import ItemDetail from "./screen/ItemDetailScreen"
import ItemBuy from "./screen/ItemBuyScreen"
import Menu from "./container/MenuContainer"
import { Provider } from "react-redux";
import store from "./redux/cart/HeaderStore"
import ItemStore from './redux/items/ItemStore';


axios.defaults.baseURL = "http://127.0.0.1:3000"
axios.defaults.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
}

function App() {

  return(
    <div className="p-0 m-0">
        <Router>
            <Provider store={store}>
              <Menu className="m-0"/>
            </Provider>
            <Switch>
                <Provider store={ItemStore}>
                  <Route path="/" exact component={HomeScreen} />

                  <Route path="/details/:collection" component={ItemDetail} />

                  <Route path="/collections/:type/:anotherName" component={ItemBuy} />
                </Provider>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
