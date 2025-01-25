import React from "react";
import newbg from "../assets/images/newbg.jpg";
import AutoAwesomeMotionTwoToneIcon from "@mui/icons-material/AutoAwesomeMotionTwoTone";
import { Link } from "react-router-dom";

const MainContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${newbg})`, // Correct syntax for inline styles
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
      className=" p-2 flex flex-col w-auto items-start bg-gray-50 font-poppins"
    >
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full lg:h-16 md:h-14 sm:h-12 xs:h-10 hover:scale-105 transition-all ease-in-out">
        <span className="bg-gray-700 relative top-2 p-2 lg:text-2xl md:text-base sm:text-sm rounded-r-full font-semibold text-white hover:bg-gray-800">
          Empower Your Business with Our IT Solutions
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full lg:h-16 md:h-14 sm:h-12 xs:h-10 hover:scale-105 transition-all ease-in-out">
        <Link to="/web-developement-service">
          <span className="bg-gray-700 relative top-2 p-2 lg:text-2xl md:text-base sm:text-sm rounded-r-full font-semibold text-white hover:bg-gray-800 ">
            <span className="relative -top-1">
              <AutoAwesomeMotionTwoToneIcon />
            </span>{" "}
            Website Development
          </span>
        </Link>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full lg:h-16 md:h-14 sm:h-12 xs:h-10 hover:scale-105 transition-all ease-in-out">
        <Link to="/web-management-service">
          <span className="bg-gray-700 relative top-2 p-2 lg:text-2xl md:text-base sm:text-sm rounded-r-full font-semibold text-white hover:bg-gray-800">
            <span className="relative -top-1">
              <AutoAwesomeMotionTwoToneIcon />
            </span>{" "}
            Website Management
          </span>
        </Link>
      </div>
      <div className="p-2  m-2 bg-yellow-400 rounded-r-full lg:h-16 md:h-14 sm:h-12 xs:h-10 hover:scale-105 transition-all ease-in-out">
        <span className="bg-gray-700 relative top-2 p-2 lg:text-2xl md:text-base sm:text-sm rounded-r-full font-semibold text-white hover:bg-gray-800">
          <span className="relative -top-1">
            <AutoAwesomeMotionTwoToneIcon />
          </span>{" "}
          SEO - Search Engine Optimization
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full lg:h-16 md:h-14 sm:h-12 xs:h-10 hover:scale-105 transition-all ease-in-out">
        <Link to="/mobile-app-service">
          <span className="bg-gray-700 relative top-2 p-2 lg:text-2xl md:text-base sm:text-sm rounded-r-full font-semibold text-white hover:bg-gray-800">
            <span className="relative -top-1">
              <AutoAwesomeMotionTwoToneIcon />
            </span>{" "}
            Mobile App Development
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainContainer;
