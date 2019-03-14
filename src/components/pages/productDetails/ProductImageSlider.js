import React from "react";

import Thumbnails from "./Thumbnails";
import ImageShowcase from "./ImageShowcase";

import "./ProductDetails.css";

function ProductImageSlider({ images }) {
  const [i, setIndex] = React.useState(0);

  console.log(images);

  const handleClick = (e, index) => {
    e.preventDefault();
    setIndex(index);
  };

  console.log(i);
  return (
    <div className="product-image-slider">
      <Thumbnails images={images} handleClick={handleClick} />
      <ImageShowcase images={images} i={i} />
    </div>
  );
}

export default ProductImageSlider;
