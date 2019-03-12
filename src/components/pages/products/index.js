import React from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import Filters from "./Filters";
import SortedBy from "./SortedBy";
import ProductsGrid from "./ProductsGrid";
import { fetchFirstProducts, fetchRestProducts } from "../../../actions";

import "./Products.css";

function Products(props) {
  const [count, setCount] = React.useState(1);

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
    props.fetchFirstProducts(search);
    console.log("fetching", props.products);
  }, [props.filters]);

  const fetchProducts = () => {
    setCount(count + 1);
    console.log("fetching rest", props.products);
    fetchRestProducts(count, search);
  };

  console.log("props from index", props);
  return (
    <div className="products-wrapper">
      <div className="products">
        <Filters filters={props.filters} />
        <div className="sorted-and-products-wrapper">
          <SortedBy filters={props.filters} />

          <InfiniteScroll
            dataLength={props.products.length}
            next={fetchProducts}
            hasMore={true}
            loader="Loading...1"
          >
            <ProductsGrid products={props.products} />
          </InfiniteScroll>
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
  { fetchFirstProducts, fetchRestProducts }
)(Products);
