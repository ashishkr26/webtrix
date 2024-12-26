import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return isMenuOpen === false ? (
    null
  ) : (
    <div className="fixed bg-white z-50 p-4">
      <ul>
        <li>Home</li>
        <li>Products</li>
      </ul>
    </div>
  );
};

export default SideBar;
