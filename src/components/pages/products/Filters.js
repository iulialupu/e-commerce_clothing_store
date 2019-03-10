import React from "react";
import { Link } from "react-router-dom";

import {
  listOfCategories as listOfArticles,
  listOfCollections
} from "../../variables";
import { addFilter } from "../../../actions";

function Filters() {
  const renderCategoryValues = (category, arr) => {
    return arr.map((categoryValue, index) => {
      console.log("a-", categoryValue);
      return (
        <li
          className="category-value"
          key={index}
          onClick={() => addFilter({ [category]: categoryValue })}
        >
          {categoryValue}
        </li>
      );
    });
  };

  return (
    <aside className="filters">
      <h3>Filters</h3>
      <ul>
        <li onClick={() => addFilter({ new: true })}>New In</li>

        <li onClick={() => addFilter({ inStock: true })}>In Stock</li>

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

export default Filters;
