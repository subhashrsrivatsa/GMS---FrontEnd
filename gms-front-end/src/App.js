import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListProductComponent from './components/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path ="/" exact component = {ListProductComponent}></Route>
              <Route path ="/products" component = {ListProductComponent}></Route>
              <Route path ="/add-product" exact component = {CreateProductComponent}></Route>
              <Route path ="/update-product/:id" exact component = {UpdateProductComponent}></Route>
            </Switch>     
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
