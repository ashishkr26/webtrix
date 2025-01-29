import React from "react";
import { useSelector } from "react-redux";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import StreamIcon from "@mui/icons-material/Stream";
import CableIcon from "@mui/icons-material/Cable";
import HelpIcon from "@mui/icons-material/Help";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return isMenuOpen === false ? null : (
    <div className="shadow-lg bg-gray-100   fixed  z-50 h-full w-60">
      <ul className="my-2 p-2 lg:text-lg md:text-sm sm:text-xs font-semibold">
        <Link to="/">
          <li className="cursor-pointer hover:bg-white flex items-center list-none p-2 hover:scale-105 transition-all ease-in-out">
            <span className="text-yellow-500">
              <HomeIcon />
            </span>
            <span className="mt-2 px-2">Home</span>
          </li>
        </Link>
        <li className="cursor-pointer  flex items-center list-none p-2 hover:bg-white hover:scale-105 transition-all ease-in-out">
          <span className="text-yellow-500">
            <CategoryIcon />
          </span>
          <span className="mt-2 px-2">Products</span>
        </li>
        <Link to="/services">
          <li className="cursor-pointer  flex items-center list-none p-2 hover:scale-105 hover:bg-white  transition-all ease-in-out">
            <span className="text-yellow-500">
              <StreamIcon />
            </span>
            <span className="mt-2 px-2">Services</span>
          </li>
        </Link>
        <Link to="/contact-us">
          <li className="cursor-pointer  flex items-center list-none p-2 hover:scale-105 hover:bg-white  transition-all ease-in-out">
            <span className="text-yellow-500">
              <CableIcon />
            </span>
            <span className="mt-2 px-2">Contact Us</span>
          </li>
        </Link>
        <Link to ="/quote-on-demand">
        <li className="cursor-pointer  flex items-center list-none p-2 hover:scale-105 hover:bg-white  transition-all ease-in-out">
          <span className="text-yellow-500">
            <RequestQuoteIcon />
          </span>
          <span className="mt-2 px-2">Request A Demo</span>
        </li>
        </Link>
        <li className="cursor-pointer  flex items-center list-none p-2 hover:scale-105 hover:bg-white  transition-all ease-in-out">
          <span className="text-yellow-500">
            <HelpIcon />
          </span>
          <span className="mt-2 px-2">Help</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
