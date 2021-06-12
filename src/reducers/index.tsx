//import { data } from "../data";
//import { applyMiddleware, createStore } from "redux";
import { Book,  CartModel, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART, DECREASE_CART, 
    ListAction, GET_BOOKS, GET_BOOKS_FROM_CART, CartItem, ADDCART } from '../types';
import { useEffect, useState } from "react";
// import { getProducts } from "../util/APIUtils";
// import axios from "axios";
// import thunk from "redux-thunk";
//import { getBooks } from '../actions/index';


// export default function Api() {
//     const [bookList, setBookList] = useState([]as Book[]);

//     useEffect(() => { 
//      fetch("http://localhost:8080/books")
//         .then(response => {           console.log("RESULT:", response)
//           return response.json();
//         }).then(data => {         
//           setBookList(data);
//         })
// }, [])
// }

export interface ReducerState { 
    cart: CartModel, 
    books: Book[]
}

// const [bookList, SetBookList] = useState([] as Book[]);

export const INITIAL_STATE: ReducerState = {
    //books: data,
    books: [],
    cart: {items: []},
}



export const  reducer = (
    state: ReducerState = INITIAL_STATE,
    action: ListAction
): ReducerState => {
    let items = state.cart.items;
    switch (action.type) {

        

        case GET_BOOKS:     
          console.log("REDUCER action.Payload:", action.payload);            
        //let Books : Book[] = [];        
        //Books.push(action.payload); 
        //console.log("Books[0]:", Books[0]);   
        //const array: Book[] = [...Book, ]
        // return { ...state, 
        //     books: [...state.books, action.payload] 
        // } 


       // return { ...state, books: [...state.books, ...Books]  }
          return { ...state, books: action.payload} 
           
            // return { ...state, 
            //     books: [...state.books, action.payload]
            // };
           
             // console.log("CC", state.books[0]);
          
            // console.log("STATE.BOOKS:", state.books);
            //return state;        



        case GET_BOOKS_FROM_CART:   //console.log("BB222:", action.payload);   
// let Items : CartItem[] = [];
// Items.push(action.payload);
// return {...state,
//     cart: {items:Items}   
// }; 
 return state;

// case ADDCART :  console.log("ADDCART:",action.payload.price);
// return {...state,
//     cart: {...state.cart,
//         items:  [...state.cart.items, 
//             { count: 1, book: action.payload }
//     ]} 
// }; 

//return state;







        case ADDCART : console.log("ADD-reducers:",action.payload);
        //case ADD_TO_CART:  console.log("ADD:",action.payload);
            const addBook = items.find(item => item.book._id === action.payload._id) 
            if(addBook){
                addBook.count = addBook.count + 1; 
            }else{ 
                items.push({ count:1, book:action.payload }); 
            }  
        return {
            ...state,
                cart: {items}
        }
  
        case INCREASE_CART: 
            items.map(item => item.book._id === action.payload._id 
                    ? item.count = item.count + 1 : item )
            return {
                ...state,
                cart: {items}
            }

        case DECREASE_CART:
            const decreaseBook = items.find(item => item.book._id === action.payload._id)
            if(decreaseBook){ 
                if(decreaseBook.count > 1){
                    decreaseBook.count = decreaseBook.count - 1 
                } else {
                    decreaseBook.count = 1  
                }    
            }  
            return {
                ...state,
                cart: {items}
            }
            
        case REMOVE_FROM_CART:
            const itemToRemove = items.filter(item => item.book._id !== action.payload._id) 
            return {
                ...state,
                cart: {items:itemToRemove}
            }
        default:
            return state;
    }
};



// export const store = createStore(reducer, applyMiddleware(thunk));