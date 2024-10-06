import React from "react";
import avatar from "../assets/avatar.webp";

const Hero = () => {
  return (
    <header className="mt-[39px] md:mt-[85px] flex flex-col-reverse lg:flex-row lg:gap-[58px]">
      {/* Hero content */}
      <div className="flex-1">
        <div className="text-center lg:text-left">
          <span className="text-white text-xl md:text-5xl font-bold  mr-1">
            Hi there, we are
          </span>
          <span className="text-cyan-400 text-xl md:text-5xl font-bold ">
            Global’s Blog
          </span>
          <span className="text-white text-xl md:text-5xl font-bold ">👋</span>
          {/* Hero description */}
          <div className="mt-[48px] w-full md:w-[713px] mx-auto lg:mx-0">
            <div>
              <span className="text-slate-300 text-[18px] md:text-[26px] font-medium ">
                Welcome to our space where we share insights, tips, and the
                latest trends
                <br />
                on everything from technology and design to business and
                innovation.
                <br />
                Whether you're here to learn, explore, or just get inspired,
              </span>
              <br />
              <span className="text-cyan-400 text-[18px] md:text-[26px] font-medium ">
                you're in the right place.
              </span>
              <span className="text-slate-300 text-[18px] md:text-[26px] font-medium ">
                Stay tuned and let’s dive into the world of ideas and
                discoveries.
                <br />
                Together, let's make something great.
              </span>
            </div>
          </div>
          {/* end Hero description */}
        </div>
      </div>
      {/* end Hero content */}

      {/* Hero image */}
      <div className="flex justify-center mb-[17px] md:mb-[17px] lg:mb-0 lg:mt-0">
        <img
          className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border-2 rounded-full md:border-none md:rounded-full lg:border-2 lg:rounded-full xl:border-2 xl:rounded-full object-contain"
          src={avatar}
          alt="blog avatar"
        />
      </div>
      {/* end Hero image */}
    </header>
  );
};

export default Hero;
