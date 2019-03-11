import React from "react";

import ProductCard from "./ProductCard";

function ProductsGrid(props) {
  console.log("products grid props", props);

  return (
    <main className="products-grid">
      {props.products
        ? props.products.map(product => {
            return <ProductCard key={product.id} {...product} />;
          })
        : "Loading"}
    </main>
  );
}

export default ProductsGrid;
