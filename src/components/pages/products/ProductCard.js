import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ name, id, img, isNew, price, color }) {
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
      <img src={!isHovered ? img[0] : img[1]} alt={name} />
      <span className="product-name">{name}</span>
      <span className="price">${price}</span>
    </Link>
  );
}

export default ProductCard;
