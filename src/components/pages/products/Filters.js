import React from "react";
import { connect } from "react-redux";

import {
  listOfCategories as listOfArticles,
  listOfCollections
} from "../../variables";
import { addFilter } from "../../../actions";

function Filters(props) {
  console.log("props from filters", props);

  const renderCategoryValues = (category, arr) => {
    return arr.map((categoryValue, index) => {
      console.log("a-", categoryValue);
      return (
        <li
          className="category-value"
          key={index}
          onClick={e => handleClick(e, { [category]: categoryValue })}
        >
          {categoryValue}
        </li>
      );
    });
  };

  const handleClick = (e, filter) => {
    console.log(filter);
    e.target.classList.add("active");
    props.addFilter(filter);
  };

  return (
    <aside className="filters">
      <h3>Filters</h3>
      <ul>
        <li onClick={e => handleClick(e, { new: true })}>New In</li>

        <li onClick={e => handleClick(e, { inStock: true })}>In Stock</li>

        <li className="category">
          Articles:
          <ul>{renderCategoryValues("articles", listOfArticles)}</ul>
        </li>

        <li className="category">
          Collections:
          <ul>{renderCategoryValues("collections", listOfCollections)}</ul>
        </li>
      </ul>
    </aside>
  );
}

export default connect(
  null,
  { addFilter }
)(Filters);
