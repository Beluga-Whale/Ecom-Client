import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-400 text-white ">
      <div className=" flex justify-between items-center mx-auto p-3 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
        <div className=" flex items-center gap-5  ">
          <Link className="text-2xl font-bold" to={`/`}>
            BELUGA SHOP{" "}
          </Link>
          <div className="hidden gap-5  sm:flex">
            <Link to={`/`}>Home </Link>
            <Link to={`/shop`}>Shop </Link>
            <Link to={`/cart`}>Cart </Link>
          </div>
        </div>
        <div className="hidden gap-5 sm:flex">
          <Link to={`/`}>Register </Link>
          <Link to={`/`}>Login </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
