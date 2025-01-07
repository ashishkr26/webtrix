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
    <div className="font-poppins bg-yellow-400 text-white  p-2 lg:text-lg md:text-base sm:text-sm shadow-lg flex justify-between sticky top-0 z-20">
      <ul className="flex flex-row font-semibold">
        <li
          onClick={handleToggleMenu}
          className="p-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
        >
          {isMenuOpen === false ? (
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
        <Link to="/">
          <li
            tabIndex={0}
            className="p-2 hover:scale-110 transition-all duration-300 ease-in-out flex"
          >
            Products
          </li>
        </Link>
        <Link to="/services">
          <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out flex">
            Services{" "}
          </li>
        </Link>
        <li className="px-10 py-1 hover:scale-105 transition-all duration-300 ease-in-out">
          <input
            className="lg:w-[500px] md:w-56 sm:w-32 p-2 flex flex-grow justify-center items-center rounded-full text-gray-800 font-light text-base "
            type="text"
            placeholder="Search"
            ref={searchText}
          />
        </li>
      </ul>
      <div>
        <Link to="quote-on-demand">
          <button className="bg-gradient-to-r from-gray-800  to-gray-400 p-2 mt-1 rounded-md border border-white font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
            {" "}
            Demo On Demand
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
