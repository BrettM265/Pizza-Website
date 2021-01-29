import React, {useState, useEffect} from 'react';
import './Menu.css';
import Nav from './nav';


function Menu() {
const [pizzas, setPizzas] = useState([])

const id = "PizzaList"

useEffect(()=> {
  const storedPizzas = JSON.parse(localStorage.getItem(id))
  if (storedPizzas) setPizzas(storedPizzas)
},[])

useEffect (() => {
localStorage.setItem(id, JSON.stringify(pizzas))
}, [pizzas])


function addSPP(e) {
  const name = "Spicy Pepperoni Pizza"
  const price = 9.45
  setPizzas (prevPizzas => {
    return [...prevPizzas, {name: name, price: price}]
  })}

function addSPR(e) {
  const name = "Specialty Pizza Rolls"
  const price = 5.45
  
  setPizzas(prevPizzas => {
    return [...prevPizzas, { name:name, price:price}]
  })}

function addVP(e) {
  const name = "Vegan Pizza"
  const price = 8.45
  setPizzas(prevPizzas => {
    return [...prevPizzas, { name:name, price:price}]
  })}

function addCP(e) {
  const name = "Cheese Pizza"
  const price = 7.45
  setPizzas(prevPizzas => {
    return [...prevPizzas, { name:name, price:price}]
  })}

function addOKP(e) {
  const name = "Olive & Kale Pizza"
  const price = 9.75
  setPizzas(prevPizzas => {
    return [...prevPizzas, { name:name, price:price}]
  })}

function addCS(e) {
  const name = "Chef's Specialty Pizza"
  const price = 10.45
  setPizzas(prevPizzas => {
    return [...prevPizzas, { name:name, price:price}]
  })}

  const cartAMT =  `(${pizzas.length})`

 
  
  return (
      <> 
      <div className = "container">
        <div className = "navBar">
          <Nav />{cartAMT}
        </div>

        <div className = "top-wrapper">
          
          <h2>Imagineria's Pizzaria</h2>
          <h4> 54450009 N Colorado Street Miami Florida </h4>
          <h4>(555) 555-5555</h4>
            
        </div>

          <div className="mid-wrapper">
            <div className="mid-wrap">
              
              <div className = "pizza1">
                <h4 className="Left">Spicy Pepperoni Pizza</h4>
                <img className="p1" src="./img/p1.jpg"></img>
                <p>Jalepenos, Pepperoni & Ham, 16 inch - $9.45 </p>
                <button className="leftbutton" onClick = {addSPP}>Add to Cart</button>
              </div>
    
              <div className = "pizza2">
                <h4 className="Right">Specialty Pizza Rolls</h4>
                <img className="p2" src="./img/P roll 1.jpg"></img>
                <p>Limited time Specialty Pizza Rolls - $5.45</p>
                <button className="rightbutton" onClick = {addSPR}>Add to Cart</button>
              </div>
    
            </div>

            <div className="mid-wrap">

              <div className = "pizza3">
                <h4 className="Left">Vegan Pizza</h4>
                <img className="p1"src="./img/p6.jpg"></img>
                <p>Vegan Cheese, Tomatoes & Spinach - $8.45</p>
                <button className="leftbutton" onClick = {addVP}>Add to Cart</button>
    
              </div>

              <div className = "pizza4">
                <h4 className="Right">Cheese Pizza</h4>
                <img className = "p2" src="./img/p2.jpg"></img>
                <p>The Simple but Classic - $7.45</p>
                <button className="rightbutton" onClick = {addCP}>Add to Cart</button>
              </div>
            </div>

            <div className="mid-wrap">

            <div className = "pizza5">
              <h4 className="Left">Olive & Kale Pizza</h4>
              <img className="p1" src="./img/p5.jpg"></img>
              <p>Olives $ Kale - $9.75</p>
              <button className="leftbutton" onClick = {addOKP}>Add to Cart</button>
            
            </div>

            <div className = "pizza6">
              <h4 className="Right">Chef's Special 50/50</h4>
              <img className="p2" src="./img/p4.jpg" ></img>
            <p>Chef's Special Assortment of Veggies - $10.45</p>
            <button className="rightbutton" onClick = {addCS}>Add to Cart</button>
            </div>

          </div>
        </div>

            <div className="bottom-wrapper">
              <div className="footer">
                <p>About us</p>
                <p>Contact us</p> 
            </div>
              </div>
          </div>
     
        </>
      )
}
export default Menu;