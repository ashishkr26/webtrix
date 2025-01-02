import React, { useEffect } from "react";
import newbg from "../../assets/newbg.png";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../assets/store/appSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CheckIcon from "@mui/icons-material/Check";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ServiceFaq from "./ServiceFaq"

const WebtrixSevice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <>
      <div className="m-10 flex justify-between">
        <div className="flex justify-end w-1/2 ">
          <img className=" shadow-xl" alt="bg" src={newbg} />
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="text-blue-600 font-poppins">What we offer ?</div>
          <div className="text-3xl font-semibold font-poppins text-gray-600">
            Services
          </div>
          <div>
            <button className="bg-gray-800 text-white px-2  w-48 py-6 rounded-lg mt-6 ">
              <span>
                Request A Demo{" "}
                <ArrowRightAltIcon
                  sx={{
                    fontSize: 32,
                    transition: "transform 0.2s ease",
                    transformOrigin: "left center", // Keeps the left side fixed
                    "&:hover": { transform: "scaleX(1.4)" },
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="p-2 m-2 flex justify-center text-3xl font-poppins font-bold text-gray-700">
          Buliding Solutions, through our Expertise
        </div>
        <div className="p-2 m-2 text-sm font-poppins flex justify-center items-center w-3/4 mx-auto text-gray-700 text-center">
          Webtrix Solutions provides a variety of services, including website
          and app development, digital marketing, and more. We deliver tailored
          solutions to meet your business needs, ensuring success for all types
          of projects.
        </div>
        <div className=" grid grid-cols-12 gap-4 p-4 mx-20 font-poppins  text-gray-700">
          <div className="col-span-4 shadow-xl mx-2 p-4 rounded-lg  text-center  border border-gray-100">
            <p className="text-lg font-semibold text-gray-900 py-4">
              Website Development
            </p>
            <p className="text-sm py-4">
              Educational Websites <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              Business Websites <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              Booking Websites <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              Portfolio Websites <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              Catalogue Wesbites <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              E-Commerce Websites <CheckIcon sx={{ color: "green" }} />
            </p>
          </div>
          <div className="col-span-4 shadow-xl mx-2 p-4  rounded-lg  text-center  border border-gray-100">
            <p className="text-lg font-semibold text-gray-900 py-4">
              Mobile App Development
            </p>
            <p className="text-sm py-4">
              Android Applications
              <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              React Native Developement <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              Flutter Apps <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              IPad App Development <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              {" "}
              Cross-Platform App Development{" "}
              <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              iOS App Development <CheckIcon sx={{ color: "green" }} />
            </p>
          </div>
          <div className="col-span-4 shadow-xl mx-2 p-4  rounded-lg  text-center  border border-gray-100">
            <p className="text-lg font-semibold text-gray-900 py-4">
              Software Development
            </p>
            <p className="text-sm py-4">
              Custom Software Development <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              Enterprise Software Solutions{" "}
              <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              SaaS (Software as a Service) Development{" "}
              <CheckIcon sx={{ color: "green" }} />
            </p>

            <p className="text-sm py-4">
              Desktop Application Development{" "}
              <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              CRM and ERP Development <CheckIcon sx={{ color: "green" }} />
            </p>
            <p className="text-sm py-4">
              API Development and Integration{" "}
              <CheckIcon sx={{ color: "green" }} />
            </p>
          </div>
        </div>
      </div>
      <TechCarousel />
      <div>
        <ServiceFaq/>
      </div>
    </>
  );
};

export default WebtrixSevice;

const TechCarousel = () => {
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
    <div className="slider-container m-4 p-4 ">
      <div className="p-2 m-2 flex justify-center text-2xl font-poppins font-bold text-gray-700">
        Technology and Platforms we utilize
      </div>
      <Slider {...settings}>
        <div>
          <img
            className="h-28"
            src="https://miro.medium.com/v2/resize:fit:600/1*Xyrmr3lIfdwwH638Iv0LzQ.png"
            alt="html"
          />
        </div>

        <div>
          <img
            className="h-28"
            src="https://media.licdn.com/dms/image/v2/D4D12AQGH3_Urc9_L_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700648952614?e=2147483647&v=beta&t=a44m3oHLQwixvA5EKsNEjkzepidh0AanOwolHIWhqck"
            alt="css"
          />
        </div>

        <div>
          <img
            className="h-28"
            alt="javascript"
            src="https://i.pinimg.com/1200x/c6/ab/c6/c6abc6dc9b99aea3aaafb12d1d35c0f4.jpg"
          />
        </div>

        <div>
          <img
            className="h-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9LabQMCx6qIFqA2LXs2DbK47Gq83DcUNjdA&s"
            alt=" React"
          />
        </div>

        <div>
          <img
            className="h-28"
            src="https://logowik.com/content/uploads/images/netlify-new-20234970.logowik.com.webp"
            alt="Nodejs"
          />
        </div>
        <div>
          <img
            className="h-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qneFgROiufDyIrsXWpq_GhoQWnnxHuoclPljXeXgtlcGEParu75dPQ4TLafJeLJssXc&usqp=CAU"
            alt="mongodb"
          />
        </div>

        <div>
          <img
            className="h-28"
            src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
            alt="nextjs"
          />
        </div>

        <div>
          <img
            className="h-28"
            alt="slide-7"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKfJGEKepy_VvmQKHNJzJSbLp6wZzybXC9LCFh_Kp47ZJ3ed_WtihUjPp9SBCWZyxiT4&usqp=CAU"
          />
        </div>
      </Slider>
    </div>
  );
};
