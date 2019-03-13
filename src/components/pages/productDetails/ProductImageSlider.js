import React from "react";

import Thumbnails from "./Thumbnails";
import ImageShowcase from "./ImageShowcase";

import "./ProductDetails.css";

function ProductImageSlider() {
  return (
    <div className="product-image-slider">
      <Thumbnails />
      <ImageShowcase />
    </div>
  );
}

export default ProductImageSlider;
