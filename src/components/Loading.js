import React from "react";
import spinner from "../img/loading-spinner.svg";
import "../index.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <img src={spinner} alt="Loading" />
      </div>
    </div>
  );
}

export default Loading;
