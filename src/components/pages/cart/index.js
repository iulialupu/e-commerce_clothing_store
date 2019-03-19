import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  removeFromCart,
  incrementAmount,
  decrementAmount
} from "../../../actions";
import WishlistItem from "../wishlist/WishlistItem";
import "../wishlist/Wishlist.css";
import AddWishlistBtn from "../../AddWishlistBtn";
import GridCell from "../wishlist/GridCell";

function Cart({ cart, removeFromCart, incrementAmount, decrementAmount }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("cart props", cart);

  const renderCartItems = () => {
    return cart.map(product => (
      <WishlistItem
        id={product.id}
        img={product.img}
        removeItem={removeFromCart}
      >
        <div className="wishlist-grid">
          <GridCell>
            <h4>{product.name}</h4>
          </GridCell>
          <GridCell label="Price:">
            <span className="price">$ {product.price}</span>
          </GridCell>
          <GridCell label="Colour:">
            <div
              className="color-sample"
              style={{ backgroundColor: product.color }}
            />
          </GridCell>
          <GridCell label="Quantity:">
            <button
              className="quantity-btn"
              onClick={() => decrementAmount(product.id)}
              disabled={product.amount == 1}
            >
              -
            </button>
            <span>{product.amount}</span>
            <button
              className="quantity-btn"
              onClick={() => incrementAmount(product.id)}
            >
              +
            </button>
          </GridCell>
          <GridCell label="Size:">
            <span>{product.size}</span>
          </GridCell>
          <GridCell label="Total:">
            <span className="total">
              $ {(product.price * product.amount).toFixed(2)}
            </span>
          </GridCell>
        </div>
        <AddWishlistBtn
          text="Move"
          id={product.id}
          classProp="wishlist-btn-big"
        />
      </WishlistItem>
    ));
  };

  return (
    <main className="cart">
      <div className="wishlist-wrapper">
        <h3>
          You have {cart.length} {cart.length === 1 ? "item" : "items"} in your
          cart
        </h3>

        {cart ? renderCartItems() : null}
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  cart: Object.values(state.cart)
});

export default connect(
  mapStateToProps,
  { removeFromCart, incrementAmount, decrementAmount }
)(Cart);
