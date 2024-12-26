import React from "react";
import Header from "./Header";

import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SideBar/>
      <Outlet />
    </div>
  );
};

export default Home;
