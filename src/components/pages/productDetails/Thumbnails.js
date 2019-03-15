import React from "react";

import Thumbnail from "./Thumbnail";

function Thumbnails({ images }) {
  const renderThumbnails = () => {
    return images.map((img, index) => {
      return <Thumbnail key={index} url={img} index={index} />;
    });
  };
  return (
    <div className="thumbnails sticky flex-center">
      <ul>{renderThumbnails()}</ul>
    </div>
  );
}

export default Thumbnails;
