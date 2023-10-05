import React, { useState } from 'react';
import "../style/order.css";
const BACKEND_URL = process.env.BACKEND_URL;

const Order = () => {
  const [orderDetails, setOrderDetails] = useState([]);

  // Fetch product IDs from API
  const getOrederDetails = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/cart/fetchallproducts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      if (response.ok) {
        const json = await response.json();
        // console.log(json);
        setOrderDetails(json);
      } else {
        throw new Error('Failed to fetch product ');
      }
    } catch (error) {
      console.error('Error fetching product IDs:', error);
    }
  };

  if (localStorage.getItem('token')) {
    getOrederDetails();
  } else {
    alert('Please login first');
  }





  // Define the handleRemove function
  const handleRemove = async (itemId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/cart/delete/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
  
      if (response.ok) {
        alert('Item removed successfully');
        // Call a function to refresh the order details
        getOrederDetails();
      } else {
        throw new Error('Failed to remove item');
      }
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div>
      return (
    <>
    {orderDetails.length > 0 ? (
  <div>
    {orderDetails.map((item) => (
      <div key={item._id} className="order-box">
         
        <div className="cart-image">
          <img src={item.imageLink} alt="" />
        </div>
        <div className="order-detail">
        <div className='remove'>
            <i className="fa-solid fa-trash mx-2" onClick={() => handleRemove(item._id)}></i>
          </div>
          <h4>{item.title}</h4>
          
          <div className="product-rating">         
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
          </div>
          <span>Price : ${item.price * item.quantity}</span> <br/>
    <span>Quantity : {item.quantity}</span><br/>
    <span>Order Date : {item.date.slice(0,10)}</span>
        </div>
      </div>
    ))}

  </div>
) : (
  <div className='empty'>
    <h4>Your order is empty</h4>
  </div>
)}
</>

);
    </div>
  )
}

export default Order






 