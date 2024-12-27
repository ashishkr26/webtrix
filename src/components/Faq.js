import React from "react";
import faqbg from "../assets/faqbg.jpg";
import MainFaq from "./faqs/MainFaq";

const Faq = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${faqbg})`, // Correct syntax for inline styles
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image

      }}
      className="flex flex-col bg-gray-50 h-96  font-poppins items-end"
    >
      <div className=" font-poppins text-5xl p-4   ">
        Frequently Asked Questions
      </div>
      <div className="p-4 mt-4 w-3/4">
        <MainFaq />
      </div>
    </div>
  );
};

export default Faq;
