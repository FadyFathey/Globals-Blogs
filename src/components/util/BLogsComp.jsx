import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import blogImg from "../../assets/blogImg.png";
import axios from "axios";

const BLogsComp = ({ size, q, currentPage, category }) => {
  // State to manage blogs, loading, and errors
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Function to get blogs from the API
  const getBlogs = () => {
    setLoading(true); // Start loading
    setError(null); // Reset error state

    // Construct the API URL based on search query (q), size, and currentPage
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${size}&page=${
      currentPage + 1
    }&apiKey=${import.meta.env.VITE_API_KEY}`; // We use currentPage + 1 to match API's page numbering

    if (q) {
      url += `&q=${q}`; // Add `q` to the API request only if it has a value
    }
    if (category) {
      url += `&category=${category}`;
    }
    axios
      .get(url)
      .then((res) => {
        const articles = res.data.articles || [];
        if (articles.length === 0) {
          setError("No results found."); // Set error message if no articles are returned
        } else {
          setBlogs(articles);
        }
      })
      .catch(() => {
        setError("An error occurred while fetching data."); // Handle API error
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });

    axios
      .get(
        "https://newsapi.org/v2/top-headlines/sources?apiKey=0c925150fdad4ef191682bcd6072f75d"
      )
      .then((res) => {
        console.log(res.data.sources);
      });
  };

  useEffect(() => {
    getBlogs(); // Re-fetch data when `q`, `size`, or `currentPage` changes
  }, [q, size, currentPage, category]);

  // Handle blog click and navigation
  const handleBlogClick = (blog) => {
    navigate("/blog", { state: blog });
  };

  // Loading Spinner
  if (loading) {
    return (
      <div role="status" className="flex justify-center items-center h-[400px]">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  // Display error if any
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // Display the blogs
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
              src={
                blog.urlToImage &&
                blog.urlToImage.trim() !== "" &&
                blog.urlToImage !== "null"
                  ? blog.urlToImage
                  : "https://cdn.pixabay.com/photo/2016/01/31/16/34/blogging-1171731_1280.jpg"
              }
              alt={blog.title || "Default blog image"}
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
        <div className="text-center text-white">No blogs found.</div>
      )}
    </div>
  );
};

export default BLogsComp;
