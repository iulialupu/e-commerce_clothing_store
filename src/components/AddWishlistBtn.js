import React from "react";

import heart from "../img/heart.svg";

const AddCartBtn = () => {
  return (
    <button className="wishlist-btn">
      <img src={heart} alt="heart icon" />
    </button>
  );
};

export default AddCartBtn;
