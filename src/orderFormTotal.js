import React from 'react';
import './orderForm.css';

function Poptotal() {

  const storedPizzas = JSON.parse(localStorage.getItem("PizzaList"))
  
    let pizzaL = storedPizzas.length 
  if(pizzaL <= 0 ){
    let total = 0
    return (<div className = "payment-total">Total = ${total}</div>)
  }
  else if(pizzaL <= 1 && pizzaL > 0){
    let total = storedPizzas[0].price
    return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)
  }
  else if(pizzaL <= 2 && pizzaL > 1){
    let total = storedPizzas[0].price + storedPizzas[1].price
    return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)
  }
  else if(pizzaL <= 3 && pizzaL > 2){
    let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price
    return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)
  }
  else if(pizzaL <= 4 && pizzaL > 3){
    let total = storedPizzas[0].price + + storedPizzas[1].price +  storedPizzas[2].price + storedPizzas[3].price
    return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)
  }
  else if(pizzaL <=5 && pizzaL > 4){
    let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price + storedPizzas[3].price + storedPizzas[4].price
    return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)
  }
  else if(pizzaL <=6 && pizzaL > 5){
    let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price + storedPizzas[3].price + storedPizzas[4].price + storedPizzas[5].price 
    return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)}

    else if(pizzaL <=7 && pizzaL > 6){
      let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price + storedPizzas[3].price + storedPizzas[4].price + storedPizzas[5].price + storedPizzas[6].price
      return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)}

    else if(pizzaL <=8 && pizzaL > 7){
      let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price + storedPizzas[3].price + storedPizzas[4].price + storedPizzas[5].price + storedPizzas[6].price + storedPizzas[7].price
      return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)}

    else if(pizzaL <=9 && pizzaL > 8){
      let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price + storedPizzas[3].price + storedPizzas[4].price + storedPizzas[5].price + storedPizzas[6].price + storedPizzas[7].price + storedPizzas[8].price
      return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)}

    else if(pizzaL <=10 && pizzaL > 9){
      let total = storedPizzas[0].price + storedPizzas[1].price + storedPizzas[2].price + storedPizzas[3].price + storedPizzas[4].price + storedPizzas[5].price + storedPizzas[6].price + storedPizzas[7].price + storedPizzas[8].price + storedPizzas[9].price
      return(<div className = "payment-total">Total = ${total.toFixed(2)}</div>)}
  }

export default Poptotal