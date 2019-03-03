import React from "react";

import "./Home.css";

import FirstScreen from "./FirstScreen";
import NewArrivalsSection from "./NewArrivalsSection";
import SpringCollectionSection from "./SpringCollectionSection";

function Home() {
  return (
    <main>
      <FirstScreen />
      <SpringCollectionSection />
      <NewArrivalsSection />
    </main>
  );
}

export default Home;
