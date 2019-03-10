import React from "react";
import { connect } from "react-redux";

import {
  listOfCategories as listOfArticles,
  listOfCollections
} from "../../variables";
import { addFilter } from "../../../actions";

function Filters(props) {
  const renderCategoryValues = (category, arr) => {
    return arr.map((categoryValue, index) => {
      return (
        <li
          className="category-value"
          key={index}
          onClick={() => handleClick({ [category]: categoryValue })}
          className={
            props.filters[category] === categoryValue
              ? "category-value active"
              : "category-value"
          }
        >
          {categoryValue}
        </li>
      );
    });
  };

  const handleClick = filter => {
    props.addFilter(filter);
  };

  return (
    <aside className="filters">
      <h3>Filters</h3>
      <ul>
        <li
          onClick={() => handleClick({ isNew: true })}
          className={props.filters.isNew ? "active" : null}
        >
          New In
        </li>

        <li
          onClick={() => handleClick({ inStock: true })}
          className={props.filters.inStock ? "active" : null}
        >
          In Stock
        </li>

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
