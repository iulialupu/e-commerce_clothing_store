import React from "react";
import { connect } from "react-redux";

import ProductSlider from "../home/ProductsSlider";
import ProductCard from "../products/ProductCard";
import { fetchProductsByCollection } from "../../../actions";

function RecomendedProductsSlider({
  collection,
  fetchProductsByCollection,
  collectionProducts
}) {
  React.useEffect(() => {
    fetchProductsByCollection(collection.replace(" ", "%20"));
  }, []);
  console.log("collection = ", collection.replace(" ", "%20"));
  return (
    <ProductSlider>
      {collectionProducts
        ? collectionProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        : null}
    </ProductSlider>
  );
}

const mapStateToProps = state => ({
  collectionProducts: state.collectionProducts.products
});

export default connect(
  mapStateToProps,
  {
    fetchProductsByCollection
  }
)(RecomendedProductsSlider);
