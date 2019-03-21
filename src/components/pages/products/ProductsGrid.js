import React from "react";

import ProductCard from "./ProductCard";

function ProductsGrid(props) {
  return (
    <main className="products-grid">
      {props.products ? (
        props.products.map(product => {
          return <ProductCard key={product.id} {...product} />;
        })
      ) : (
        <p style={{ paddingTop: "10vh" }}>
          No items have been found with the selected characteristics. <br />
          Try to remove some of the selected filters.
        </p>
      )}
    </main>
  );
}

export default ProductsGrid;
