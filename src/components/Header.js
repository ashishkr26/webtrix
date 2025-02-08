import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../assets/store/appSlice";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import FilterCenterFocusOutlinedIcon from "@mui/icons-material/FilterCenterFocusOutlined";

const Header = () => {
  // const searchText = useRef();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showProductMenu, setShowProductMenu] = useState(false);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="font-poppins bg-[#ffd801]  p-2 shadow-lg grid grid-flow-col text-white grid-cols-12  justify-between items-center sticky top-0 z-20">
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
        <ul className="flex  items-center space-x-2 lg:text-base md:text-sm sm:text-sx xs:text-xs">
          <Link to="/">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Home
            </li>
          </Link>
          <Link to="/services">
            {/* <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Products
            </li> */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <li className="group hover:scale-110 transition-all ease-in-out m-2 flex items-center duration-300 cursor-pointer">
                Services
                <ChevronRightOutlinedIcon
                  className={`transition-transform duration-5000 ease-in-out transform  ${
                    showProductMenu ? "rotate-90" : "rotate-0"
                  }`}
                />
              </li>

              {/* Show Product Menu */}
              {showProductMenu && <ProductMenu />}
            </div>
          </Link>
          <Link to="/pricing">
            <li
              tabIndex={0}
              className="p-2 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Pricing
            </li>
          </Link>
          <Link to="/services">
            {/* <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Products
            </li> */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <li className="group hover:scale-110 transition-all ease-in-out m-2 flex items-center duration-300 cursor-pointer">
                Products
                <ChevronRightOutlinedIcon
                  className={`transition-transform duration-5000 ease-in-out transform  ${
                    showProductMenu ? "rotate-90" : "rotate-0"
                  }`}
                />
              </li>

              {/* Show Product Menu */}
              {showProductMenu && <ProductMenu />}
            </div>
          </Link>

          <Link to="/services">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Portfolio
            </li>
          </Link>
          <Link to="/clientele">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out">
              Clientele
            </li>
          </Link>
          <Link to="/contact-us">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap">
              Contact Us
            </li>
          </Link>
          <Link to="/hiredeveloper">
            <li className="p-2 hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap">
              Hire Developers
            </li>
          </Link>
        </ul>
      </div>

      {/* Right Button */}
      <div className="col-span-4  flex justify-end  ">
        <Link to="quote-on-demand">
          <button className="lg:text-base border border-white text-gray-100 md:text-sm sm:text-sx xs:text-xs bg-gray-700 text-sm  px-4 py-2 rounded-md  hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap text-center">
            Demo On Demand
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

export const ProductMenu = () => {
  const productsMenuItems = [
    "Zomato Clone",
    "Swiggy Clone",
    "Amazon Clone",
    "Hotstar Clone",
    "Netflix Clone",
    "Bigbasket Clone",
    "Alibaba Clone",
    "Shaadi.com Clone",
    "Ola App Clone",
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="absolute top-6 left-0 bg-[#ffd801] shadow-lg p-4 rounded-md w-48 md:w-56 lg:w-64 z-50">
      <ul className="text-sm">
        {productsMenuItems.map((product, index) => (
          <li
            key={index}
            className="p-2 hover:scale-105 transition-all ease-in-out cursor-pointer flex items-center gap-2"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {hoveredItem === index && (
              <FilterCenterFocusOutlinedIcon sx={{ fontSize: 14 }} />
            )}
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};
