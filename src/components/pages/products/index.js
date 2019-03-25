import React from "react";
import { connect } from "react-redux";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";
import { fetchProducts, addFilter } from "../../../actions";

import "./Products.css";

function Products(props) {
  const { location, filters, addFilter, fetchProducts, products } = props;

  React.useEffect(() => {
    if (location.state) {
      addFilter(location.state);
    }
  }, [location.state]);

  const getSearchTerm = () => {
    let search;
    if (filters === {}) {
      search = "";
    } else {
      let searchArr = [];
      for (let key in filters) {
        searchArr = [
          ...searchArr,
          `${key}=${
            typeof filters[key] === "string"
              ? filters[key].replace(" ", "%20")
              : filters[key]
          }`
        ];
      }
      search = searchArr.join("&");
    }
    return search;
  };

  React.useEffect(() => {
    fetchProducts(getSearchTerm());
    window.scrollTo(0, 0);
  }, [filters]);

  return (
    <div className="products-wrapper">
      <div className="products">
        <Filters filters={filters} />
        <div className="sorted-and-products-wrapper">
          <SortedBy filters={filters} />
          <ProductsGrid products={products} />
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
