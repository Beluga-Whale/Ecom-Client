import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className=" mx-auto p-3 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
