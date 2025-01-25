import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../assets/store/appSlice";

const Header = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="font-poppins bg-yellow-400 text-white p-2 shadow-lg grid grid-flow-col grid-cols-12  justify-between items-center sticky top-0 z-20">
      {/* Left Menu */}
      <div
        onClick={handleToggleMenu}
        className="p-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer col-span-1"
      >
        {isMenuOpen ? (
          <CloseIcon sx={{ fontSize: 32 }} />
        ) : (
          <MenuIcon sx={{ fontSize: 32 }} />
        )}
      </div>
      <div className="col-span-7 flex">
        <ul className="flex  items-center font-semibold space-x-2 lg:text-base md:text-sm sm:text-sx xs:text-xs">
          <Link to="/">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Home
            </li>
          </Link>
          <Link to="/">
            <li
              tabIndex={0}
              className="p-2 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Products
            </li>
          </Link>
          <Link to="/services">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Services
            </li>
          </Link>
          {/* Search Input */}
        </ul>
        <div className="px-4">
          <input
            className="hidden lg:block lg:w-[500px] md:w-56  p-2 rounded-full text-gray-800 font-light text-sm md:text-base"
            type="text"
            placeholder="Search"
            ref={searchText}
          />
        </div>
      </div>

      {/* Right Button */}
      <div className="col-span-4  flex justify-end  ">
        <Link to="quote-on-demand">
          <button className="lg:text-base md:text-sm sm:text-sx xs:text-xs bg-gradient-to-r from-gray-800 to-gray-400 text-sm  px-4 py-2 rounded-md  font-semibold hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap text-center">
            Demo On Demand
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
