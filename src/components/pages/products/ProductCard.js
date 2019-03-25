import React from "react";
import { useSpring, animated } from "react-spring";

import HoverImageLink from "./HoverImageLink";
import AddWishlistBtn from "../../AddWishlistBtn";

function ProductCard({ name, id, img, isNew, price }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" }
  });

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <animated.div
      style={props}
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
    </animated.div>
  );
}

export default ProductCard;
