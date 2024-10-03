import React from "react";
import navIcon from "../assets/navIcon.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="mt-[20px] mb-[20px] flex justify-between">
      <div className="flex items-center">
        {/* Logo and Blog Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={navIcon}
            alt="navIcon"
            className="w-[25px] h-[25px] md:w-11 md:h-11"
          />
          <h1 className="text-cyan-400 text-[15px] md:text-3xl font-bold">
            Global’s Blog
          </h1>
        </Link>
      </div>

      {/* Nav Links */}
      <ul className="flex gap-[10px] md:gap-[40px] items-center">
        <li>
          <Link
            to="/blog"
            className="text-slate-50 text-[10px] md:text-2xl font-bold"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-slate-50 text-[10px] md:text-2xl font-bold"
          >
            Newsletter
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-slate-50 text-[10px] md:text-2xl font-bold"
          >
            Twitter
          </Link>
        </li>
      </ul>
      {/* End Nav Links */}
    </nav>
  );
};

export default NavBar;
