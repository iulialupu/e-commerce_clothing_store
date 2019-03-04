import React from "react";
import Slider from "react-slick";

import CarouselProductItem from "./CarouselProductItem";
import ShopNowBtn from "../../ShopNowBtn";

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
  console.log(document.documentElement.clientWidth);

  return (
    <section className="products-slider">
      <Slider
        {...settings}
        slidesToShow={window.screen.availWidth > 800 ? 4 : 2}
        style={{ outline: "none" }}
      >
        <div className="home-product-card">
          <img src={props.listOfImageUrls[0]} alt={props.listofCategories[0]} />
          <h3>{props.listofCategories[0]}</h3>
          <ShopNowBtn />
        </div>

        <div className="home-product-card">
          <img src={props.listOfImageUrls[1]} alt={props.listofCategories[1]} />
          <h3>{props.listofCategories[1]}</h3>
          <ShopNowBtn />
        </div>

        <div className="home-product-card">
          <img src={props.listOfImageUrls[2]} alt={props.listofCategories[2]} />
          <h3>{props.listofCategories[2]}</h3>
          <ShopNowBtn />
        </div>

        <div className="home-product-card">
          <img src={props.listOfImageUrls[3]} alt={props.listofCategories[3]} />
          <h3>{props.listofCategories[3]}</h3>
          <ShopNowBtn />
        </div>

        <div className="home-product-card">
          <img src={props.listOfImageUrls[4]} alt={props.listofCategories[4]} />
          <h3>{props.listofCategories[4]}</h3>
          <ShopNowBtn />
        </div>

        <div className="home-product-card">
          <img src={props.listOfImageUrls[5]} alt={props.listofCategories[5]} />
          <h3>{props.listofCategories[5]}</h3>
          <ShopNowBtn />
        </div>
      </Slider>
    </section>
  );
}

export default ProductSlider;
