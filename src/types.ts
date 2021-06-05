export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_CART = 'INCREASE_CART';
export const DECREASE_CART = 'DE_CREASE_CART';
export const GET_BOOKS ="GET_BOOKS";

interface AddCartAction {
  type: typeof ADD_TO_CART;
  payload: Book;
}
interface RemoveCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: Book;
}
interface IncreaseCartAction {
  type: typeof INCREASE_CART;
  payload: Book;
}
interface DecreaseCartAction {
  type: typeof DECREASE_CART;
  payload: Book;
}
interface GetBooksAction {
  type: typeof GET_BOOKS;
  payload: Book;
}

export type ListAction = AddCartAction | RemoveCartAction | IncreaseCartAction | DecreaseCartAction | GetBooksAction;

export interface Book {
  _id: number;
  name: string;
  author: string;
  price: number;
  image: string;
  _v: number;
}

export interface CartModel {
items: CartItem[];
}

export interface CartItem {
  book: Book;      
  count: number;
}