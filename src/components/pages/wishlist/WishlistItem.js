import React from "react";
import { connect } from "react-redux";

import ProductForm from "../../ProductForm";
import DeleteBtn from "../../DeleteBtn";
import { removeWishlistItem } from "../../../actions";

const WishlistItem = ({ product, removeWishlistItem }) => {
  const { id, name, img, price } = product;
  console.log("product", product);
  return (
    <div className="wishlist-item">
      <img src={img[0]} />

      <div className="wishlist-item-content">
        <div className="wishlist-grid">
          <div className="grid-cell">
            <h4>{name}</h4>
          </div>
          <div className="grid-cell">
            <div className="price">${price}</div>
          </div>
        </div>

        <ProductForm product={product} />
      </div>

      <DeleteBtn handleClick={() => removeWishlistItem(id)} />
    </div>
  );
};

export default connect(
  null,
  { removeWishlistItem }
)(WishlistItem);
