import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListProductComponent from './components/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path ="/" exact component = {ListProductComponent}></Route>
              <Route path ="/products" exact component = {ListProductComponent}></Route>
              <Route path ="/add-product" exact component = {CreateProductComponent}></Route>
              <Route path ="/update-product/:id" exact component = {UpdateProductComponent}></Route>
              <Route path ="/view-product/:id" exact component = {ViewProductComponent}></Route>
            </Switch>     
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
