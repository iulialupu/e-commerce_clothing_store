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

    for (let i = 0; i < arrImageNodes.length; i++) {
      const topCoord = arrImageNodes[i].offsetTop;
      const bottomCoord =
        arrImageNodes[i].offsetHeight + arrImageNodes[i].offsetTop;

      if (
        topCoord < scrollAtHalfScreenHight &&
        bottomCoord > scrollAtHalfScreenHight
      ) {
        console.log("id=", i);
        console.log(
          "top=",
          topCoord,
          "bottom=",
          bottomCoord,
          "half screen=",
          scrollAtHalfScreenHight
        );
        return i;
      }
    }
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
