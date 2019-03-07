import React from "react";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";

import "./Products.css";

function Products() {
  return (
    <div className="products">
      <Filters />
      <div className="sorted-and-products-wrapper">
        <SortedBy />
        <ProductsGrid />
      </div>
    </div>
  );
}

export default Products;
