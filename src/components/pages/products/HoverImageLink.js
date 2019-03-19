import React from "react";
import { Link } from "react-router-dom";

function HoverImageLink({ id, img, isHovered, name }) {
  return (
    <Link to={`/product/${id}`}>
      <img src={!isHovered ? img[0] : img[1]} alt={name} />
    </Link>
  );
}

export default HoverImageLink;
