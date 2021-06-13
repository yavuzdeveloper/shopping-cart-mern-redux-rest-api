import './App.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'; 
import { addToCart, addBookToCart } from './actions'
import { Book, CartModel } from './types';
import { ReducerState } from './reducers';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getBooks } from './actions';



const Products = (props:{ books: Book[], addToCart: Function,  cart:CartModel }) => {


  const books:Book[] = useSelector((state:ReducerState) => state.books);                                                                        
  const cart:CartModel = useSelector((state:ReducerState) => state.cart); 

  const dispatch = useDispatch();

  useEffect(() => { 
      // fetch("http://localhost:8080/books")
      //   .then(response => {           
      //     //console.log("RESULT:", response)
      //     return response.json();
      //   }).then(data => {          
      //     //console.log("DATA:",data)
      //     setDataApi(data);
      //   })
        dispatch(getBooks());
  }, []);
  


  return (
    <div>
      <h3>
        <span style={{padding:"0 0 0 10px"}}>Products</span>
        <div style={{float:"right", padding:"0 10px 0 0"}}>
        <Link to="/cart">My Cart({ cart.items.reduce((total, item) => (total += item.count), 0 )})</Link>
        </div>
      </h3>
      <div> 
        { books.map((book:Book) => (
          <div className="book">
            <img src={book.image} alt={book.name} />
              <div className="bookContent"  key={book._id}>
                <h4>{book.name}</h4>
                <p>Price: {book.price}£</p>
                <p>Author: {book.author}</p>
                {/* <button onClick={()=> dispatch(addToCart(book))}>Add to Cart</button> */}
                <button onClick={()=> dispatch(addBookToCart(book))}>Add to Cart</button>
              </div>
          </div>
        ))}
    </div>
    </div>
  );
}

// const mapStateToProps = (state:ReducerState) => { 
  //console.log("STATE:",state.books);
//   return {
//     books: state.books,
//     cart: state.cart 
//   }
// }

// const mapActionsToProps = ({ addToCart })
// export default connect (mapStateToProps, mapActionsToProps)(Products);

// export default connect (mapStateToProps,{ addToCart })(Products);

export default Products;