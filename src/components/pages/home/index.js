import React from "react";

import "./Home.css";

import FirstScreen from "./FirstScreen";
import NewArrivalsSection from "./NewArrivalsSection";
import SpringCollectionSection from "./SpringCollectionSection";
import ProductSlider from "./ProductsSlider";
import { ListOfCategories, ListOfImageUrls } from "../../variables";
import Newsletter from "./Newsletter";

function Home() {
  console.log(ListOfCategories);
  console.log(ListOfImageUrls);

  return (
    <main>
      <FirstScreen />
      <SpringCollectionSection />
      <NewArrivalsSection />
      <ProductSlider
        listOfImageUrls={ListOfImageUrls}
        listofCategories={ListOfCategories}
      />
      <Newsletter />
    </main>
  );
}

export default Home;
