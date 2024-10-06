import React from "react";
import { useLocation } from "react-router-dom";
import Subscribe from "../Subscribe";
import Heading from "../util/Heading";
import SubTitle from "../util/SubTitle";
import blog1 from "../../assets/blog1.png";

const BlogPage = () => {
  const { state: blog } = useLocation();

  return (
    <section>
      <Heading props={blog ? blog.title : "Blog Page"} />
      <div>
        <div>
          <SubTitle
            props={blog ? blog.description : "Lorem ipsum dolor sit amet"}
          />

          <img
            src={blog?.urlToImage || blog1}
            alt={blog?.title || "blog-1"}
            className="flex justify-center items-center m-auto sm:w-[230px] sm:h-[180px] mt-4 rounded-[20px] md:w-[1200px] md:h-[800px]"
            loading="lazy"
          />

          <h2
            style={{ marginTop: "38px" }}
            className="sm:text-[32px] md:text-4xl text-slate-50 font-bold"
          >
            {blog ? blog.title : "Lorem ipsum dolor"}
          </h2>

          <p style={{ marginTop: "38px" }} className="text-slate-50">
            {blog
              ? blog.content
              : `Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum et neque error aut maxime
            nesciunt...`}
          </p>
        </div>
      </div>
      <Subscribe />
    </section>
  );
};

export default BlogPage;
