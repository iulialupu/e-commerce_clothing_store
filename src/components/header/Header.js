import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../img/logo.svg";
import heart from "../../img/heart.svg";
import bag from "../../img/bag.svg";

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="flex-center">
          <Link to="/" className="logo">
            <img src={logo} alt="E-apparel Logo" />
          </Link>
          <div className="wishlist-and-cart-wrapper">
            <Link to="/wishlist">
              <div className="nav-icon wishlist">
                <img src={heart} alt="wishlist icon" />
                <span className="w-and-c-amount" />
              </div>
            </Link>
            <Link to="/cart">
              <div className="nav-icon cart">
                <img src={bag} alt="shopping cart icon" />
                <span className="w-and-c-amount" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
