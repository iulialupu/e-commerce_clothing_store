import React from "react";

import ProductForm from "../../ProductForm";

function ProductSpecifications(props) {
  const { name, description, fabric, price } = props.product;

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

        <ProductForm product={props.product} />
      </div>
    </div>
  );
}

export default ProductSpecifications;
