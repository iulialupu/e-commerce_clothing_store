import React from "react";

function GridCell(props) {
  return (
    <div className="grid-cell">
      {props.label !== undefined ? (
        <span className="grid-label">{props.label}</span>
      ) : null}
      {props.children}
    </div>
  );
}

export default GridCell;
