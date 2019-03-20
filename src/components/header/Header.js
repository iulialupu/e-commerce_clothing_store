import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";
import logo from "../../img/logo.svg";
import logoBig from "../../img/logoBig.svg";
import heart from "../../img/heart.svg";
import bag from "../../img/bag.svg";
import IconLink from "./IconLink";

import Submenu from "./Submenu";
import { listOfCategories, listOfCollections } from "../variables";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false,
      shopIsOpen: false,
      collectionsIsOpen: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.navigation = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 95) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  handleMouseLeave() {
    this.setState({ shopIsOpen: false, collectionsIsOpen: false });
  }

  render() {
    return (
      <div className="nav-wrapper">
        <nav
          className={this.state.isScrolled ? "nav-small" : "nav-big"}
          ref={this.navigation}
        >
          <div className="container">
            <div className="flex-center">
              <Link to="/" className="logo">
                <img src={logo} alt="E-apparel Logo" />
              </Link>

              <div className="nav-center">
                <div className="logo-big">
                  <Link to="/">
                    <img src={logoBig} alt="E-apparel Logo" />
                  </Link>
                </div>

                <ul className="nav-menu flex-center">
                  <li onMouseOver={this.handleMouseLeave}>
                    <Link
                      to={{ pathname: "/products", state: { isNew: true } }}
                    >
                      New Arrivals
                    </Link>
                  </li>

                  <li
                    onMouseOver={() =>
                      this.setState({
                        shopIsOpen: true,
                        collectionsIsOpen: false
                      })
                    }
                  >
                    <Link to="/products">Shop</Link>
                  </li>

                  <li
                    onMouseOver={() =>
                      this.setState({
                        collectionsIsOpen: true,
                        shopIsOpen: false
                      })
                    }
                  >
                    <Link to="/products">Collections</Link>
                  </li>
                </ul>
              </div>

              <div className="wishlist-and-cart-wrapper">
                <IconLink
                  link="wishlist"
                  src={heart}
                  alt="wishlist icon"
                  amount={this.props.wishlist.length}
                />
                <IconLink
                  link="cart"
                  src={bag}
                  alt="shopping cart icon"
                  amount={this.props.cart.length}
                />
              </div>
            </div>
          </div>
        </nav>

        <Submenu
          submenuItems={listOfCategories}
          handleMouseLeave={this.handleMouseLeave}
          isOpen={this.state.shopIsOpen}
          navHeight={
            this.navigation.current ? this.navigation.current.offsetHeight : 0
          }
        />
        <Submenu
          submenuItems={listOfCollections}
          handleMouseLeave={this.handleMouseLeave}
          isOpen={this.state.collectionsIsOpen}
          navHeight={
            this.navigation.current ? this.navigation.current.offsetHeight : 0
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist,
  cart: Object.values(state.cart)
});

export default connect(mapStateToProps)(Header);
