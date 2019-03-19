import React from "react";

import DeleteBtn from "../../DeleteBtn";

const WishlistItem = ({ id, img, children, removeItem }) => {
  return (
    <div className="wishlist-item">
      <img src={img[0]} />

      <div className="wishlist-item-content">{children}</div>

      <DeleteBtn handleClick={() => removeItem(id)} />
    </div>
  );
};

export default WishlistItem;
