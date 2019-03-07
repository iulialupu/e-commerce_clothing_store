import React from "react";

function ProductCard(props) {
  console.log(props);
  return (
    <div className="product-card">
      <div>{props.name}</div>
    </div>
  );
}

export default ProductCard;
