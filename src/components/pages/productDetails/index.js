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
import Loading from "../../Loading";

function ProductDetails(props) {
  const id = props.match.params.id;
  const {
    fetchProductById,
    changeActiveImageIndexClick,
    changeActiveImageIndexScroll,
    product
  } = props;

  useEffect(() => {
    fetchProductById(id);

    changeActiveImageIndexClick(0);
    changeActiveImageIndexScroll(0);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="product-details">
      {product ? (
        <div className="product-wrapper">
          <ProductImageSlider images={product.img} />
          <ProductSpecifications product={product} />
        </div>
      ) : (
        <Loading />
      )}

      <section className="see-also">
        <div className="container">
          <h3>You may also like</h3>
          {product ? (
            <RecomendedProductsSlider collection={product.collection} />
          ) : null}
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  {
    fetchProductById,
    changeActiveImageIndexClick,
    changeActiveImageIndexScroll
  }
)(ProductDetails);
