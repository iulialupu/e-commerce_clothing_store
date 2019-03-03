import React from "react";
import ShopNowBtn from "../../ShopNowBtn";

function NewCollectionsSection() {
  return (
    <section className="new-arrivals ">
      <div className="container">
        <div className="new-arrivals-grid">
          <img
            src="https://staticpages.mngbcn.com/homes/images/ss19/she/febrero/she_campaignss19_02_19.jpg?imwidth=1280&imdensity=1.5"
            alt="New Arrivals"
          />
          <h2>New Vision. New Opportunities</h2>
          <p>
            Discover the latest trends. Find everything from casual day dresses
            to sharp office wear. We have jeans in every fit, premium quality
            items and the latest fashion essentials.
          </p>
          <ShopNowBtn />
        </div>
      </div>
    </section>
  );
}

export default NewCollectionsSection;
