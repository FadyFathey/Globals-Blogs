import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import blogImg from "../../assets/blogImg.png";
import axios from "axios";

const BLogsComp = ({ props }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const getBlogs = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${props}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => setBlogs(res.data.articles || []));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    navigate("/blog", { state: blog });
  };

  return (
    <div className="grid gap-8 mt-[82px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto cursor-pointer">
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
            onClick={() => handleBlogClick(blog)}
          >
            <img
              src={blog.urlToImage ? blog.urlToImage : blogImg}
              alt="blogImg"
              className="w-full h-[300px] object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-4">
              <h3 className="text-slate-50 text-2xl font-bold text-center mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-xl font-normal text-center mb-2">
                {blog.publishedAt.slice(0, 10)}
              </p>
              <h4 className="text-gray-400 text-xl font-normal text-center mb-4">
                {blog.author}
              </h4>
              <p className="text-slate-50 text-xl font-normal text-center">
                {blog.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        // Static Blog Cards
        <div>{/* Render static cards as fallback */}</div>
      )}
    </div>
  );
};

export default BLogsComp;
