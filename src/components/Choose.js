import React from "react";
import choose from "../assets/choose.jpg";
const Choose = () => {
  return (
    <div className="h-64 my-10 relative">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${choose})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6, // Reduces opacity of the background image
        }}
        className="absolute inset-0 z-0"
      ></div>

      {/* Content */}
      <div className="relative flex justify-center z-10 text-white font-poppins">
        <div className="bg-amber-400 h-64 px-16 w-1/3 p-4 text-4xl flex justify-center items-center">
          What Makes Webtrix the Right Choice. ?
        </div>
        <div className="w-2/5 bg-amber-500 h-64 p-10 text-2xl flex justify-center items-center">
          We empower businesses by providing specialized teams for development,
          design, and digital marketing excellence.
        </div>
      </div>
    </div>
  );
};

export default Choose;
