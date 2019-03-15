import React from "react";

import Thumbnails from "./Thumbnails";
import ImageShowcase from "./ImageShowcase";

import "./ProductDetails.css";

function ProductImageSlider({ images }) {
  return (
    <div className="product-image-slider">
      <Thumbnails images={images} />
      <ImageShowcase images={images} />
    </div>
  );
}

export default ProductImageSlider;
