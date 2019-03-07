import React from "react";
import { connect } from "react-redux";

import ProductCard from "./ProductCard";
import { fetchProducts } from "../../../actions";

function ProductsGrid(props) {
  React.useEffect(() => {
    props.fetchProducts();
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

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductsGrid);
