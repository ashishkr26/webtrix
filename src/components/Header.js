import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [sideIcon, setSideIcon] = useState(false);
  return (
    <div className="bg-yellow-400 text-white opacity-70ont-semibold p-2 lg:text-lg md:text-base sm:text-sm shadow-lg">
      <ul className="flex flex-row">
        <li onClick={() => setSideIcon(!sideIcon)} className="p-2">
          {sideIcon ? (
            <MenuIcon sx={{ fontSize: 32 }} />
          ) : (
            <CloseIcon sx={{ fontSize: 32 }} />
          )}
        </li>
        <li className="p-2 ">Home</li>
        <li className="p-2">Products</li>
        <li className="p-2">Services</li>
        <li className="px-10 py-1">
          <input
            className="lg:w-96 md:w-56 sm:w-32 p-2 flex flex-grow justify-center items-center rounded-full"
            type="text"
            placeholder="Search"
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
