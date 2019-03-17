import React, { useEffect } from "react";
import { connect } from "react-redux";

import WishlistItem from "./WishlistItem";
import { removeWishlistItem, addToCart, fetchProducts } from "../../../actions";

function Wishlist(props) {
  const {
    removeWishlistItem,
    addToCart,
    fetchProducts,
    wishlistItems,
    products
  } = props;
  console.log(props);

  function convertToSearchString() {
    return wishlistItems.map(item => `id=${item}`).join("&");
  }
  console.log(convertToSearchString());

  useEffect(() => {
    fetchProducts(convertToSearchString());
  }, []);

  return (
    <main>
      <WishlistItem />
    </main>
  );
}

const mapStateToProps = state => ({
  wishlistItems: state.wishlist,
  products: state.products
});

export default connect(
  mapStateToProps,
  { removeWishlistItem, addToCart, fetchProducts }
)(Wishlist);
