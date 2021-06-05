
import './App.css';
import Products from './Products';
import Cart from './Cart';
import { Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Book } from './types';
// import { useDispatch } from 'react-redux';
// import { getBooks } from './actions';



const App = (props:any) => {
 



  return (
    <div className="App">
      <header className="App-header">
        <h3>Shopping Cart with Redux-api
          <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="shopping cart with react"
          />
          <img
          src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          alt="shopping cart with redux"
          />
           <img
          src="https://sdtimes.com/wp-content/uploads/2018/09/1_JsyV8lXMuTbRVLQ2FPYWAg-490x490.png"
          alt="shopping cart typescript"
          />   
        </h3>
      </header>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;