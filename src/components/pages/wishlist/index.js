import React, { useEffect } from "react";
import { connect } from "react-redux";

import WishlistItem from "./WishlistItem";
import Newsletter from "../home/Newsletter";
import { fetchProducts } from "../../../actions";
import "./Wishlist.css";

function Wishlist(props) {
  const {
    removeWishlistItem,
    addToCart,
    fetchProducts,
    wishlist,
    products
  } = props;
  console.log(props);

  function convertToSearchString() {
    return wishlist.map(item => `id=${item}`).join("&");
  }
  console.log(convertToSearchString());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (wishlist.length > 0) {
      fetchProducts(convertToSearchString());
    }
  }, [wishlist]);

  const renderWishlistItems = () => {
    return products
      .filter(product => wishlist.includes(product.id))
      .map(product => <WishlistItem product={product} />);
  };

  return (
    <>
      <main className="wishlist">
        <div className="wishlist-wrapper">
          <h3>You have {wishlist.length} items in your wishlist</h3>

          {wishlist ? renderWishlistItems() : null}
        </div>
      </main>
      <Newsletter />
    </>
  );
}

const mapStateToProps = state => ({
  wishlist: state.wishlist,
  products: Object.values(state.products)
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Wishlist);
