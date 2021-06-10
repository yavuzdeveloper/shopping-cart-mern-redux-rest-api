import axios from 'axios';
// import { request } from 'node:https';
import { Book, ADD_TO_CART, REMOVE_FROM_CART, DECREASE_CART, INCREASE_CART, 
    GET_BOOKS, GET_BOOKS_FROM_CART, ADDCART } from '../types';
import { api, addBookCart } from "../util/APIUtils";



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
export const getBooks = () => (dispatch:any) => { 
    fetch("http://localhost:8080/books")
        .then(response => {          //console.log("RESPONSE-getBooks:",response);
           return response.json();          
        }).then(data => {            //console.log("DATA-getBooks:",data);
            dispatch({
                type: GET_BOOKS, 
                payload: data 
            });
        })
        .catch((error) => { console.log(error.message) });
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

export const addBookToCart = (book:Book) => async (dispatch:any) => {  
    // alert(book._id);

//     const selectedBook =  state.cart.items.find(item => item.book._id === book._id);
// if(selectedBook){
// selectedBook.count = selectedBook.count + 1;
// } else {
//     items.push({ count:1, book:action.payload });
// }




    // axios.post('http://localhost:8080/cart/add', book)
    //   .then(response => {          //console.log("RESPONSE-getBooks:",response);
    //        return response       
    //     }).then(data => {  console.log("RES.DATA:",data )         //console.log("DATA-getBooksFROMCART:", data);
    //         dispatch({
    //             type: ADDCART, 
    //             payload: data 
    //         });
    //     })
    //     .catch(() => {
    //         dispatch({
    //             type: "ERROR",
    //             payload: "Error add book from cart", 
    //         });
    //     });
        
    //     //
    


//api;******
const url = 'http://localhost:8080/cart/add';
const addBook = (book:Book) => axios.post(url, book); 

try {
    const  data  = await addBook(book); console.log("DATA:",data.config.data.name);
    //console.log("book", book);          
    dispatch({ type: ADDCART, payload: data.config.data });
} catch (error) {
    console.log(error.message);
  }
//**********







// axios.create({ 
//         url:'http://localhost:8080',
//     })
//     .post(`/cart`)
//     .then(response => {     alert("then");         //console.log("RESPONSE-getBooks:",response);
//            return response         
//         }).then(data => {            //console.log("DATA-getBooksFROMCART:", data);
//             dispatch({
//                 type: GET_BOOKS_FROM_CART, 
//                 payload: data 
//             });
//         })
//         .catch(() => { alert("error");
//             dispatch({
//                 type: "ERROR",
//                 payload: "Error getting books from cart", 
//             });
//         });
 

}
