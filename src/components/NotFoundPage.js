import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const styleDiv = {
    padding: "120px 10px 200px",
    textAlign: "center"
  };
  const styleH3 = { fontSize: "2.6rem", paddingBottom: "2rem" };
  return (
    <div style={styleDiv}>
      <h2 style={styleH3}>Sorry, the page you're looking for was not found</h2>
      <p>
        Go to the <Link to="/products">products page</Link> to see our latest
        collections.
      </p>
    </div>
  );
}

export default NotFoundPage;
