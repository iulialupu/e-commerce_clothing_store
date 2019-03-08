import React from "react";

import "./Home.css";

import FirstScreen from "./FirstScreen";
import NewArrivalsSection from "./NewArrivalsSection";
import SpringCollectionSection from "./SpringCollectionSection";
import ProductSlider from "./ProductsSlider";
import { listOfCategories, listOfImageUrls } from "../../variables";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <main>
      <FirstScreen />
      <SpringCollectionSection />
      <NewArrivalsSection />
      <ProductSlider
        listOfImageUrls={listOfImageUrls}
        listofCategories={listOfCategories}
      />
      <Newsletter />
    </main>
  );
}

export default Home;
