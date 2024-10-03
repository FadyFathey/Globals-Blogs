import React from "react";

const Subscribe = () => {
  return (
    <section className="mt-[123px] flex flex-col md:flex-row justify-center items-center">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <span className="text-slate-50 text-4xl md:text-5xl font-medium mr-1">
          Subscribe to our
        </span>
        <br />
        <span className="text-cyan-400 text-4xl md:text-5xl font-medium">
          Newsletters
          <br />
        </span>
        <div className="text-slate-300 text-lg md:text-xl font-normal mt-[33px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
        </div>
      </div>
      <div className="w-full md:w-[522px] h-[70px] bg-slate-800 rounded-[30px] flex flex-row justify-center md:justify-between items-center p-4 md:p-0">
        <input
          type="email"
          className="w-full h-full bg-transparent text-center placeholder:text-slate-300 placeholder:text-lg md:placeholder:text-xl placeholder:font-normal px-[16px] outline-none text-white caret-white"
          placeholder="Enter your email"
        />
        <div className="flex justify-center items-center w-[164px] h-[46px] bg-gradient-to-l from-cyan-400 to-sky-500 rounded-[30px] cursor-pointer mr-4">
          <div className="text-slate-800 text-xl font-bold">Subscribe</div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
