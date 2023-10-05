import React, { useState } from 'react'
import "../style/cart.css";
import { useSelector, useDispatch } from 'react-redux';
import {add, remove, removeall, clear} from '../store/cartSlice'
const BACKEND_URL = process.env.BACKEND_URL;

const Cart = () => {
  const [isPopOpen, setPopOpen] = useState(false);
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart)


  const handleRemove = (productId)=>{
  
      dispatch(removeall(productId));
    
  }

  const handleIncrement = (productId) => {
    dispatch(add(products.find(item => item.id === productId)));
  };
  
  const handleDecrement = (productId) => {
    dispatch(remove(productId));
  };

  // Delete all item from cart
  const clearCart = ()=>{
    dispatch(clear())
  }

const clearPopup = ()=>{
  setPopOpen(isPopOpen);
}

const handleBuyNow = async () => {
  // Check if the user is logged in
  if (!localStorage.getItem('token')) {
    alert('Please Login');
    return;
  }

  // Collect product IDs and quantities from items in the cart
  const cartData = products.map(item => ({
    productId: item.id,
    title: item.title,
    price: item.price,
    imageLink: item.image,
    quantity: item.quantity,
  }));

  if (cartData.length === 0) {
    console.log('No products selected for purchase.');
    return;
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/cart/addcart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ cartItems: cartData }),
    });

    const json = await response.json();
    console.log(json);

    // Handle success and display a message to the user
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle error and display an error message to the user
  }


//set value ture for PopOpen
     setPopOpen(!isPopOpen);

 // Clear alert after 4 seconds
     setTimeout(clearPopup, 4000);

  // Clear the cart (you should implement this function)
   setTimeout(clearCart, 1000);
};
  
 let sum = 0;
 for (let i = 0; i < products.length; i++) {
  sum += products[i].price * products[i].quantity;
  
 }
     console.log(sum)

  return (
    <div className='cart-container'>
    {products.length > 0 ? (
  <div>
    {products.map((item) => (
      <div key={item.id} className="cart-box">
        <div className="cart-image">
          <img src={item.image} alt="" />
        </div>
        <div className="cart-detail">
          <div className='remove'>
            <i className="fa-solid fa-trash mx-2" onClick={() => handleRemove(item.id)}></i>
          </div>
          <h4>{item.title}</h4>
          
          <div className="product-rating">         
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
          </div>
          <span>${item.price * item.quantity}</span>
          <div className="product-quantity">
            <button onClick={() => handleDecrement(item.id)}> <span>-</span> </button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item.id)}><span>+</span></button>
          </div>

        </div>
      </div>
    ))}
    <div className='total-price'>
      <h6>Price Details</h6>
      Price = ${sum} <br/>
      Delivery Charges = $10
      <h6>Total Amount = ${sum+10}</h6>
    </div>
    <div className='buy'>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>

    {/* ALERT */}
    <div className="alert-container">
         <div className={`popup ${isPopOpen ? 'pop-open' : ''}`} id="popup">
             <h2>Thank You</h2>
             <p>Your order has been successfully placed. </p>
        </div>
     </div>

  </div>
) : (
  <div className='empty'>
    <h4>Your cart is empty</h4>
  </div>
)}
</div>

);
 };
export default Cart;



