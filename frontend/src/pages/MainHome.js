import React from "react";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import "./css/mainhome.css";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";

const MainHome = () => {
  return (
    <div className="home">
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Outlet />
    </div>
  );
};

export default MainHome;
