import React, { useState } from 'react';

function PI() {
   const [payment,setPayment]=useState('');

   const handleChange=(e)=>{
       setPayment( e.target.value);
    }
    
    if(payment === "Visa"){
    
      return (
        <div className = "payment-wrap">

          <div className="radio-buttons">
            <form>
             <p>Payment Method</p>

             <input type="radio" value="Cash" id="Cash"
               onChange={handleChange} name="payment" />
             <label for="Cash"> Cash </label>

              <input type="radio" value="Visa" id="Visa"
                onChange={handleChange} name="payment"/>
              <label for="Visa"> Visa </label>
            </form>
          </div>

          <div className="CC-info">

            <label> Full Name -</label>
            <input placeholder="Full Name" className="inp"></input>

            <label> Card # - </label>
            <input placeholder="Credit-Card #" className="inp"></input>

            <label> CVC # - </label>
            <input placeholder="Credit-Card #" className="inp"></input>
          </div>

        </div>
      )
    }
  

    return (
      <div className="payment-wrap">
        <div className="radio-buttons">
          <form>
             <p>Payment Method</p>
             
             <input type="radio" value="Cash" id="Cash"
               onChange={handleChange} name="payment" />
             <label for="Cash"> Cash </label>
             

            <input type="radio" value="Visa" id="Visa"
              onChange={handleChange} name="payment"/>
            <label for="Visa"> Visa </label>
          </form>
         
         
        </div>
      </div>
    );
}
export default PI