import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

function MenuBar() {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate(); // Initialize navigation

  const menuItems = ["Dashboard", "Activity", "Reports", "Settings", "Logout"];

  const handleMenuClick = (item) => {
    if (item === "Logout") {
      handleLogout(); // Call the logout function if the user clicks "Logout"
    } else {
      setActive(item); // Set the active item for other menu items
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole"); // Clear session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="menu-bar">
      <h4 className="menu-title">Menu</h4>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`menu-item ${active === item ? "active" : ""}`}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuBar;
