import React from "react";

const EnquiryForm = () => {
  return (
    <div>
      <form className=" m-4 p-4">
        <lable className="m-2 p-2 font-poppins text-gray-700 text-sm">
          Your Full Name
        </lable>
        <p className="text-xs text-blue-500 mx-4">
          (Please enter your complete name in the provided field.)
        </p>
        <div>
          <input
            class="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">
          Contact Number
        </lable>
        <p className="text-xs text-blue-500 mx-4">
          (Your preferred call back number)
        </p>
        <div>
          <input
            class="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
            type="text"
            placeholder="Contact Number"
          />
        </div>
        <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">
          Email Id
        </lable>

        <div>
          <input
            class="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="m-2 p-2 text-center"><button className="px-2 py-2 bg-brightgreen rounded-sm">Submit</button></div>
      </form>
    </div>
  );
};

export default EnquiryForm;
