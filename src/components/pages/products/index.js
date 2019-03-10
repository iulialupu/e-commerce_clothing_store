import React from "react";
import { connect } from "react-redux";

import { fetchProductsByFilter } from "../../../actions";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";

import "./Products.css";

function Products(props) {
  console.log(props.history.location.search);
  const search = props.history.location.search;
  search.split();
  React.useEffect(() => {
    props.fetchProductsByFilter(search);
  }, []);
  console.log("props from index", props);
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
    products: Object.values(state.products)
  };
};

export default connect(
  mapStateToProps,
  { fetchProductsByFilter }
)(Products);
