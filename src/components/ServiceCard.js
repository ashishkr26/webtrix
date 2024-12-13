import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <div className="bg-gray-50 w-80 h-[440px] p-4 shadow-lg m-8 rounded-md relative">
      <div className="">
        <div className="text-4xl text-center my-6">{item.icon}</div>
        <div className="text-3xl p-4 font-bold text-center">{item.name}</div>
        <div className="m-2 text-lg">{item.description}</div>
      </div>
      {/* Absolute positioning for the button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button className="bg-slate-800 text-white p-2 rounded-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
