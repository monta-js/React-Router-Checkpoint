import React from 'react';
import Home from './components/Home'
import Product from './components/Product'
import Category from './components/Category'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Polo from './components/Products/Polo'
import Nike from './components/Products/Nike'
import Adidas from './components/Products/Adidas'
import LeeCooper from './components/Products/LeeCooper'
import Boots from './components/Categorys/Boots'
import Footwear from './components/Categorys/Footwear'
import Shoes from './components/Categorys/Shoes'
import AdminWlc from './components/Admin/AdminWlc'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Route exact path= "/" component={Home} />
      <Route path= "/Product" component={Product} />
      <Route path= "/Category" component={Category} />
      <Route path= "/Admin" component={Admin} />
      <Route path= "/Category/Boots" component={Boots} />
      <Route path= "/Category/Shoes" component={Shoes} />
      <Route path= "/Category/Footwear" component={Footwear} />
      <Route path= "/Product/Nike" component={Nike} />
      <Route path= "/Product/Polo" component={Polo} />
      <Route path= "/Product/Adidas" component={Adidas} />
      <Route path= "/Product/Lee Cooper" component={LeeCooper} />
      <Route path= "/Admin/AdminWlc" component={AdminWlc} />
    </BrowserRouter>

  );
}

export default App;
