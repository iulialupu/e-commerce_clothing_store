import React from "react";

const ActiveFilter = props => {
  return (
    <div className="active-filter">
      {props.content}
      <button className="delete-filter">x</button>
    </div>
  );
};

export default ActiveFilter;
