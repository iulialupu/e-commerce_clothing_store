import React from "react";
import { Link } from "react-router-dom";

const IconLink = ({ link, src, alt }) => {
  return (
    <Link to={`/${link}`}>
      <div className="nav-icon">
        <img src={src} alt={alt} />
        <span className="w-and-c-amount">(0)</span>
      </div>
    </Link>
  );
};

export default IconLink;
