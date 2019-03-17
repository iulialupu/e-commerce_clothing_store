import React from "react";
import { connect } from "react-redux";

import { addWishlistItem, removeWishlistItem } from "../actions";
import heart from "../img/heart.svg";

const AddCartBtn = props => {
  const { id, addWishlistItem, removeWishlistItem, wishlistItems } = props;

  function handleClick() {
    wishlistItems.includes(id) ? removeWishlistItem(id) : addWishlistItem(id);
  }

  return (
    <button className="wishlist-btn" onClick={handleClick}>
      {wishlistItems.includes(id) ? "💕" : <img src={heart} alt="heart icon" />}
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
