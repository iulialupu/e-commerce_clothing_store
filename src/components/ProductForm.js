import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions";
import AddWishListBtn from "./AddWishlistBtn";
import AddCartBtn from "./AddCartBtn";

const ProductForm = props => {
  const { color, size, id, price, name, img } = props.product;

  const [colorState, setColorState] = useState({
    touched: false,
    value: color[0]
  });
  const [sizeState, setSizeState] = useState({
    touched: false,
    value: size[0]
  });
  let [text, setText] = useState("Add to Cart");

  useEffect(() => {
    if (color.length === 1) {
      setColorState({ touched: true, value: color[0] });
    } else {
      setColorState({ touched: false, value: color[0] });
    }
    if (size.length === 1) {
      setSizeState({ touched: true, value: size[0] });
    } else {
      setSizeState({ touched: false, value: size[0] });
    }
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    if (colorState.touched && sizeState.touched) {
      props.addToCart({
        id: id,
        img: [img[0], img[1]],
        name: name,
        price: price,
        color: colorState.value,
        size: sizeState.value,
        amount: 1
      });
    }
  }

  function handleChange(e) {
    if (e.target.name === "color") {
      setColorState({ touched: true, value: e.target.value });
    }
    if (e.target.name === "size") {
      setSizeState({ touched: true, value: e.target.value });
    }
  }

  function handleMouseOver() {
    if (colorState.touched && sizeState.touched) {
      setText("Add to Cart");
    } else if (!colorState.touched) {
      setText("Select a colour!");
    } else if (!sizeState.touched) {
      setText("Select size!");
    }
  }

  function handleMouseLeave() {
    setText("Add to Cart");
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="form content">
        <label className="grid-label" htmlFor="color">
          Color:
        </label>

        {color.map((color, index) => {
          return (
            <div key={index} className="color">
              <input
                type="radio"
                name="color"
                id={color}
                value={color}
                onChange={e => handleChange(e)}
              />
              <label style={{ backgroundColor: color }} htmlFor={color} />
            </div>
          );
        })}

        <label className="grid-label" htmlFor="size">
          Size:
        </label>

        {size.map((size, index) => (
          <div key={index} className="size">
            <input
              type="radio"
              name="size"
              value={size}
              onChange={e => handleChange(e)}
            />
            <label className="size-custom-input" htmlFor={size} />
            <span>{size}</span>
          </div>
        ))}
      </div>
      <div className="buttons-group">
        <AddWishListBtn id={id} classProp="wishlist-btn-big" text="Add" />
        <AddCartBtn
          text={props.cartItems.hasOwnProperty(id) ? "Added to Cart" : text}
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart
});

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductForm);
