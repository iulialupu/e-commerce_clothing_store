import React from "react";
import { Link } from "react-router-dom";

function Submenu(props) {
  const { submenuItems, navHeight, isOpen, handleMouseLeave } = props;
  const display = isOpen ? "block" : "none";

  console.log(props);
  const renderSubmenu = () => {
    return submenuItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to="/products">{item}</Link>
        </li>
      );
    });
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="submenu"
      style={{
        top: `${navHeight}px`,
        display: display
      }}
    >
      <ul>{renderSubmenu()}</ul>
    </div>
  );
}

export default Submenu;
