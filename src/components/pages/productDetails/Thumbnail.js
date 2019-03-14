import React from "react";
import { Link } from "react-scroll";

function Thumbnail({ index, url }) {
  return (
    <li className="thumbnail">
      <Link
        activeClass="active"
        to={`#${index}`}
        spy={true}
        smooth={true}
        duration={500}
      />
      <img src={url} />
    </li>
  );
}

export default Thumbnail;
