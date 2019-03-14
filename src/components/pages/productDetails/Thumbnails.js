import React from "react";

import Thumbnail from "./Thumbnail";

function Thumbnails({ images, handleClick }) {
  const renderThumbnails = () => {
    return images.map((img, index) => {
      return (
        <Thumbnail
          key={index}
          url={img}
          index={index}
          handleClick={handleClick}
        />
      );
    });
  };
  return (
    <div className="thumbnails sticky flex-center">
      <ul>{renderThumbnails()}</ul>
    </div>
  );
}

export default Thumbnails;
