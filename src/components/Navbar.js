import React, { useState } from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [isMenuOpen, setMenuOpen] = useState(false);

  let navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/signup');
  }

  return (
    <div className='nav-container'>
      <h2>TheShoppingHub</h2>
      <nav id='navbar' className={`${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
        
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/cart" >Cart: {items.length}</Link></li>
          <li><Link to="/detail" >User Detail</Link></li>
          <li><Link to="/order" >Orders</Link></li>
          {!localStorage.getItem('token')?
          <div>
          
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="/signup" >Sign Up</Link></li>
          </div>
  : <button onClick={handleLogout} className='logout-btn' >Lougout</button>
        }
        </ul>
      </nav>

      <div id='menubtn' className={`berger ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div  className={ `cross ${isMenuOpen ? '' : 'hidden'}`} onClick={toggleMenu}>
        <i className="fa-solid fa-xmark"></i>
      </div> 
    </div>
  );
};

export default Navbar;
