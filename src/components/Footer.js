import React from 'react'
import { Link } from 'react-router-dom';
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <div className='footer-container'>
      <div className="footer-row">
        <div className="footer-col">
            <h4>Download Our App</h4>
            <p>Download app for Android and ios mobile phone </p>
        </div>
        <div className="footer-col">
            <h4>Useful Link</h4>
            <ul>
                <li><Link to="">Coupons</Link></li>
                <li><Link to="">Blogs Post</Link></li>
                <li><Link to="">Return Policy</Link></li>
                <li><Link to="">Join Affiliate</Link></li>
            </ul>
        </div>

        <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
                <li><Link to="">Facebook</Link></li>
                <li><Link to="">Twitter</Link></li>
                <li><Link to="">Instagram</Link></li>
                <li><Link to="">YouTube</Link></li>
            </ul>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Footer