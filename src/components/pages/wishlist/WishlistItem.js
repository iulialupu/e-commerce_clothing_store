import React from "react";

import HoverImageLink from "../products/HoverImageLink";
import DeleteBtn from "../../DeleteBtn";

const WishlistItem = ({ id, img, name, children, removeItem }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="wishlist-item">
      <div
        className="wishlist-image"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <HoverImageLink id={id} img={img} name={name} isHovered={isHovered} />
      </div>
      <div className="wishlist-item-content">{children}</div>

      <DeleteBtn handleClick={() => removeItem(id)} />
    </div>
  );
};

export default WishlistItem;
