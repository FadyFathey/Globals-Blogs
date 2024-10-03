import React from "react";
import { Link } from "react-router-dom";
import blogIcon from "../assets/blogsIcon.svg";
import blogImg from "../assets/blogImg.png";
import BLogs from "./util/BLogsComp";
import BLogsComp from "./util/BLogsComp";

const Blogs = () => {
  return (
    <section className="mt-[36px] md:mt-[95px] px-4">
      {/* Start blogs heading */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-slate-50 text-xl md:text-5xl font-bold">
            Latest
          </span>
          <span className="text-cyan-400 text-xl md:text-5xl font-bold">
            Posts
          </span>
        </div>

        {/* View All Posts Link */}
        <Link
          to="/all-blogs"
          className="flex items-center gap-2 md:gap-3 hover:text-cyan-400"
        >
          <div className="text-slate-50 text-xs md:text-xl">View all Posts</div>
          <img src={blogIcon} alt="blogIcon" className="w-[50px] md:w-11" />
        </Link>
      </div>
      {/* End blogs heading */}

      {/* Start blogs card */}
      <BLogsComp props={6} />
      {/* End blogs card */}
    </section>
  );
};

export default Blogs;
