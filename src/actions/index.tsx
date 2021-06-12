import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
// import { request } from 'node:https';
import { Book, ADD_TO_CART, REMOVE_FROM_CART, DECREASE_CART, INCREASE_CART, 
    GET_BOOKS, GET_BOOKS_FROM_CART, ADDCART } from '../types';
//import { api, addBookCart, insertBook } from "../util/APIUtils";




export const addToCart = (book:Book) => { 
    return { 
        type: ADD_TO_CART, 
        payload: book
    };
} 

export const removeFromCart = (book:Book) => { 
    return { 
        type: REMOVE_FROM_CART, 
        payload: book
    };
} 

export const increase = (book:Book) => {
    return {
        type: INCREASE_CART,
        payload: book
    }
}

export const decrease = (book:Book) => {
    return {
        type: DECREASE_CART,
        payload: book
    }
}
//******************************* 


    interface DispatchGetBooks  {
        type: string;
        payload: Book[];
    }

    export const getBooks = () => (dispatch:(arg:DispatchGetBooks) => (DispatchGetBooks)) => { 
        fetch("http://localhost:8080/books")
            .then(response => {          
            return response.json();      
            })
            .then((books: Book[]) => {
                dispatch({
                    type: GET_BOOKS, 
                    payload: books 
                });
            })
            .catch(error => { 
                console.log(error.message);
            });
    }


export const getBooksFromCart = () => (dispatch:any)=> { 
      fetch("http://localhost:8080/cart")
        .then(response => {          //console.log("RESPONSE-getBooks:",response);
           return response.json();          
        }).then(data => {            //console.log("DATA-getBooksFROMCART:", data);
            dispatch({
                type: GET_BOOKS_FROM_CART, 
                payload: data 
            });
        })
        .catch((error) => { console.log(error.message) });
}

//add yaparken eğer cart içinde selectedbook varsa onun count unu bir attırcaz yani sepetteki book u update yapcaz,
//eğer selectedook cart ta yoksa eklicez yani post yapcaz

export const addBookToCart = (book:Book) => async (dispatch:any) => {  console.log("");

//with axios;
    // axios
    //     .post('http://localhost:8080/cart', book)
    //     .then(response => {     console.log("RESPONSE-ADDBook:",response);
    //        dispatch({
    //             type: ADDCART, 
    //             payload: response
    //         });      
    //     })
    //     .catch((error) => { alert("catch.error")
    //         console.log(error.message) });    

//with try catch;
// const url = 'http://localhost:8080/cart';
// const addBook = (book:Book) => axios.post(url, book); 

// try {
//     const {data}   = await addBook(book);          console.log("DATA:", data);
//     //console.log("book", book);          
//     dispatch({ type: ADDCART, payload: data.config.data });
// } catch (error) {
//     console.log(error.message);
//   }
//**********

//with fetch:
// let addedBook = {
//     "name": book.name,
//     "author": book.author,
//     "price": book.price,
//     "image": book.price,
//     "count": 1
// }

// fetch('http://localhost:8080/cart', {
//     method:"POST",
//     headers: {"Content-type": "application/json"},
//     body: JSON.stringify(addedBook)
// }).then(r=>r.json()).then(res=> {         //console.log("RES:", res)
//       dispatch({ type: ADDCART, payload: res });
// }).catch((error)=> {
//     console.log(error.message);
// })
 
//update;
let addedBook = {
    "name": book.name,
    "author": book.author,
    "price": book.price,
    "image": book.price,
    //"count": count + 1,
    "count": 5
}
//const cartId = book._id; alert(cartId);
const cartId = "60c335bd33c03354884ac193";   //alert(cartId);
fetch(`http://localhost:8080/cart/${cartId}`, {
    method:"PATCH",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(addedBook)
}).then(r=>r.json()).then(res=> {         //console.log("RES:", res)
      dispatch({ type: ADDCART, payload: res });
}).catch((error)=> { alert("error");
    console.log(error.message);
})



}
