import React from "react";
import { Link } from "react-router-dom";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import DevicesIcon from "@mui/icons-material/Devices";
import EnquiryForm from "../EnquiryForm";
import UIUXServiceFaq from "./servicesFaq/UIUXServiceFaq";

const UIUXService = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">UI/UX Design Services</h1>
        <p className="mt-4 text-lg">
          Crafting user-centric designs that elevate user experiences and bring
          ideas to life.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
            <DesignServicesIcon
              sx={{ fontSize: 64 }}
              className="text-purple-600 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Wireframing & Prototyping
            </h3>
            <p>
              Visualize your ideas with interactive wireframes and prototypes
              tailored to your needs.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
            <BrushIcon sx={{ fontSize: 64 }} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">UI Design</h3>
            <p>
              Create visually stunning and user-friendly interfaces that
              captivate your audience.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
            <DevicesIcon
              sx={{ fontSize: 64 }}
              className="text-purple-600 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
            <p>
              Ensure seamless experiences across all devices with responsive and
              adaptive designs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-700 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Transform Your User Experience?
        </h2>
        <p className="mt-4">
          Contact us today to discuss your project and get a free consultation.
        </p>
        <Link to="/contact">
          <button className="mt-6 bg-white text-brightgreen font-bold py-2 px-6 rounded-lg shadow-lg">
            Get Started
          </button>
        </Link>
      </section>
      <div className="py-10 px-6">
        <h2 className="text-3xl font-bold mx-12 mb-6">Contact Us</h2>
        <div className="my-6 mx-8 flex flex-row justify-between">
          <div>
            <h2 className="text-3xl font-bold mx-12 mb-6">Contact Us</h2>
            <div className=" border shadow-md w-[560px]">
              <EnquiryForm />
            </div>
          </div>
          <div className="">
            <UIUXServiceFaq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXService;
