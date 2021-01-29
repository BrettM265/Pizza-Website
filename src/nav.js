import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';



function Nav() {
  return (
    <nav>

    <ul className="navList">
    
      <li className= "signiture">BDM</li>

    <Link to='' style={{ textDecoration: 'none' }}>
      <li className="menu">Menu</li>
    </Link>

    <Link to='/order' style={{ textDecoration: 'none' }}>
      <li className="cart">My Cart<span></span> </li>
  
    </Link>
    </ul>
    </nav>
  )
}
export default Nav;


