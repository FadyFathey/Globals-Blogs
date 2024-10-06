import React from "react";

const Heading = ({ props }) => {
  return (
    <h1 className="flex justify-center sm:text-xl  items-center text-center text-slate-50 md:text-5xl font-bold md:mt-[132px]">
      {props}
    </h1>
  );
};

export default Heading;
