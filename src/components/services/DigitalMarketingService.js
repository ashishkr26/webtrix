import React from 'react';
import { Link } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';
import EnquiryForm from '../EnquiryForm';

const DigitalMarketingServicePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Digital Marketing Services</h1>
        <p className="mt-4 text-lg">
          Elevate your online presence and drive business growth with our expert digital marketing solutions.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg text-center">
            <CampaignIcon sx={{ fontSize: 64 }} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Social Media Marketing</h3>
            <p>
              Engage your audience and grow your brand with targeted social media strategies.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <TrendingUpIcon sx={{ fontSize: 64 }} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Search Engine Optimization (SEO)</h3>
            <p>
              Improve your website's visibility and drive organic traffic with our SEO services.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <InsightsIcon sx={{ fontSize: 64 }} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
            <p>
              Gain valuable insights into your campaigns and optimize for better results.
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
            <h3 className="text-xl font-bold mb-2">Consultation</h3>
            <p>
              Understand your business goals and target audience to create a tailored strategy.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <div className="text-blue-600 text-4xl font-bold mb-4">2</div>
            <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
            <p>
              Design a comprehensive plan to achieve your digital marketing objectives.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center">
            <div className="text-blue-600 text-4xl font-bold mb-4">3</div>
            <h3 className="text-xl font-bold mb-2">Execution & Optimization</h3>
            <p>
              Implement and refine campaigns for maximum impact and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Boost Your Digital Presence?</h2>
        <p className="mt-4">
          Contact us today to discuss your project and get a free consultation.
        </p>
        <Link to="/contact">
          <button className="mt-6 bg-white text-blue-600 font-bold py-2 px-6 rounded-lg shadow-lg">
            Get Started
          </button>
        </Link>
      </section>

      <div className="py-10 px-6">
        <h2 className="text-3xl font-bold mx-12 mb-6">Contact Us</h2>
        <div className=" w-1/2 border shadow-md">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingServicePage;
