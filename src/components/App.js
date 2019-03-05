import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
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
