import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions";
import AddWishListBtn from "./AddWishlistBtn";
import AddCartBtn from "./AddCartBtn";

const ProductForm = props => {
  const { color, size, id, price, name } = props.product;

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
    if (color.length === 1) setColorState({ touched: true, value: color[0] });
    if (size.length === 1) setSizeState({ touched: true, value: size[0] });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (colorState.touched && sizeState.value) {
      props.addToCart({
        id: id,
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
      <div className="grid-cell">
        <label className="label" htmlFor="color">
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
      </div>

      <div className="grid-cell">
        <label className="label" htmlFor="size">
          Size:
        </label>

        {size.map((size, index) => (
          <div key={index} className="size">
            <input
              type="radio"
              name="size"
              value={size}
              checked={colorState.value === color}
              onChange={e => handleChange(e)}
            />
            <span>{size}</span>
          </div>
        ))}
      </div>
      <div className="buttons-group">
        <AddWishListBtn id={id} />
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
