import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Ürün miktarını artırma ve azaltma için eylem oluşturucularınız olduğunu varsayıyoruz


const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  console.log("CartItems: ", cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const handleRemoveItemFromCart = (cartId) => {
    dispatch(removeItemFromCart(cartId));
  }

  const handleincreaseItemQuantity = cartId => {
    dispatch(increaseItemQuantity(cartId));
  }

  const handledecreaseItemQuantity = cartId => {
    dispatch(decreaseItemQuantity(cartId));
  }

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {
          cartItems.map(cart => (
            <li key={cart.id} className='cart-item'>
              <span>{cart.name} - ${cart.price} - {cart.quantity}</span>
              <button className="clear-cart-btn" onClick={() => handleRemoveItemFromCart(cart.id)}>Clear Cart</button>
              <button className="clear-cart-btn" onClick={() => handleincreaseItemQuantity(cart.id)}>Increase</button>
              <button className="clear-cart-btn" onClick={() => handledecreaseItemQuantity(cart.id)}>Decrease</button>            
            </li>
            
          ))
        }
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Remove</button>
      </div>
    </>
  );
};

export default ShoppingCart;
