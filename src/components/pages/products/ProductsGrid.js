import React from "react";

import ProductCard from "./ProductCard";

function ProductsGrid(props) {
  console.log("grid", props);
  return (
    <main className="products-grid">
      {props.products.length === 0 && (
        <p style={{ paddingTop: "10vh" }}>
          No items have been found with the selected characteristics. <br />
          Try to remove some of the selected filters.
        </p>
      )}
      {props.products
        ? props.products.map(product => {
            return <ProductCard key={product.id} {...product} />;
          })
        : "Loading"}
    </main>
  );
}

export default ProductsGrid;
