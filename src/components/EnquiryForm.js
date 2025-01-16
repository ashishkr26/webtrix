import React, { useState } from "react";
import Submit from "./Submit";
import { useNavigate } from "react-router-dom";

const EnquiryForm = () => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true); 
  };

  const handleDialogClose = () => {
    setSubmit(false);
    navigate("/");
  };

  return (
    <div>
      <form className="m-4 p-4" onSubmit={handleSubmit}>
        <label className="m-2 p-2 font-poppins text-gray-700 text-sm">
          Your Full Name
        </label>
        <p className="text-xs text-blue-500 mx-4">
          (Please enter your complete name in the provided field.)
        </p>
        <div>
          <input
            className="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <label className="m-2 p-2 font-poppins text-sm text-gray-700">
          Contact Number
        </label>
        <p className="text-xs text-blue-500 mx-4">
          (Your preferred call back number)
        </p>
        <div>
          <input
            className="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
            type="text"
            placeholder="Contact Number"
            required
          />
        </div>
        <label className="m-2 p-2 font-poppins text-sm text-gray-700">
          Email Id
        </label>
        <div>
          <input
            className="shadow-bottom-only border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="m-2 p-2 text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-brightgreen text-white rounded-sm hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>

 
      <Submit open={submit} onClose={handleDialogClose} />
    </div>
  );
};

export default EnquiryForm;
