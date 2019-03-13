import React from "react";
import ProductImageSlider from "./ProductImageSlider";
import ProductSpecifications from "./ProductSpecifications";

function ProductDetails() {
  return (
    <main className="product-details">
      <div className="product-wrapper">
        <ProductImageSlider />
        <ProductSpecifications />
      </div>
    </main>
  );
}

export default ProductDetails;
