import React from "react";

const MainContainer = () => {
  return (
    <div className="m-2 p-2 flex flex-col w-auto items-start bg-gray-50">
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-500 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white ">
          Empower Your Business with Our IT Solutions
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-500 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white ">
          Website Development
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-500 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white">
          Website Management
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-500 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white ">
          SEO- Search Engine Optimization
        </span>
      </div>
      <div className="p-2 m-2 bg-yellow-400 rounded-r-full h-16">
        <span className="bg-gray-500 relative top-2 p-2 text-2xl rounded-r-full font-semibold text-white ">
          Mobile App Developemt
        </span>
      </div>
    </div>
  );
};

export default MainContainer;
