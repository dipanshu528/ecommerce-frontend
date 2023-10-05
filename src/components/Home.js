import React from 'react'
import Product from './Product';
import Review from "./Review";
import Footer from "./Footer";
import Slides from "./Slides";

const Home = () => {
  return (
    <div>
      <Slides/>
      <Product/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Home
