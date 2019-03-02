import React from "react";
import { Link } from "react-router-dom";

const AddCartBtn = () => {
  return (
    <Link to="/products" className="btn add-cart-btn flex-center">
      <div className="btn-content">Add to cart</div>
      <div className="hover-fill hover-fill-cart" />
    </Link>
  );
};

export default AddCartBtn;
