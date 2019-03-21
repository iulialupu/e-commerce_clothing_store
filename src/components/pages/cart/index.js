import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  removeFromCart,
  incrementAmount,
  decrementAmount,
  clearCart
} from "../../../actions";
import WishlisCartItem from "../wishlist/WishlistCartItem";
import "../wishlist/Wishlist.css";
import AddWishlistBtn from "../../AddWishlistBtn";
import GridCell from "../wishlist/GridCell";
import Newsletter from "../home/Newsletter";
import "./Cart.css";
import PayPalBtn from "./PayPalBtn";

function Cart({
  cart,
  removeFromCart,
  incrementAmount,
  decrementAmount,
  clearCart
}) {
  const [paymentStatus, setPaymentStaus] = useState(null);
  const paymentText = getPaymentFeedback(paymentStatus);
  function getPaymentFeedback(paymentStatus) {
    switch (paymentStatus) {
      case "success":
        return "Your payment was successful!";
      case "canceled":
        return "You canceled the payment";
      case "error":
        return "Sorry, there was an error";
      default:
        return "";
    }
  }

  const total = cart.length
    ? parseFloat(
        cart
          .map(item => item.price * item.amount)
          .reduce((total, item) => total + item)
          .toFixed(2)
      )
    : 0;

  const onSuccess = payment => {
    setPaymentStaus("success");
    console.log("The payment was succeeded!", payment);
    clearCart();
  };

  const onCancel = data => {
    setPaymentStaus("canceled");
    console.log("The payment was cancelled!", data);
  };

  const onError = err => {
    setPaymentStaus("error");
    console.log("Error!", err);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCartItems = () => {
    return cart.map(product => (
      <WishlisCartItem
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
          <GridCell>
            <button
              className="quantity-btn"
              onClick={() => decrementAmount(product.id)}
              disabled={product.amount === 1}
            >
              -
            </button>
            <span>{` ${product.amount} `}</span>
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
            <span className="price">
              $ {(product.price * product.amount).toFixed(2)}
            </span>
          </GridCell>
        </div>
        <AddWishlistBtn
          text="Move"
          id={product.id}
          classProp="wishlist-btn-big"
        />
      </WishlisCartItem>
    ));
  };

  return (
    <>
      <main className="cart">
        <div className="cart-page-wrapper">
          <div className="cart-wrapper">
            <h3>
              {cart.length
                ? `You have ${cart.length} ${
                    cart.length === 1 ? "item" : "items"
                  } in
            your cart`
                : null}
            </h3>
            {cart.length ? (
              renderCartItems()
            ) : (
              <div style={{ textAlign: "center" }}>
                You have no items in your bag
              </div>
            )}
          </div>

          <div className="order-details">
            <h3>Order Summary</h3>
            <div className="order-details-box">
              <p>Order value</p>
              <span>$ {total}</span>
              <p>Delivery</p>
              <span>Free</span>
              <p className="total">Total</p>
              <span className="total">$ {total}</span>
              <PayPalBtn
                total={total}
                style={{ marginTop: "20px" }}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
            </div>
            <p>{paymentText}</p>
          </div>
        </div>
      </main>
      <Newsletter />
    </>
  );
}

const mapStateToProps = state => ({
  cart: Object.values(state.cart)
});

export default connect(
  mapStateToProps,
  { removeFromCart, incrementAmount, decrementAmount, clearCart }
)(Cart);
