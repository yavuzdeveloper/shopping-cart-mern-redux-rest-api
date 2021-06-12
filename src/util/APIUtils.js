import axios from "axios";
import { request } from "node:http";


// function request(options){
//     let callback = token => {
//         const headers = token ? {
//             'Content-Type': 'application/json',
//             'Authorization': 'JWT ' + token
//         }
//         : {
//             'Content-Type': 'application/json'
//           };
//         const defaults = {headers: headers};
//         options = Object.assign({}, defaults, options);
//         console.log("Request: ", options);
//         return fetch(options.url, options)
//             .then(response =>
//                 response.json().then(json => {
//                     if(!response.ok) {
//                         return Promise.reject(json);
//                     }
//                     return json;
//                 })
//             )
//     };

//     return PROFILE === "withoutSecurity" ? callback() : getToken().then(token => callback(token));
// };



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

const apis = {
    insertBook
}

export default apis
//**********