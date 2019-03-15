import React from "react";
import { connect } from "react-redux";

import { changeActiveImageIndexClick } from "../../../actions";

function Thumbnail({ index, url, changeActiveImageIndexClick, imgIndex }) {
  const handleClick = (e, index) => {
    e.preventDefault();
    changeActiveImageIndexClick(index);
  };

  return (
    <li className="thumbnail">
      <a
        href={`#${index}`}
        onClick={e => handleClick(e, index)}
        className={imgIndex === index ? "active" : null}
      />
      <img src={url} />
    </li>
  );
}

const mapStateToProps = state => ({
  imgIndex: state.activeImageIndex.scrolledImageIndex
});

export default connect(
  mapStateToProps,
  { changeActiveImageIndexClick }
)(Thumbnail);
