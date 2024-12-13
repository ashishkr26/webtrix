import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [sideIcon, setSideIcon] = useState(false);
  return (
    <div className="bg-yellow-400 text-white opacity-70ont-semibold p-2 lg:text-lg md:text-base sm:text-sm shadow-lg flex justify-between">
      <ul className="flex flex-row font-semibold">
        <li onClick={() => setSideIcon(!sideIcon)} className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
          {sideIcon ? (
            <MenuIcon sx={{ fontSize: 32 }} />
          ) : (
            <CloseIcon sx={{ fontSize: 32 }} />
          )}
        </li>
        <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">Home</li>
        <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">Products</li>
        <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">Services</li>
        <li className="px-10 py-1 hover:scale-105 transition-all duration-300 ease-in-out">
          <input
            className="lg:w-[500px] md:w-56 sm:w-32 p-2 flex flex-grow justify-center items-center rounded-full"
            type="text"
            placeholder="Search"
          />
        </li>

      </ul>
      <div><button className="bg-gray-500 p-2 mt-1 rounded-md border border-white font-semibold hover:scale-105 transition-all duration-300 ease-in-out"> Demo On Demand</button></div>
    </div>
  );
};

export default Header;
