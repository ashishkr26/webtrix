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
    // autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
  };

  const reviews = [
    {
      text: "Webtrix Solutions transformed our online presence! Their expertise in web development helped us attract more customers.",
      author: "Anita Sharma",
      ratings: "⭐⭐⭐⭐⭐",
    },
    {
      text: "The team at Webtrix Solutions is professional, creative, and highly responsive. They built a user-friendly website that perfectly represents our brand.",
      author: "Rajiv Mehta",
      ratings: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Thanks to Webtrix Solutions, we now have a sleek, modern website that has boosted our credibility and sales. Highly recommend their services!",
      author: "Priya Verma",
      ratings: "⭐⭐⭐⭐",
    },
    {
      text: "Webtrix Solutions transformed our online presence completely. The team was professional, creative, and delivered beyond our expectations!",
      author: "Rajesh Verma",
      ratings: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Our startup's website is now a reflection of our brand, thanks to Webtrix Solutions. The process was smooth and the results were outstanding!",
      author: "Priya Kapoor",
      ratings: "⭐⭐⭐⭐",
    },
    {
      text: "I’m amazed at the level of detail and care that Webtrix Solutions put into our website. Their expertise is unmatched!",
      author: "Vivek Tandon",
      ratings: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Working with Webtrix Solutions was a game-changer for us. The team is friendly, efficient, and delivers excellent quality work.",
      author: "Sneha Roy",
      ratings: "⭐⭐⭐⭐",
    },
    {
      text: "Webtrix Solutions exceeded our expectations in every way. Our new website is fast, responsive, and visually stunning!",
      author: "Arjun Mehta",
      ratings: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="bg-clay my-8 px-4 ">
      <h1 className="text-3xl font-bold text-center py-4 ">
        Hear From Our Happy Clients
      </h1>

      <Slider
        {...settings}
        className="mx-48  p-4 flex justify-center items-center text-center"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md text-center flex flex-col justify-center items-center h-72 w-2/3 rounded-lg  -space-x-5"
          >
            <p className="text-lg italic">{`"${review.text}"`}</p>
            <h3 className="mt-4 font-semibold text-gray-700">
              - {review.author}
            </h3>
            <p className="">{review.ratings}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
