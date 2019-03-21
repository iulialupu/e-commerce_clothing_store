import React from "react";
import { Link } from "react-router-dom";

function Submenu(props) {
  const { submenuItems, navHeight, isOpen, handleMouseLeave, category } = props;
  const display = isOpen ? "block" : "none";

  const renderSubmenu = () => {
    return submenuItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to={{ pathname: "/products", state: { [category]: item } }}>
            {item}
          </Link>
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
