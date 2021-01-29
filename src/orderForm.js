import React from 'react';
import './orderForm.css';
import Poptotal from './orderFormTotal';
import {Link} from 'react-router-dom';
import PI from './payment-inputs'

function orderForm() {
  
  

  return(
    <>
    
    <div className = "total-page">
      <div className = "top-wrap">
        <h1>Payment</h1>
      </div>

    <PI/>

    <div className = "info-wrap">
      <label> Full Name -</label>
      <input placeholder="Full Name" className="inp"></input>

      <label> Address -</label>
      <input placeholder="Address / Appt #" className="inp"></input>

      <label> Phone # -</label>
      <input placeholder="Phone #" className="inp"></input>

    </div>
    <div className = "sub-order">
      <nav>
        <Link to='orderComplete' style={{ textDecoration: 'none' }}>
          <p class="complete">Complete Order</p>
        </Link>
      </nav>
    </div>
    <Poptotal />
    </div>

    
    </>
  )
  
}

export default orderForm;