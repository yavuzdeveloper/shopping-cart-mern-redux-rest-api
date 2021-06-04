import { request } from "node:http";

export const API_BASE_URL = 'http://localhost:8080/api';

// export function getProducts() {
//     return request({
//         url: API_BASE_URL,
//         method: "GET"
//     });

// }

export function getProducts() {
    return request({
        url:"http://localhost:8080/books",
        method: "GET"
    });
}