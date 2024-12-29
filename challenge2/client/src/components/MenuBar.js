import React, { useState } from "react";

function MenuBar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = ["Dashboard", "Activity", "Reports", "Settings", "Logout"];
 
  return (
    <div className="menu-bar">
      <h4 className="menu-title">Menu</h4>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`menu-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
