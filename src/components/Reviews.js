import React from "react";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, // Optional: Hides the navigation arrows for a cleaner look
  };

  return (
    <div className="bg-clay my-8 px-4">
      <h1 className="text-3xl font-bold text-center py-4">
        Hear From Our Happy Clients
      </h1>
      <div className="max-w-3xl mx-auto my-4">
        <Slider {...settings}>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-lg italic">
              "Webtrix Solutions transformed our online presence! Their
              expertise in web development helped us attract more customers."
            </p>
            <h3 className="mt-4 font-semibold text-gray-700">- Anita Sharma</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-lg italic">
              "The team at Webtrix Solutions is professional, creative, and
              highly responsive. They built a user-friendly website that
              perfectly represents our brand."
            </p>
            <h3 className="mt-4 font-semibold text-gray-700">- Rajiv Mehta</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <p className="text-lg italic">
              "Thanks to Webtrix Solutions, we now have a sleek, modern website
              that has boosted our credibility and sales. Highly recommend their
              services!"
            </p>
            <h3 className="mt-4 font-semibold text-gray-700">- Priya Verma</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
