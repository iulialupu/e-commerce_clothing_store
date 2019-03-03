import React from "react";
import ShopNowBtn from "../../ShopNowBtn";

function NewCollectionsSection() {
  return (
    <section className="spring-collection">
      <div className="container">
        <div className="spring-collection-grid">
          <img
            src="https://i.pinimg.com/originals/7f/40/64/7f4064a95c618385df50cac70f7c57ec.jpg"
            alt="Spring 2019 Collection"
          />
          <img
            src="https://www.designscene.net/wp-content/uploads/2018/04/Gigi-Hadid-Vogue-Eyewear-SS18-01.jpg"
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
