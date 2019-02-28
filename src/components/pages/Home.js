import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="heading1">Home</div>
      <p>lorem ipsum text here will go</p>
      <Link to="/products" className="shop-now-btn">
        Shop Now
      </Link>
    </main>
  );
}

export default Home;
