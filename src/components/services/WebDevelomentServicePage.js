import React from "react";
import requirement from "../../assets/web-dev-service/requirement.png";
import planning from "../../assets/web-dev-service/planning.png";
import developement from "../../assets/web-dev-service/development.png";
import testing from "../../assets/web-dev-service/testing.png";
import deployement from "../../assets/web-dev-service/deployement.png";

const WebDevelopmentServicePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-poppins">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">
          Professional Web Development Services
        </h1>
        <p className="mt-4 text-lg ">
          Build stunning websites and web apps tailored to your business needs.
        </p>
      </section>

      {/* How We Work Section */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-32">
          <div className="p-2 shadow-lg rounded-lg text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">1</div>
            <h3 className=" font-bold mb-2">Requirement Gathering</h3>
            <div className="flex justify-center items-center">
              <img className="h-32  " alt="requirements" src={requirement} />
            </div>
            <p className="text-sm">
              Understand your business goals, target audience, and technical
              needs to create a roadmap.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-lg text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">2</div>
            <h3 className=" font-bold mb-2">Planning & Design</h3>
            <div className="flex justify-center items-center">
              <img className="h-32  " alt="requirements" src={planning} />
            </div>
            <p className="text-sm">
              Create wireframes, mockups, and project plans to visualize the
              final product.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-lg text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">3</div>
            <h3 className=" font-bold mb-2">Development</h3>
            <div className="flex justify-center items-center">
              <img className="h-32  " alt="requirements" src={developement} />
            </div>
            <p className="text-sm">
              Build the frontend and backend using the latest technologies,
              ensuring responsiveness and functionality.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-lg text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">4</div>
            <h3 className=" font-bold mb-2">Testing</h3>
            <div className="flex justify-center items-center">
              <img className="h-32  " alt="requirements" src={testing} />
            </div>
            <p className="text-sm">
              Conduct thorough testing to ensure the website is bug-free, fast,
              and user-friendly.
            </p>
          </div>
          <div className="p-2 shadow-lg rounded-lg text-center bg-gray-200">
            <div className="text-blue-600 text-xl font-bold mb-4">5</div>
            <h3 className=" font-bold mb-2">Deployment</h3>
            <div className="flex justify-center items-center">
              <img className="h-32  " alt="requirements" src={deployement} />
            </div>
            <p className="text-sm">
              Launch the website on a live server and ensure smooth operation
              with ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Custom Website Development
            </h3>
            <p>
              Tailored websites built from scratch to meet your unique business
              requirements.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">E-commerce Solutions</h3>
            <p>
              Fully functional online stores with secure payment integration and
              user-friendly design.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              Web Application Development
            </h3>
            <p>
              Scalable and robust web applications using the latest
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="mt-4">
          Contact us today to discuss your project and get a free quote.
        </p>
        <button className="mt-6 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg">
          Get Started
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default WebDevelopmentServicePage;
