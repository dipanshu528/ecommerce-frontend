import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';
import "../style/product.css";
const Product = () => {
    
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [isPopOpen, setPopOpen] = useState(false);

    const clearPopup = ()=>{
      setPopOpen(isPopOpen);
    }

    useEffect(()=>{
        const fetchproduct = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();           
              setProducts(data);
            }

            fetchproduct();
    },[])

    const handleAdd = (product)=>{
        dispatch(add(product));

       //set value ture for PopOpen
    setPopOpen(!isPopOpen);

    // Clear alert after 4 seconds
 setTimeout(clearPopup, 1000);
      }

  return (
    <>
    <div className="title">
    <h2>Products</h2>
    </div>
    
      <div className="product-container">
        
      {products.length > 0 ? (
          products.map((product) => (
            <div className="product-box" key={product.id}>
              <img src={product.image} alt="" />
              <div className="product-detail">
              <h5>{product.title.slice(0, 35)}...</h5>
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <span>$ {product.price}</span>
              </div>
              <div>
              <button className="buynow-btn" onClick={() => handleAdd(product)}>
                Add to cart
              </button>
              </div>

            </div>
            
          ))
        ) : (
          <div>Loading...</div>
        )}

<div className="alert-container">
        <div className={`product-popup ${isPopOpen ? 'product-pop-open' : ''}`} id="popup">
            <h4>One item added to cart</h4>          
        </div>
    </div>
      </div>      
    </>
  )
}

export default Product
