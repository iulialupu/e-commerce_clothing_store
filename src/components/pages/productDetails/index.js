import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProductImageSlider from "./ProductImageSlider";
import ProductSpecifications from "./ProductSpecifications";
import { fetchProductById } from "../../../actions";
import Newsletter from "../home/Newsletter";

function ProductDetails(props) {
  const id = props.match.params.id;
  const { fetchProductById, products } = props;

  useEffect(() => {
    fetchProductById(id);
    console.log("fetching", id);
  }, []);

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
      <Newsletter />
    </main>
  );
}
const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { fetchProductById }
)(ProductDetails);
