import React from "react";

const AddCartBtn = ({ text, handleMouseOver, handleMouseLeave }) => {
  return (
    <button
      type="submit"
      className="btn add-cart-btn flex-center"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="btn-content">{text}</div>
      <div className="hover-fill hover-fill-cart" />
    </button>
  );
};

export default AddCartBtn;
