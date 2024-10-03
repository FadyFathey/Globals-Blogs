import React from "react";
import tw from "../assets/tw.svg";
import fa from "../assets/face.svg";
import li from "../assets/linked.svg";
import gi from "../assets/tw.svg";

const Footer = () => {
  return (
    <footer className="mt-[105px] mb-[50px] px-4 md:px-8 lg:px-16">
      {/* Divider Line */}
      <div className="w-full border-t border-slate-300"></div>
      <div className="mt-[27px] flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Copyright Text */}
        <div className="text-slate-300 text-sm md:text-xl font-medium font-['Roboto'] mb-4 md:mb-0">
          © Copyright 2024 by Global’s Blog. Built with ♥ by Fady Fathey
        </div>
        {/* Social Links icons */}
        <div className="flex gap-4 md:gap-6">
          <img
            className="w-8 h-8 md:w-11 md:h-11"
            src={tw}
            alt="Twitter icon"
          />
          <img
            className="w-8 h-8 md:w-11 md:h-11"
            src={fa}
            alt="Facebook icon"
          />
          <img
            className="w-8 h-8 md:w-11 md:h-11"
            src={li}
            alt="LinkedIn icon"
          />
          <img className="w-8 h-8 md:w-11 md:h-11" src={gi} alt="GitHub icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
