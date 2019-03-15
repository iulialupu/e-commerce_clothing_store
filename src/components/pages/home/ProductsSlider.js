import React from "react";
import Slider from "react-slick";

function ProductSlider(props) {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    easing: "ease-out"
  };

  return (
    <div className="products-slider">
      <Slider
        {...settings}
        slidesToShow={window.screen.availWidth > 800 ? 4 : 2}
        {...props.settings}
      >
        {props.children}
      </Slider>
    </div>
  );
}

export default ProductSlider;
