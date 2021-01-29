import React from 'react';
import Menu from './Menu';
import order from './order';
import orderForm from './orderForm';
import complete from './orderComplete'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    
    <>
    
    <Router>
    
    <div class="kk">
    <Switch>
    <Route path='/' exact component={Menu}/>
    <Route path='/order' exact component={order}/>
    <Route path='/orderForm' exact component={orderForm}/>
    <Route path='/orderComplete' exact component={complete}/>
    </Switch>
    </div>
    </Router>
  

    
  </>

  );
}


export default App;