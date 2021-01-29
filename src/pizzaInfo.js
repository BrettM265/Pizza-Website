import React from 'react';
import './order1.css';
import Popui from './orderTotal'
import {Link} from 'react-router-dom';

const Pizzainfo = () => {

 let storedPizzas = JSON.parse(localStorage.getItem("PizzaList"))

  const clr = () =>  {
    localStorage.removeItem("PizzaList")
    window.location.reload(false);
    }

     if(storedPizzas === null || storedPizzas.length === 0){
       return(
         <div className = "empty">Your Cart is Empty </div>
       )
     }else{
        return (
      <>
      <div class="clear">
        <button  onClick={clr}>Clear All </button>
      </div>

      <div className="pizzaList">
      {storedPizzas.map((pizza) => (
        
        <div className="pizzaList2">{pizza.name} - ${pizza.price}
        </div>
      ))}
      
<Popui />

<div class = "o-order-buttn">
<nav>
<Link to='orderForm' style={{ textDecoration: 'none' }}>
<p class="order">Checkout</p>
</Link>
</nav>

  </div>
  
      </div>
      </>
    )}
      }
  
      
    
   export default Pizzainfo
  