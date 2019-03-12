import React from "react";
import { connect } from "react-redux";

import DeleteBtn from "../../DeleteBtn";

import {
  listOfCategories as listOfArticles,
  listOfCollections
} from "../../variables";
import { addFilter } from "../../../actions";

function Filters(props) {
  const [isOpen, setOpen] = React.useState(false);

  const renderCategoryValues = (category, arr) => {
    return arr.map((categoryValue, index) => {
      return (
        <li
          className="category-value"
          key={index}
          onClick={() => handleFilterClick({ [category]: categoryValue })}
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

  const handleFilterClick = filter => {
    props.addFilter(filter);
  };

  return (
    <>
      {/* Button for media queries < 480px */}
      {!isOpen ? (
        <div className="open-btn" onClick={() => setOpen(true)} />
      ) : null}

      <aside className={isOpen ? "filters open" : "filters closed"}>
        {/* Button for media queries < 480px */}
        {isOpen ? <DeleteBtn handleClick={() => setOpen(false)} /> : null}

        <h4>Filters</h4>
        <ul>
          <li
            onClick={() => handleFilterClick({ isNew: true })}
            className={props.filters.isNew ? "active" : null}
          >
            New In
          </li>

          <li
            onClick={() => handleFilterClick({ inStock: true })}
            className={props.filters.inStock ? "active" : null}
          >
            In Stock
          </li>

          <li className="category">
            Articles:
            <ul>{renderCategoryValues("article", listOfArticles)}</ul>
          </li>

          <li className="category">
            Collections:
            <ul>{renderCategoryValues("collection", listOfCollections)}</ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default connect(
  null,
  { addFilter }
)(Filters);
