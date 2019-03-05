import React, { useRef } from "react";
import ShopNowBtn from "../../ShopNowBtn";
import Parallax from "./Parallax";

function NewCollectionsSection() {
  const image = useRef(null);
  return (
    <section className="spring-collection">
      <div className="container">
        <div className="spring-collection-grid">
          <Parallax stylePropriety="top" speed={0.25} childRef={image}>
            <img
              ref={image}
              src="https://d0.static.media.condenast.ru/vogue/c1f312808a0c76f72898adb4c7ab35b4.jpg/685913cb/o/w2000"
              alt="Spring 2019 Collection"
            />
          </Parallax>
          <img
            src="https://d5.static.media.condenast.ru/vogue/a6af7991972e51e5e12ae273d22923d7.jpg/23986b24/o/w2000"
            alt="Spring 2019 Collection"
          />
          <h2>Spring Collection 2019</h2>
          <p>Rediscover yourself</p>
          <ShopNowBtn />
        </div>
      </div>
    </section>
  );
}

export default NewCollectionsSection;
