
import './App.css';
import Products from './Products';
import Cart from './Cart';
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from './types';
import { useDispatch } from 'react-redux';
import { getBooks } from './actions';



const App = (props:any) => {
   const [dataApi, setDataApi] = useState([]as Book[]);

   const dispatch = useDispatch();

    useEffect(() => { 
        // axios
        //     // .get("https://restcountries.eu/rest/v2/all")
        //     .get("http://localhost:8080/books")
        //     .then(response => {console.log("DATA:", response)
        //       setDataApi(response.data)
        //     }
        //       )
        //     .catch(error => console.log({ error }));

      // fetch("http://localhost:8080/books")
      //   .then(result => {
      //     return result.json();
      //   }).then(data => {
      //     console.log("DATA:",data);
      //   })
        dispatch(getBooks());
}, [])



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