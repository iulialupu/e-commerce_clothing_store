import React from "react";

function Thumbnail({ index, url }) {
  return (
    <li className="thumbnail">
      <a href={`#${index}`} />
      <img src={url} />
    </li>
  );
}

export default Thumbnail;
