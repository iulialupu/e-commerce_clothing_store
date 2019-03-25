import React from "react";
import { useSpring, animated } from "react-spring";

import HoverImageLink from "../products/HoverImageLink";
import DeleteBtn from "../../DeleteBtn";

const WishlistCartItem = ({ id, img, name, children, removeItem }) => {
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
    <animated.div className="wishlist-cart-item" style={props}>
      <div
        className="wishlist-image"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <HoverImageLink id={id} img={img} name={name} isHovered={isHovered} />
      </div>
      <div className="wishlist-item-content">{children}</div>

      <DeleteBtn handleClick={() => removeItem(id)} />
    </animated.div>
  );
};

export default WishlistCartItem;
