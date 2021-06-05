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