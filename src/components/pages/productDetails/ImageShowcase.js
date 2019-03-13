import React from "react";

function ImageShowcase({ images }) {
  const renderThumbnails = () => {
    return images.map((img, index) => {
      return (
        <div id={index} key={index} className="img-container flex-center">
          <img src={img} id={index} alt="" />
        </div>
      );
    });
  };
  return <div className="image-showcase flex-center">{renderThumbnails()}</div>;
}

export default ImageShowcase;
