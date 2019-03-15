import React from "react";
import { connect } from "react-redux";

import { changeActiveImageIndexScroll } from "../../../actions";

function ImageShowcase({ images, imgIndex, changeActiveImageIndexScroll }) {
  const image = React.useRef(null);
  const imageShowcase = React.useRef(null);

  React.useEffect(() => {
    if (image.current) {
      image.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = () => {
    const arrImageNodes = imageShowcase.current.childNodes;
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollAtHalfScreenHight = window.scrollY + screenHeight / 2;
    let index;

    for (let i = 0; i < arrImageNodes.length; i++) {
      const topCoord = arrImageNodes[i].offsetTop;
      const bottomCoord =
        arrImageNodes[i].offsetHeight + arrImageNodes[i].offsetTop;

      if (
        topCoord < scrollAtHalfScreenHight &&
        bottomCoord > scrollAtHalfScreenHight
      )
        index = i;
    }

    if (index === undefined) index = null;
    changeActiveImageIndexScroll(index);
  };

  const renderThumbnails = () => {
    return images.map((img, index) => {
      return (
        <img
          src={img}
          id={index}
          alt=""
          id={index}
          key={index}
          ref={index === imgIndex ? image : null}
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

const mapStateToProps = state => ({
  imgIndex: state.activeImageIndex.clickedImageIndex
});

export default connect(
  mapStateToProps,
  { changeActiveImageIndexScroll }
)(ImageShowcase);
