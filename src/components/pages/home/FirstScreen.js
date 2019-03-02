import React from "react";

import image from "../../img/promo.jpg";
import ShopNowBtn from "../ShopNowBtn";

const FirstScreen = () => {
  return (
    <section>
      <div className="promo-image">
        <img src={image} alt="Presentational image" />
      </div>
      <div className="first-screen-text-wrapper">
        <h1>We Create clothes,but you create yourself</h1>
        <p>
          We have a large collection where you will certainly find somethingthat
          will suit your personality.
        </p>
        <ShopNowBtn />
      </div>
    </section>
  );
};

export default FirstScreen;
