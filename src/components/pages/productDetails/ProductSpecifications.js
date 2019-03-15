import React from "react";

import AddWishListBtn from "../../AddWishlistBtn";
import AddCartBtn from "../../AddCartBtn";

function ProductSpecifications(props) {
  const { name, description, fabric, color, size, price } = props.product;

  return (
    <div className="product-specifications sticky">
      <div className="product-specifications-content">
        <h4>{name}</h4>
        <div className="price">${price}</div>
        <p className="desc">{description}</p>
        <p className="fabric">
          Composition:{" "}
          {fabric.map(item => (
            <span>{item}</span>
          ))}{" "}
        </p>
        <form>
          <label htmlFor="color">Color:</label>

          {color.map((color, index) => (
            <div key={index} className="color">
              <input type="radio" name="color" id={color} value={color} />
              <label style={{ backgroundColor: color }} htmlFor={color} />
            </div>
          ))}

          <label htmlFor="size">Size:</label>

          {size.map((size, index) => (
            <div key={index} className="size">
              <input type="radio" name="size" value={size} />
              <span>{size}</span>
            </div>
          ))}
          <div className="buttons-group">
            <AddWishListBtn />
            <AddCartBtn />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductSpecifications;
