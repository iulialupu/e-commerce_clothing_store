import React from "react";

function ImageShowcase({ images, i, handleScoll }) {
  const imageContainer = React.useRef(null);
  const imageShowcase = React.useRef(null);

  React.useEffect(() => {
    imageContainer.current.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    console.log("SCROLLING");
  });

  console.log(imageShowcase.current);
  window.addEventListener("scroll", e => {
    console.log(e, "sc");
    console.log(imageShowcase.current.childNodes);
    const arrImageNodes = imageShowcase.current.childNodes;
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollAtHalfScreenHight = window.scrollY + screenHeight / 2;
    const imagesCoordinates = [];

    for (let i = 0; i < arrImageNodes.length; i++) {
      imagesCoordinates.push({
        topCoord: arrImageNodes[i].offsetTop,
        bottomCoord: arrImageNodes[i].offsetHeight + arrImageNodes[i].offsetTop
      });
    }

    const activeImageCoords = imagesCoordinates.filter(
      img =>
        img.topCoord < scrollAtHalfScreenHight &&
        img.bottomCoord > scrollAtHalfScreenHight
    );

    const id = imagesCoordinates.indexOf(activeImageCoords);
    console.log(imagesCoordinates, scrollAtHalfScreenHight);
    console.log("id-", id);
  });

  console.log(imageContainer.current, i);
  const renderThumbnails = () => {
    return images.map((img, index) => {
      return (
        <img
          src={img}
          id={index}
          alt=""
          id={index}
          key={index}
          ref={index === i ? imageContainer : null}
        />
      );
    });
  };
  return (
    <div className="image-showcase flex-center" ref={imageShowcase}>
      {renderThumbnails()}
    </div>
  );
}

export default ImageShowcase;
