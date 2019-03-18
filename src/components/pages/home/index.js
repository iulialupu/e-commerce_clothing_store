import React from "react";

import "./Home.css";

import FirstScreen from "./FirstScreen";
import NewArrivalsSection from "./NewArrivalsSection";
import SpringCollectionSection from "./SpringCollectionSection";
import ProductSlider from "./ProductsSlider";
import { listOfCategories, listOfImageUrls } from "../../variables";
import Newsletter from "./Newsletter";
import CarouselProductItem from "./CarouselProductItem";

function Home() {
  return (
    <main>
      <FirstScreen />
      <SpringCollectionSection />
      <NewArrivalsSection />

      <section className="products-slider">
        <ProductSlider>
          {listOfImageUrls.map((url, index) => {
            return (
              <CarouselProductItem
                imageUrl={url}
                productCategory={listOfCategories[index]}
              />
            );
          })}
        </ProductSlider>
      </section>

      <Newsletter />
    </main>
  );
}

export default Home;
