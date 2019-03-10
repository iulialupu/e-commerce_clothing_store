import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ProductCard from "./ProductCard";
import { fetchProducts } from "../../../actions";

function ProductsGrid(props) {
  console.log("products grid props", props);
  React.useEffect(() => {
    props.fetchProducts();
    console.log("fetching", props.products);
  }, []);

  return (
    <main className="products-grid">
      {props
        ? props.products.map(product => {
            return <ProductCard key={product.id} {...product} />;
          })
        : "Loading"}
    </main>
  );
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchProducts }
  )(ProductsGrid)
);
