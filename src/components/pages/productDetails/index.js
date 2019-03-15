import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProductImageSlider from "./ProductImageSlider";
import ProductSpecifications from "./ProductSpecifications";
import {
  fetchProductById,
  changeActiveImageIndexClick,
  changeActiveImageIndexScroll
} from "../../../actions";
import Newsletter from "../home/Newsletter";
import RecomendedProductsSlider from "./RecomendedProductsSlider";

function ProductDetails(props) {
  console.log("index", props);
  const id = props.match.params.id;
  const {
    fetchProductById,
    changeActiveImageIndexClick,
    changeActiveImageIndexScroll,
    products
  } = props;

  useEffect(() => {
    fetchProductById(id);
    console.log("fetching id", id);

    changeActiveImageIndexClick(0);
    changeActiveImageIndexScroll(0);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="product-details">
      {products[id] ? (
        <div className="product-wrapper">
          <ProductImageSlider images={products[id].img} />
          <ProductSpecifications product={products[id]} />
        </div>
      ) : (
        "Loading..."
      )}

      <section className="see-also">
        <div className="container">
          <h3>You may also like</h3>
          {products[id] ? (
            <RecomendedProductsSlider collection={products[id].collection} />
          ) : null}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  {
    fetchProductById,
    changeActiveImageIndexClick,
    changeActiveImageIndexScroll
  }
)(ProductDetails);
