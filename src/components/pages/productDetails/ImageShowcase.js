import React from "react";

function ImageShowcase({ images, i }) {
  const imageContainer = React.useRef(null);

  React.useEffect(() => {
    imageContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    console.log("SCROLLING");
  });

  console.log(imageContainer.current, i);
  const renderThumbnails = () => {
    return images.map((img, index) => {
      return (
        <div
          id={index}
          key={index}
          className="img-container flex-center"
          ref={index === i ? imageContainer : null}
        >
          <img src={img} id={index} alt="" />
        </div>
      );
    });
  };
  return <div className="image-showcase flex-center">{renderThumbnails()}</div>;
}

export default ImageShowcase;
