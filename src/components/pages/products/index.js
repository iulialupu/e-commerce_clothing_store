import React from "react";
import { connect } from "react-redux";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";

import "./Products.css";

function Products(props) {
  //   props.fetchProductsByFilter(search);
  // }, []);
  console.log("props from index", props.filters);
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

const mapStateToProps = state => {
  return {
    filters: Object.values(state.filters)
  };
};

export default connect(mapStateToProps)(Products);
