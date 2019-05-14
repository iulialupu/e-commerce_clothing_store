import React from "react";

import ProductCard from "./ProductCard";

function ProductsGrid({ products }) {
  return (
    <main className="products-grid">
      <p>{products.length ? `${products.length} items` : null} </p>
      <div className="products-grid-items">
        {products !== [] ? (
          products.map(product => {
            return <ProductCard key={product.id} {...product} />;
          })
        ) : (
          <p style={{ paddingTop: "10vh" }}>
            No items have been found with the selected characteristics. <br />
            Try to remove some of the selected filters.
          </p>
        )}
      </div>
    </main>
  );
}

export default ProductsGrid;
