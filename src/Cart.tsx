
import { connect, useDispatch, useSelector } from 'react-redux';
import { CartItem, CartModel } from './types';
import { removeFromCart, decrease, increase, getBooksFromCart } from './actions'
import { ReducerState} from './reducers';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = (props:{ cart:CartModel, decrease:Function, 
    removeFromCart: Function, increase: Function}) => { 

    const cart:CartModel = useSelector((state:ReducerState) => state.cart); //console.log("SELECTOR.cart:", cart);
    const dispatch = useDispatch();
     
    useEffect(() => {
        dispatch(getBooksFromCart());
    }, [])


    const totalPrice = cart.items.reduce((total, item) => 
        (total += (item.count)*(item.book.price)), 0 );
    
    return ( 
        <div style={{padding:"0 10px 0 10px"}}>
            <h3>
                <Link to="/">Products</Link> 
                <div style={{float:"right"}}>
                    <span>My Cart ({ cart.items.reduce((total, item) => (total += item.count), 0 )})</span>
                </div>    
            </h3>
            <div className="cart">
               { !cart.items.length && 
               <div className="empty">
                   <h3>Your Cart Empty</h3>
               </div>
               }
                {cart.items.map((item:CartItem) => (
                <div className="book"  key={item.book._id}>
                    <img src={item.book.image} alt={item.book.name}  />
                    <div>
                        <h4>{item.book.name}</h4>
                        <p>Price: {item.book.price}£</p>
                        <p>Author: {item.book.author}</p>
                        <p>Count: {item.count}</p>
                        <p>Subtotal: {(item.book.price*item.count).toFixed(2)}£</p>
                        <button onClick={() => dispatch(decrease(item.book))}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.book))}>Remove</button>
                        <button onClick={() => dispatch(increase(item.book))}>+</button>
                    </div>
                </div>
                ))}
            </div>
                <div style={{float:"right"}}>
                    <h3>Total Cart Price: £ {totalPrice.toFixed(2)}</h3>   
                </div> 
        </div>
    )
}

// const mapStateToProps = (state:ReducerState) => {
//     return {
//         cart: state.cart   
//     }
// }

// const mapActionsToProps = ({ removeFromCart, increase, decrease });
// export default connect(mapStateToProps, mapActionsToProps)(Cart);

//export default connect(mapStateToProps, { removeFromCart, increase, decrease })(Cart);


// export default connect(mapStateToProps, { removeFromCart, increase, decrease })(Cart);

export default Cart;