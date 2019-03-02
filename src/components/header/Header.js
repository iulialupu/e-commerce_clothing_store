import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../img/logo.svg";
import logoBig from "../../img/logoBig.svg";
import heart from "../../img/heart.svg";
import bag from "../../img/bag.svg";
import IconLink from "./IconLink";

import Submenu from "./Submenu";
import { ListOfCategories, ListOfCollections } from "../variables";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
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
    if (window.scrollY > 110) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  // const [isScrolled, setIsScrolled] = useState(false);
  // let navigation = React.createRef();

  // console.log(navigation.current);

  // useEffect(() => {
  //   navigation.current.addEventListener('scroll', handleScroll);
  //   return () => navigation.current.removeEventListener('scroll', handleScroll);
  // })

  // function handleScroll() {
  //   if (navigation.current.scrollY > 60) {
  //     console.log('scrolled');
  //     setIsScrolled = true;
  //   } else {
  //     setIsScrolled = false
  //   }

  render() {
    return (
      <div style={{ position: "relative", minHeight: "190px" }}>
        <nav className={this.state.isScrolled ? "nav-small" : "nav-big"}>
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
      </div>
    );
  }
}

export default Header;
