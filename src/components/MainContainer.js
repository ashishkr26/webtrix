import React from 'react';
import { IoRocketSharp } from 'react-icons/io5'; // Importing an icon for better visual appeal

const MainContainer = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex '>
      <div className='text-center p-10 bg-white rounded-lg shadow-xl max-w-3xl w-full'>
        {/* Icon */}
        <div className='mb-6'>
          <IoRocketSharp className='text-6xl text-blue-500 mx-auto' />
        </div>
        {/* Heading */}
        <h1 className='text-5xl font-extrabold text-gray-800'>
          Your Vision, Our Expertise
        </h1>
        {/* Description */}
        <p className='text-xl text-gray-600 mt-4 mb-6'>
          We specialize in building beautiful, responsive websites and providing ongoing management services that drive business growth. Let’s take your online presence to the next level!
        </p>
        {/* Button */}
        <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all duration-300'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
