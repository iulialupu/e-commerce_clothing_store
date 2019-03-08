import React from "react";
import { Link } from "react-router-dom";

import {
  listOfCategories as listOfArticles,
  listOfCollections
} from "../../variables";

function Filters() {
  const renderCategoryValues = (category, arr) => {
    return arr.map((categoryValue, index) => {
      console.log("a-", categoryValue);
      return (
        <li className="category-value" key={index}>
          <Link
            to={{
              pathname: "/products",
              search: `?${category}=${categoryValue}`
            }}
          >
            {" "}
            {categoryValue}
          </Link>
        </li>
      );
    });
  };

  return (
    <aside className="filters">
      <ul>
        <li className="category">
          <Link to="products/new">See the Latest Articles</Link>
        </li>

        <li className="category">
          Articles:
          <ul>{renderCategoryValues("articles", listOfArticles)}</ul>
        </li>

        <li className="category">
          Collections:
          <ul>{renderCategoryValues("collections", listOfCollections)}</ul>
        </li>

        <li className="category">
          Size:
          <ul>
            <li className="category-value">
              <Link to={{ pathname: "/products", search: "?size=XS" }}>XS</Link>
            </li>
            <li className="category-value">
              <Link to={{ pathname: "/products", search: "?size=S" }}>S</Link>
            </li>
            <li className="category-value">
              <Link to={{ pathname: "/products", search: "?size=M" }}>M</Link>
            </li>
            <li className="category-value">
              <Link to={{ pathname: "/products", search: "?size=L" }}>L</Link>
            </li>
            <li className="category-value">
              <Link to={{ pathname: "/products", search: "?size=XL" }}>XL</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Filters;
