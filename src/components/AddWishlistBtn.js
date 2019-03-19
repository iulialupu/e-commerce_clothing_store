import React from "react";
import { connect } from "react-redux";

import { addWishlistItem, removeWishlistItem } from "../actions";
import heart from "../img/heart.svg";
import filledHeart from "../img/filled-heart.svg";

const AddCartBtn = props => {
  const {
    id,
    addWishlistItem,
    removeWishlistItem,
    wishlistItems,
    classProp,
    text
  } = props;

  const btnText = wishlistItems.includes(id)
    ? "Added to Wishlist"
    : `${text} to Wishlist`;

  function handleClick() {
    wishlistItems.includes(id) ? removeWishlistItem(id) : addWishlistItem(id);
  }

  return (
    <button className={`wishlist-btn ${classProp}`} onClick={handleClick}>
      <img
        src={wishlistItems.includes(id) ? filledHeart : heart}
        alt="heart icon"
      />
      <span className="btn-text">{text ? btnText : null}</span>
    </button>
  );
};

const mapStateToProps = state => ({
  wishlistItems: state.wishlist
});

export default connect(
  mapStateToProps,
  { addWishlistItem, removeWishlistItem }
)(AddCartBtn);
