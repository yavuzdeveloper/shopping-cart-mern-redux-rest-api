import axios from "axios";
import { request } from "node:http";



export const baseURL = 'http://localhost:8080';

// export function getProducts() {
//     return request({
//         url: API_BASE_URL,
//         method: "GET"
//     });

// }

export function getProducts() {
    return request({
        url:baseURL +'/books',
        method: "GET"
    });
}

export function api() { // api().get("/posts");
    return axios.create({
        url:baseURL,
    });
}


export function addBookCart(book) { // api().get("/posts");
    return request({
        url:baseURL +'/cart/add',
        method: "POST",
        body: JSON.stringify(book)
    });
}

//insert;
const api = axios.create({
    baseURL : 'http://localhost:8080',
}); 

export const insertBook = book => api.post(`/cart`, book);

export const apis = {
    insertBook
}

