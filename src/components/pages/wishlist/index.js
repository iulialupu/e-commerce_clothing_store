import React, { useEffect } from "react";
import { connect } from "react-redux";

import GridCell from "./GridCell";
import ProductForm from "../../ProductForm";
import WishlistItem from "./WishlistItem";
import Newsletter from "../home/Newsletter";
import { fetchProducts, removeWishlistItem } from "../../../actions";
import "./Wishlist.css";

function Wishlist(props) {
  const { fetchProducts, wishlist, products, removeWishlistItem } = props;

  function convertToSearchString() {
    return wishlist.map(item => `id=${item}`).join("&");
  }

  useEffect(() => {
    if (wishlist.length > 0) {
      fetchProducts(convertToSearchString());
    }
  }, [wishlist]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderWishlistItems = () => {
    return products
      .filter(product => wishlist.includes(product.id))
      .map(product => (
        <WishlistItem
          id={product.id}
          img={product.img}
          removeItem={removeWishlistItem}
        >
          <div className="wishlist-grid">
            <GridCell>
              <h4>{product.name}</h4>
            </GridCell>
            <GridCell>
              <div className="price">${product.price}</div>
            </GridCell>
          </div>
          <ProductForm product={product} />
        </WishlistItem>
      ));
  };

  return (
    <>
      <main className="wishlist">
        <div className="wishlist-wrapper">
          <h3>
            You have {wishlist.length}{" "}
            {wishlist.length === 1 ? "item" : "items"} in your wishlist
          </h3>

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
  { fetchProducts, removeWishlistItem }
)(Wishlist);
