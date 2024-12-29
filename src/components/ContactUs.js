import React, { useEffect } from "react";
import contactbg from "../assets/contactbg.jpeg";
import { useDispatch } from "react-redux";
import { closeMenu } from "../assets/store/appSlice";

const ContactUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Close the sidebar when the ContactUs page loads
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className=" ">
      <img className=" w-3/5" alt="contact-us" src={contactbg} />
      <div className="flex">
        <div className="w-1/2 m-10 p-10">
          <h1 className="m-2 p-2 text-2xl font-poppins font-semibold text-slate-800">
            We’d love to hear from you! Whether you have questions, need
            support, or want to collaborate, feel free to reach out.
          </h1>
        </div>
        <div className="w-1/2 m-10 p-10">
          <div className="m-2 p-2 text-lg font-poppins font-semibold text-blue-800">
            Submit Your Query
          </div>
          <div>
            <form className="">
              <label className="m-2 p-2 font-poppins text-gray-700 text-sm">
                Your Full Name
              </label>
              <p className="text-xs text-blue-500 mx-4">
                (Please enter your complete name in the provided field.)
              </p>
              <div>
                <input
                  className="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <label className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Contact Number
              </label>
              <p className="text-xs text-blue-500 mx-4">
                (Your preferred call back number)
              </p>
              <div>
                <input
                  className="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <label className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Email Id
              </label>

              <div>
                <input
                  className="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <label className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Your Country
              </label>

              <div>
                <input
                  className="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <label className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Your Message
              </label>
              <div>
                <textarea
                  className="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="m-2 p-2 text-center">
                <button className="px-2 py-2 bg-brightgreen rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
