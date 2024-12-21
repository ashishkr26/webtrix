import React from 'react';
import { Link } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';

const MobileAppService = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Mobile App Development</h1>
        <p className="mt-4 text-lg">
          Empower your business with innovative, user-friendly, and scalable mobile applications.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg text-center">
            <SmartphoneIcon sx={{ fontSize: 64 }} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom App Development</h3>
            <p>
              Build tailor-made mobile apps to meet your specific business needs and objectives.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <CodeIcon sx={{ fontSize: 64 }} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cross-Platform Solutions</h3>
            <p>
              Create apps that work seamlessly across iOS and Android platforms using cutting-edge technologies.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <SecurityIcon sx={{ fontSize: 64 }} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">App Security & Maintenance</h3>
            <p>
              Ensure your app remains secure, up-to-date, and optimized for performance.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg text-center">
            <div className="text-blue-600 text-4xl font-bold mb-4">1</div>
            <h3 className="text-xl font-bold mb-2">Requirement Analysis</h3>
            <p>
              Collaborate to understand your app's purpose, target audience, and features.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <div className="text-blue-600 text-4xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Design & Development</h3>
            <p>
              Create intuitive UI/UX designs and develop robust, scalable applications.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <div className="text-blue-600 text-4xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Testing & Deployment</h3>
            <p>
              Ensure quality through rigorous testing and launch your app with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Build Your Mobile App?</h2>
        <p className="mt-4">
          Contact us today to turn your app idea into reality.
        </p>
        <Link to="/contact">
          <button className="mt-6 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg">
            Get Started
          </button>
        </Link>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default MobileAppService;
