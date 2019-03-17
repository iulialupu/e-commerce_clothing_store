import React, { useState } from "react";
// import { Field, reduxForm } from "redux-form";

import AddWishListBtn from "./AddWishlistBtn";
import AddCartBtn from "./AddCartBtn";

const ProductForm = ({ color, size, id, price, name }) => {
  const [colorState, setColorState] = useState({
    touched: color.length === 1 ? true : false,
    value: color[0]
  });
  const [sizeState, setSizeState] = useState({
    touched: size.length === 1 ? true : false,
    value: size[0]
  });
  let [text, setText] = useState("Add to Cart");

  const handleSubmit = e => {
    e.preventDefault();
    if (colorState.touched && sizeState.value) {
      console.log({
        id: id,
        name: name,
        price: price,
        color: colorState.value,
        size: sizeState.value,
        amount: 1
      });
    }
  };

  const handleChange = e => {
    if (e.target.name === "color") {
      setColorState({ touched: true, value: e.target.value });
    }
    if (e.target.name === "size") {
      setSizeState({ touched: true, value: e.target.value });
    }
  };

  const handleMouseOver = () => {
    if (colorState.touched && sizeState.touched) {
      setText("Add to Cart");
    } else if (!colorState.touched) {
      setText("Select a colour!");
    } else if (!sizeState.touched) {
      setText("Select size!");
    }
  };

  const handleMouseLeave = () => {
    setText("Add to Cart");
  };

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
        <AddWishListBtn />
        <AddCartBtn
          text={text || "Add to Cart"}
          handleMouseOver={handleMouseOver}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </form>
  );
};

// const validate = formValues => {
//   const errors = {};

//   if (!formValues.color) {
//     errors.color = "Select a colour";
//   }
//   if (!formValues.size) {
//     errors.size = "Select a size";
//   }
//   return errors;
// };

// export default reduxForm({
//   form: "ProductForm",
//   validate
// })(ProductForm);

export default ProductForm;
