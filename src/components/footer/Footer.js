import React from "react";

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
                <a href="#">Dresses</a>
              </li>
              <li>
                <a href="#">Knitwere</a>
              </li>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Coats</a>
              </li>
              <li>
                <a href="#">Jeans</a>
              </li>
              <li>
                <a href="#">Skirts</a>
              </li>
              <li>
                <a href="#">Tops</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">Join Our Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Ethical Standarts</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Snapchat</a>
              </li>
              <li>
                <a href="#">Tumblr</a>
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
            here
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
