import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import Home from "./pages/home/";
import Products from "./pages/products";
import ProductDetails from "./pages/productDetails";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
