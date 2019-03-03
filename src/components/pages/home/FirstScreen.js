import React from "react";

import image from "../../../img/promo.jpg";
import ShopNowBtn from "../../ShopNowBtn";
import Parallax from "./Parallax";

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
    this.text = React.createRef();

    //   this.state = {
    //     scroll: 0
    //   };

    //   this.handleScroll = this.handleScroll.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }
  // handleScroll() {
  //   this.setState({ scroll: window.scrollY });
  // }
  // componentDidUpdate() {
  //   console.log("scroll", this.state.scroll);
  //   this.img.current.style.left = `${this.state.scroll * 0.1}px`;
  //   console.log("img", this.img.current.style);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  render() {
    return (
      <section className="first-screen flex-center">
        <div className="promo-image">
          <Parallax stylePropriety="left" speed={0.1} childRef={this.image}>
            <img ref={this.image} src={image} alt="Presentational image" />
          </Parallax>
        </div>

        <Parallax stylePropriety="right" speed={0.16} childRef={this.text}>
          <div ref={this.text} className="first-screen-text-wrapper">
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
