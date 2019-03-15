import React from "react";
import ShopNowBtn from "../../ShopNowBtn";

const CarouselProductItem = ({ imageUrl, productCategory }) => {
  return (
    <div className="home-product-card">
      <img src={imageUrl} alt={productCategory} />
      <p>{productCategory}</p>
      <ShopNowBtn
        to={{
          pathname: "/products",
          state: { article: productCategory }
        }}
      />
    </div>
  );
};

export default CarouselProductItem;
