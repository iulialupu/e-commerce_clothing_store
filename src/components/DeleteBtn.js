import React from "react";

const DeleteBtn = props => {
  return (
    <button className="delete-filter" onClick={() => props.handleClick()}>
      x
    </button>
  );
};

export default DeleteBtn;
