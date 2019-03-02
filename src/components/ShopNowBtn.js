import React from "react";
import { Link } from "react-router-dom";

import arrow from "../img/arrow2.svg";

const ShopNowBtn = () => {
  return (
    <Link to="/products" className="btn shop-now-btn flex-center">
      <div className="btn-content">
        Shop Now
        <span className="arrow" style={{ backgroundImage: `url(${arrow})` }} />
      </div>
      <div className="hover-fill hover-fill-shop" />
    </Link>
  );
};

export default ShopNowBtn;
