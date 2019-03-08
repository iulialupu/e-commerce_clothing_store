import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h4>Products</h4>
            <ul>
              <li>
                <Link to="/">Dresses</Link>
              </li>
              <li>
                <Link to="/">Knitwere</Link>
              </li>
              <li>
                <Link to="/">Shirts</Link>
              </li>
              <li>
                <Link to="/">Coats</Link>
              </li>
              <li>
                <Link to="/">Jeans</Link>
              </li>
              <li>
                <Link to="/">Skirts</Link>
              </li>
              <li>
                <Link to="/">Tops</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Information</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Affiliates</Link>
              </li>
              <li>
                <Link to="/">Stores</Link>
              </li>
              <li>
                <Link to="/">Join Our Team</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Help</h4>
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Delivery</Link>
              </li>
              <li>
                <Link to="/">Track Your Order</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Ethical Standarts</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Snapchat</Link>
              </li>
              <li>
                <Link to="/">Tumblr</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          This site is not an actual clothing web-store. E-apparel is a made-up
          brand name. This site was build for learnig and practicing of web
          development purpose only. The data presented here, the images and
          details about products belong to the NA-KD company, and can be seen{" "}
          <a
            href="https://www.na-kd.com/en
"
          >
            here
          </a>
          . Images from the Spring Collection Section can be found{" "}
          <a href="https://www.vogue.ru/collection/spring_summer2018/resort/moskva/i_am/#gallery1/959197">
            here.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
