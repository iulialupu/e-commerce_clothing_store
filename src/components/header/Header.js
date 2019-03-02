import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../img/logo.svg";
import logoBig from "../../img/logoBig.svg";
import heart from "../../img/heart.svg";
import bag from "../../img/bag.svg";
import IconLink from "./IconLink";

import Submenu from "./Submenu";
import { ListOfCategories, ListOfCollections } from "../variables";

function Header() {
  return (
    <>
      <nav className="nav-big">
        <div className="container">
          <div className="flex-center">
            <Link to="/" className="logo">
              <img src={logo} alt="E-apparel Logo" />
            </Link>

            <div className="nav-center">
              <div className="logo-big">
                <img src={logoBig} alt="E-apparel Logo" />
              </div>

              <ul className="nav-menu flex-center">
                <li>
                  <Link to="/products">New Arrivals</Link>
                </li>

                <li>
                  <Link to="/products">Shop</Link>
                </li>

                <li>
                  <Link to="/products">Collections</Link>
                </li>
              </ul>
            </div>

            <div className="wishlist-and-cart-wrapper">
              <IconLink link="wishlist" src={heart} alt="wishlist icon" />
              <IconLink link="cart" src={bag} alt="shopping cart icon" />
            </div>
          </div>
        </div>
      </nav>

      <Submenu submenuItems={ListOfCategories} />
      <Submenu submenuItems={ListOfCollections} />
    </>
  );
}

export default Header;
