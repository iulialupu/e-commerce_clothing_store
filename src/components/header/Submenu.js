import React from "react";
import { Link } from "react-router-dom";

function Submenu(props) {
  const { submenuItems } = props;

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
    <div className="submenu">
      <ul>{renderSubmenu()}</ul>
    </div>
  );
}

export default Submenu;
