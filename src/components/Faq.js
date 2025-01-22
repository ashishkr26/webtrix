import React from "react";
import faqbg from "../assets/images/faqbg.jpg";
import MainFaq from "./faqs/MainFaq";

const Faq = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${faqbg})`, // Correct syntax for inline styles
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        position:""
      }}
      className="flex flex-col bg-gray-50  font-poppins items-end h-full text-gray-800 "
    >
      <div className=" font-poppins  lg:text-4xl  md:text-xl sm:text-sm p-4   ">
        Frequently Asked Questions
      </div>
      <div className="p-4 mt-4 w-3/4">
        <MainFaq />
      </div>
    </div>
  );
};

export default Faq;
