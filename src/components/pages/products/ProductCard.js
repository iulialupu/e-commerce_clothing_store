import React from "react";

import HoverImageLink from "./HoverImageLink";
import AddWishlistBtn from "../../AddWishlistBtn";

function ProductCard({ name, id, img, isNew, price }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="product-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isNew ? <div className="new">New</div> : null}
      {isHovered ? (
        <AddWishlistBtn id={id} classProp="wishlist-btn-small" />
      ) : null}
      <HoverImageLink id={id} img={img} name={name} isHovered={isHovered} />

      <span className="product-name">{name}</span>
      <span className="price">${price}</span>
    </div>
  );
}

export default ProductCard;
