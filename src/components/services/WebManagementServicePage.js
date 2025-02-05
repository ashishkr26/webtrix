import React from "react";
import maintain from "../../assets/images/web-manage-services/maintain.png";
import monitoring from "../../assets/images/web-manage-services/monitoring.jpg";
import optimisation from "../../assets/images/web-manage-services/optimisation.jpg";
import security from "../../assets/images/web-manage-services/security.jpg";
import updates from "../../assets/images/web-manage-services/updates.jpg";
import EnquiryForm from "../EnquiryForm";
import WebDevelopmentFaq from "../services/servicesFaq/WebDevelopementFaq";

const WebManagementServicePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Our Web Management Services</h1>
        <p className="mt-4 text-lg text-brightgreen">
          Keep your website running smoothly with expert management and support.
        </p>
      </section>

      {/* How We Work Section */}
      <section className="py-10 px-6 bg-white font-poppins">
        <h2 className="text-3xl font-bold text-center mb-6">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-20">
          <div className="p-2 shadow-lg rounded-sm text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">1</div>
            <h3 className="font-bold mb-2">Maintenance & Support</h3>
            <div className="flex justify-center items-center">
              <img className="h-40" alt="maintenance" src={maintain} />
            </div>
            <p className="text-sm my-2 py-2 px-4">
              Regular maintenance and support to keep your website up-to-date
              and running smoothly.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-sm text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">2</div>
            <h3 className="font-bold mb-2">Monitoring & Analytics</h3>
            <div className="flex justify-center items-center">
              <img className="h-40" alt="monitoring" src={monitoring} />
            </div>
            <p className="text-sm my-2 py-2 px-4">
              Continuous monitoring and analytics to ensure optimal performance
              and user experience.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-sm text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">3</div>
            <h3 className="font-bold mb-2">Website Optimization</h3>
            <div className="flex justify-center items-center">
              <img className="h-40" alt="optimization" src={optimisation} />
            </div>
            <p className="text-sm my-2 py-2 px-4">
              Improve website speed, performance, and SEO to enhance user
              experience and rankings.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-sm text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">4</div>
            <h3 className="font-bold mb-2">Security Updates</h3>
            <div className="flex justify-center items-center">
              <img className="h-40" alt="security" src={security} />
            </div>
            <p className="text-sm my-2 py-2 px-4">
              Regular security updates and patches to protect your website from
              potential threats.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-sm text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">5</div>
            <h3 className="font-bold mb-2">Content & Feature Updates</h3>
            <div className="flex justify-center items-center">
              <img className="h-40" alt="updates" src={updates} />
            </div>
            <p className="text-sm my-2 py-2 px-4">
              Regular content updates and new feature additions to keep your
              website fresh and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Website Maintenance</h3>
            <p>
              Keep your website up-to-date with regular updates, bug fixes, and
              performance improvements.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">Website Monitoring</h3>
            <p>
              Monitor website uptime, performance, and security to ensure smooth
              operation.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              SEO & Performance Optimization
            </h3>
            <p>
              Enhance your website's SEO and performance for better user
              experience and search rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-700 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Keep Your Website Running Smoothly?
        </h2>
        <p className="mt-4">
          Contact us today to discuss your web management needs and get a free
          quote.
        </p>
        <button className="mt-6 bg-white text-brightgreen font-bold py-2 px-6 rounded-lg shadow-lg">
          Get Started
        </button>
      </section>

      {/* Contact Us Section */}
      <div className="py-10 px-6 ">
        <h2 className="text-3xl font-bold mx-12 mb-6">Contact Us</h2>
        <div className="flex">
          <div className="w-1/2 border shadow-md">
            <EnquiryForm />
          </div>
          <div className="w-1/2 m-2">
            <WebDevelopmentFaq />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebManagementServicePage;
