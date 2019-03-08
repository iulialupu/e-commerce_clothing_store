import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../../../actions";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";

import "./Products.css";

function Products(props) {
  console.log("props from index", props.history.location);
  return (
    <div className="products-wrapper">
      <div className="products">
        <Filters />
        <div className="sorted-and-products-wrapper">
          <SortedBy />
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}

export default connect(
  null,
  { fetchProducts }
)(Products);
