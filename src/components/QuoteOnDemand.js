import React from "react";

const QuoteOnDemand = () => {
  return (
    <>
      <div className="bg-gray bg-gray-100 flex ">
        <div className="font-poppins text-gray-800 font-semibold text-2xl m-16">
          Request a price Estimate...!!
        </div>
      </div>
      <div className=" flex justify-between mt-10">
       <div className="w-1/2"><h1 className="m-2 p-2 text-2xl font-poppins font-semibold text-slate-800">Request A Quote Price - Please provide your details with confidence. Your information is fully <span className="text-brightgreen">secure</span> and kept strictly <span className="text-brightgreen">confidential.</span> confidential.</h1></div> 
        <form className="w-1/2 m-4 p-4">
          <lable className="m-2 p-2 font-poppins text-gray-700 text-sm">Your Full Name</lable>
          <p className="text-xs text-blue-500 mx-4">(Please enter your complete name in the provided field.)</p>
          <div>
            <input
              class="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">Contact Number</lable>
          <p className="text-xs text-blue-500 mx-4">(Your preferred call back number)</p>
          <div>
            <input
             class="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
             type="text"
              placeholder="Contact Number"
            />
          </div>
          <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">Email Id</lable>
          
          <div>
            <input
              class="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
              type="email"
              placeholder="Email"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default QuoteOnDemand;
