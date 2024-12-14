import React from "react";
import newbg from "../assets/newbg.jpg";
import AutoAwesomeMotionTwoToneIcon from "@mui/icons-material/AutoAwesomeMotionTwoTone";

const MainContainer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${newbg})`, // Correct syntax for inline styles
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
      className=" p-2 flex flex-col w-auto items-start bg-gray-50"
    >
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-700 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white hover:bg-gray-500">
          Empower Your Business with Our IT Solutions
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-700 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white hover:bg-gray-500 ">
          <span className="relative -top-1">
            <AutoAwesomeMotionTwoToneIcon />
          </span>{" "}
          Website Development
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-700 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white hover:bg-gray-500">
          <span className="relative -top-1">
            <AutoAwesomeMotionTwoToneIcon />
          </span>{" "}
          Website Management
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-700 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white hover:bg-gray-500">
          <span className="relative -top-1">
            <AutoAwesomeMotionTwoToneIcon />
          </span>{" "}
          SEO - Search Engine Optimization
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-700 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white hover:bg-gray-500">
          <span className="relative -top-1">
            <AutoAwesomeMotionTwoToneIcon />
          </span>{" "}
          Mobile App Development
        </span>
      </div>
    </div>
  );
};

export default MainContainer;
