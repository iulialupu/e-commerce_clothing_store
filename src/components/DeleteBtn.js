import React from "react";

const DeleteBtn = props => {
  return (
    <button className="delete-btn" onClick={() => props.handleClick()}>
      <div className="line" />
      <div className="line" />
    </button>
  );
};

export default DeleteBtn;
