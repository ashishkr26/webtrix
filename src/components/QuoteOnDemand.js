import React from "react";
import EnquiryForm from "./EnquiryForm";

const QuoteOnDemand = () => {
  return (
    <>
      <div className="bg-gray bg-gray-100 flex ">
        <div className="font-poppins text-gray-800 font-semibold text-2xl m-16">
          Request a price Estimate...!!
        </div>
      </div>
      <div className=" flex justify-between mt-10">
        <div className="w-1/2">
          <h1 className="m-2 p-2 text-2xl font-poppins font-semibold text-slate-800">
            Request A Quote Price - Please provide your details with confidence.
            Your information is fully{" "}
            <span className="text-brightgreen">secure</span> and kept strictly{" "}
            <span className="text-brightgreen">confidential.</span>{" "}
            confidential.
          </h1>
        </div>
        <div className="w-1/2">
        <EnquiryForm/>
        </div>
      </div>
    </>
  );
};

export default QuoteOnDemand;
