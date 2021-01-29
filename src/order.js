import React from 'react';
import './order1.css';
import Nav from './nav';
import Pizzainfo from './pizzaInfo'

function order() {
   
  
  

  return (

    <>
    <div class ="o-container">
      <div class = "navBar">
        <Nav />
      </div>
    
  
      <div class="o-top-wrapper">
        <h3>Your Cart</h3>
        <p>(10 items max)</p>
      </div>

    <div class="o-mid-wrapper" id="mw"> 
      <Pizzainfo /> 
    </div>
  
  </div>

  <div className="o-footer">
  <p>About us</p>
  <p>Contact us</p>
  </div>


  </>

  );
}

export default order;

