import React from "react";
import Header from "./Header";
import ChatBot from "./ChatBot";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SideBar/>      
      <Outlet />
      <ChatBot /> 
      <Footer/>
    </div>
  );
};

export default Home;
