import React from "react";

import image from "../../../img/promo.jpg";
import ShopNowBtn from "../../ShopNowBtn";
import Parallax from "./Parallax";

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.text = React.createRef();
    this.parent = React.createRef();
  }

  render() {
    return (
      <section className="first-screen flex-center" ref={this.parent}>
        <div className="promo-image">
          <Parallax
            stylePropriety="left"
            speed={0.15}
            childRef={this.image}
            parentRef={this.parent}
          >
            <div className="image-container" ref={this.image}>
              <img src={image} alt="Promo" />
            </div>
          </Parallax>
        </div>

        <Parallax
          stylePropriety="right"
          speed={0.16}
          childRef={this.text}
          parentRef={this.parent}
        >
          <div ref={this.text} className="text-box">
            <h1 className="heading1">
              We Create clothes, but you create yourself
            </h1>
            <p>
              We have a large collection where you will certainly find something
              that will suit your personality.
            </p>
            <ShopNowBtn />
          </div>
        </Parallax>
      </section>
    );
  }
}

export default FirstScreen;
