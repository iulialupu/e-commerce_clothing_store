import React from "react";
import { connect } from "react-redux";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";
import { fetchProducts, addFilter } from "../../../actions";

import "./Products.css";

function Products(props) {
  React.useEffect(() => {
    if (props.location.state) {
      props.addFilter(props.location.state);
    }
  }, []);

  let search;
  if (props.filters === {}) {
    search = "";
  } else {
    let searchArr = [];
    for (let key in props.filters) {
      searchArr = [
        ...searchArr,
        `${key}=${
          typeof props.filters[key] === "string"
            ? props.filters[key].replace(" ", "%20")
            : props.filters[key]
        }`
      ];
    }
    search = searchArr.join("&");
  }

  console.log("search = ", search);

  React.useEffect(() => {
    props.fetchProducts(search);
  }, [props.filters]);

  return (
    <div className="products-wrapper">
      <div className="products">
        <Filters filters={props.filters} />
        <div className="sorted-and-products-wrapper">
          <SortedBy filters={props.filters} />
          <ProductsGrid products={props.products} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
    products: Object.values(state.products)
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, addFilter }
)(Products);
