import React from "react";

import ActiveFilter from "./ActiveFilter";

function SortedBy({ filters }) {
  const renderActiveFilters = () => {
    let activeFiltersList = [];
    for (let key in filters) {
      switch (key) {
        case "isNew":
          activeFiltersList = [...activeFiltersList, "New"];
          break;
        case "inStock":
          activeFiltersList = [...activeFiltersList, "In Stock"];
          break;
        case "articles":
          activeFiltersList = [...activeFiltersList, `${key}: ${filters[key]}`];
          break;
        case "collections":
          activeFiltersList = [...activeFiltersList, `${key}: ${filters[key]}`];
          break;
        default:
          return activeFiltersList;
      }
    }

    return activeFiltersList.map(item => <ActiveFilter content={item} />);
  };

  return (
    <div className="sorted-by">
      <h4>Sorted By:</h4>
      {renderActiveFilters()}
    </div>
  );
}

export default SortedBy;
