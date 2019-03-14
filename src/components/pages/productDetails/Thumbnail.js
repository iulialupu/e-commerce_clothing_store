import React from "react";

function Thumbnail({ index, url, handleClick }) {
  return (
    <li className="thumbnail">
      <a href={`#${index}`} onClick={e => handleClick(e, index)} />
      <img src={url} />
    </li>
  );
}

export default Thumbnail;
