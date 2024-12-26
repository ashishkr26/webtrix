import React from "react";
import contactbg from "../assets/contactbg.jpeg";

const ContactUs = () => {
  return (
    <div className=" ">
      <img className=" w-3/5" alt="contact-us" src={contactbg} />
      <div className="flex">
        <div className="w-1/2 m-10 p-10">
          <h1 className="m-2 p-2 text-2xl font-poppins font-semibold text-slate-800">
            We’d love to hear from you! Whether you have questions, need
            support, or want to collaborate, feel free to reach out.
            {/* Here’s how
            you can get in touch with us: Subit you Details. Your information is fully{" "}
            <span className="text-brightgreen">secure</span> and kept strictly{" "}
            <span className="text-brightgreen">confidential.</span>{" "}
            confidential. */}
          </h1>
        </div>
        <div className="w-1/2 m-10 p-10">
          <div className="m-2 p-2 text-lg font-poppins font-semibold text-blue-800">
            Submit Your Query
          </div>
          <div>
            <form className="">
              <lable className="m-2 p-2 font-poppins text-gray-700 text-sm">
                Your Full Name
              </lable>
              <p className="text-xs text-blue-500 mx-4">
                (Please enter your complete name in the provided field.)
              </p>
              <div>
                <input
                  class="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
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
                  class="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>
              <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Email Id
              </lable>

              <div>
                <input
                  class="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Your Country
              </lable>

              <div>
                <input
                  class="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <lable className="m-2 p-2 font-poppins text-sm  text-gray-700">
                Your Message
              </lable>
              <div>
                <textarea
                  class="rounded-lg shadow-bottom-only border-2 border-gray-300 focus:outline-none focus:border-blue-500 w-full p-2 m-2"
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
