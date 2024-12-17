import React, { useState } from "react";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
// import ServiceDrawer from "./headerDrawers/ServiceDrawer";

const Header = () => {
  const [sideIcon, setSideIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="font-poppins bg-yellow-400 text-white opacity-70ont-semibold p-2 lg:text-lg md:text-base sm:text-sm shadow-lg flex justify-between sticky top-0 z-10">
      <ul className="flex flex-row font-semibold">
        <li
          onClick={() => setSideIcon(!sideIcon)}
          className="p-2 hover:scale-110 transition-all duration-300 ease-in-out"
        >
          {sideIcon ? (
            <MenuIcon sx={{ fontSize: 32 }} />
          ) : (
            <CloseIcon sx={{ fontSize: 32 }} />
          )}
        </li>
        <Link to="/">
          <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
            Home
          </li>
        </Link>
        <li
          tabIndex={0}
          // onMouseEnter={() => setOpen(true)}
          // onBlur={() => setOpen(false)}
          className="p-2 hover:scale-110 transition-all duration-300 ease-in-out flex"
        >
          Products
          {open && (
            <Drawer
              sx={{ marginTop: "20px" }}
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
            >
              {" "}
              Hello
            </Drawer>
          )}
        </li>
        <Link to="/our-services">
          <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out flex">
            Services{" "}
          </li>
        </Link>
        <li className="px-10 py-1 hover:scale-105 transition-all duration-300 ease-in-out">
          <input
            className="lg:w-[500px] md:w-56 sm:w-32 p-2 flex flex-grow justify-center items-center rounded-full"
            type="text"
            placeholder="Search"
          />
        </li>
      </ul>
      <div>
        <button className="bg-gradient-to-r from-gray-800  to-gray-400 p-2 mt-1 rounded-md border border-white font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
          {" "}
          Demo On Demand
        </button>
      </div>
    </div>
  );
};

export default Header;
