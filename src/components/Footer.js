import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  const phoneNumber = "8123897887";
  const message = "Hi, I would like to connect with you";

  const whatsappLink = `https://wa.me/${phoneNumber}? text =${message}`;

  const Youtube_Channel_Link = "https://www.youtube.com/@ab_maths7843";
  return (
    <>
      <div className="bg-gray-800 h-96 mt-16 text-white grid grid-cols-12 font-poppins p-4">
        <div className="p-4 col-span-2">
          <span className="text-lg font-semibold">Important Links</span>
          <ul className="text-sm">
            <li className="hover:scale-105 transition-all ease-in-out">Contact Us</li>
            <li className="hover:scale-105 transition-all ease-in-out">Support</li>
            <li className="hover:scale-105 transition-all ease-in-out">Current Openings</li>
            <li className="hover:scale-105 transition-all ease-in-out">Career Page</li>
          </ul>
        </div>

        <div className="p-4 col-span-2 font-semibold text-lg">
          Official Address
        </div>
        <div className="p-4 col-span-3 ">
          <span className="font-semibold text-lg">Social Media presence</span>
          <ul className="text-sm">
            <li className="hover:scale-105 transition-all ease-in-out">
              <FacebookOutlinedIcon /> Facebook
            </li>
            <li className="hover:scale-105 transition-all ease-in-out">
              <TwitterIcon /> Twitter
            </li>
            <li className="hover:scale-105 transition-all ease-in-out">
              <InstagramIcon /> Instagram
            </li>
            <li className="hover:scale-105 transition-all ease-in-out">
              <LinkedInIcon /> LinkedIn
            </li>
            <li className="hover:scale-105 transition-all ease-in-out">
              <a
                href={Youtube_Channel_Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon /> YouTube
              </a>
            </li>
            <li className="hover:scale-105 transition-all ease-in-out">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4 col-span-5">
          <h2 className="font-semibold text-lg">About Webtrix</h2>
          <p className="text-sm py-2">
            Webtrix Solutions is a leading technology provider based in India,
            specializing in web development, software development, mobile app
            development, and digital marketing. Focused on empowering SMEs,
            Startup India projects, and individual entrepreneurs, we offer
            innovative and cost-effective solutions to help businesses grow and
            thrive in the digital landscape. With over 10 years of experience,
            we are dedicated to delivering impactful results that enhance online
            presence and drive long-term success.
          </p>
        </div>
      </div>
      <div className="h-10 bg-yellow-600  flex justify-center items-center font-poppins  text-gray-50 ">
        © 2024 Webtrix Solutions. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
