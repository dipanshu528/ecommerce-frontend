import React from 'react';
import "../style/review.css";

const Review = () => {
  return (
    <div>

<div className="review-title">
    <h1>Review</h1>
    </div>
    
    <div className='container'>

      <div className="box">
      <i className="fa fa-quote-left"></i>
      <p>I love shopping on this e-commerce site! The variety of products is incredible, and the prices are very competitive. Plus, the customer service is fantastic. Highly recommended!</p>
           <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                </div>
                <img src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" alt=""/>
                <h3>Olivia</h3>
      </div>


      <div className="box">
      <i className="fa fa-quote-left"></i>
      <p>I love shopping on this e-commerce site! The variety of products is incredible, and the prices are very competitive. Plus, the customer service is fantastic. Highly recommended</p>
                <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                </div>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
                <h3>Sean Parker</h3>
      </div>

      <div className="box">
      <i className="fa fa-quote-left"></i>
      <p>I love shopping on this e-commerce site! The variety of products is incredible, and the prices are very competitive. Plus, the customer service is fantastic. Highly recommended!</p>
           <div className="rating">
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                    <i className="fa fa-star" ></i>
                </div>
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=""/>
                <h3>Madison</h3>
      </div>
      
    </div> 
    
    </div>
  )
}

export default Review

