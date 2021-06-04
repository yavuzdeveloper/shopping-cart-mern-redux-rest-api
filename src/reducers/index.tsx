import { data } from "../data";
//import { applyMiddleware, createStore } from "redux";
import { Book,  CartModel, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART, DECREASE_CART, ListAction } from '../types';
// import { useEffect, useState } from "react";
// import { getProducts } from "../util/APIUtils";
// import axios from "axios";
// import thunk from "redux-thunk";


export interface ReducerState { 
    cart: CartModel, 
    books: Book[]
}

export const INITIAL_STATE: ReducerState = {
    books: data,
    cart: {items: []}
}

// export default function Api() {
//     const [dataApi, setDataApi] = useState([]as Book[]);

//     useEffect(() => { 
//         axios
//             .get("https://restcountries.eu/rest/v2/all")
//             .then(response => setDataApi(response.data))
//             .catch(error => console.log({ error }));
//         console.log("DATA:", dataApi);
// }, [])
// }




export const  reducer = (
    state: ReducerState = INITIAL_STATE,
    action: ListAction
): ReducerState => {
    let items = state.cart.items;
    switch (action.type) {
        case ADD_TO_CART:  
            const addBook = items.find(item => item.book.id === action.payload.id) 
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
            items.map(item => item.book.id === action.payload.id 
                    ? item.count = item.count + 1 : item )
            return {
                ...state,
                cart: {items}
            }

        case DECREASE_CART:
            const decreaseBook = items.find(item => item.book.id === action.payload.id)
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
            const itemToRemove = items.filter(item => item.book.id !== action.payload.id) 
            return {
                ...state,
                cart: {items:itemToRemove}
            }
        default:
            return state;
    }
};

// export const store = createStore(reducer, applyMiddleware(thunk));