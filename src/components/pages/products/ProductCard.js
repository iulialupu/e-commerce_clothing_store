import React from "react";
import { Link } from "react-router-dom";

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
    <Link
      to={`/product/${id}`}
      className="product-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {isNew ? <div className="new">New</div> : null}
      {isHovered ? <AddWishlistBtn id={id} /> : null}
      <img src={!isHovered ? img[0] : img[1]} alt={name} />
      <span className="product-name">{name}</span>
      <span className="price">${price}</span>
    </Link>
  );
}

export default ProductCard;
