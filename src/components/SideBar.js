import React from "react";
import { useSelector } from "react-redux";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import StreamIcon from "@mui/icons-material/Stream";
import CableIcon from "@mui/icons-material/Cable";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return isMenuOpen === false ? null : (
    <div className="shadow-lg bg-gray-100 w-72 h-full fixed  z-50">
      <ul className="my-4  text-xl font-semibold">
        <Link to="/">
          <li className="cursor-pointer hover:bg-white flex items-center list-none p-2">
            <span className="text-emerald-600">
              <HomeIcon />
            </span>
            <span className="mt-2 px-2">Home</span>
          </li>
        </Link>
        <li className="cursor-pointer hover:bg-white flex items-center list-none p-2">
          <span className="text-emerald-600">
            <CategoryIcon />
          </span>
          <span className="mt-2 px-2">Products</span>
        </li>
        <Link to="/services">
          <li className="cursor-pointer hover:bg-white flex items-center list-none p-2">
            <span className="text-emerald-600">
              <StreamIcon />
            </span>
            <span className="mt-2 px-2">Services</span>
          </li>
        </Link>
        <Link to="/contact-us">
          <li className="cursor-pointer hover:bg-white flex items-center list-none p-2">
            <span className="text-emerald-600">
              <CableIcon />
            </span>
            <span className="mt-2 px-2">Contact Us</span>
          </li>
        </Link>
        <li className="cursor-pointer hover:bg-white flex items-center list-none p-2">
          <span className="text-emerald-600">
            <HelpIcon />
          </span>
          <span className="mt-2 px-2">Help</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
