import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container m-4 p-4">
      <Slider {...settings}>
        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
            alt="html"
          />
        </div>

        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-2011.png"
            alt="css"
          />
        </div>

        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            alt="javascript"
            src="https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=1740009600&v=beta&t=9vkuUh1_60n4AhwaGm57oLtst5z5rxgxp2zQfBfpfCw"
          />
        </div>

        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/375px-React.svg.png"
            alt=" React"
          />
        </div>

        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            alt="Nodejs"
          />
        </div>
        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png"
            alt="mongodb"
          />
        </div>

        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeupVmJCFQYxMueCMJ2hEGBPE9-RNbtRg7cQ&s"
            alt="nextjs"
          />
        </div>

        <div>
          <img
            className="lg:h-32 md:h-24 sm:h-16 xs:h-12"
            alt="slide-7"
            src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
