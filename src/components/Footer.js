import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 h-96 mt-16 text-white grid grid-cols-12 font-poppins p-4">
        <div className="p-4 col-span-2">
          <span className="text-lg font-semibold">Important Links</span>
          <ul className="text-sm">
            <li>Contact Us</li>
            <li>Support</li>
            <li>Current Openings</li>
            <li>Career Page</li>
          </ul>
        </div>

        <div className="p-4 col-span-2 font-semibold text-lg">
          Official Address
        </div>
        <div className="p-4 col-span-3">
          <span className="font-semibold text-lg">Social Media presence</span>
          <ul className="text-sm">
            <li>
              <FacebookOutlinedIcon /> Facebook
            </li>
            <li>
              <TwitterIcon /> Twitter
            </li>
            <li>
              <InstagramIcon /> Instagram
            </li>
            <li>
              <LinkedInIcon /> LinkedIn
            </li>
            <li>
              <YouTubeIcon /> YouTube
            </li>
            <li>
              <WhatsAppIcon /> WhatsApp
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
