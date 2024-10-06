import React, { useState, useEffect } from "react";
import Heading from "../util/Heading";
import SubTitle from "../util/SubTitle";
import BLogsComp from "../util/BLogsComp";
import ReactPaginate from "react-paginate";

const AllPostsPage = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // State to track the current page number
  const [currentPage, setCurrentPage] = useState(0);

  // State to control dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // State to store the currently selected category
  const [categories, setCategories] = useState("");

  useEffect(() => {
    // Get dropdown menu and its button element
    const targetEl = document.getElementById("dropdown");
    const triggerEl = document.getElementById("dropdown-button");

    // Check if elements exist
    if (targetEl && triggerEl) {
      // Function to handle click events outside the dropdown
      const handleClick = (e) => {
        // Close dropdown if click is outside the elements
        if (!targetEl.contains(e.target) && !triggerEl.contains(e.target)) {
          setDropdownOpen(false);
          targetEl.classList.add("hidden");
        }
      };

      // Attach event listener to detect clicks outside the dropdown
      document.addEventListener("click", handleClick);

      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, []);

  // Handle the search input value change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Prevent the form from submitting
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // Change the current page when a pagination link is clicked
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Handle category selection from dropdown
  const handleCategoryClick = (category) => {
    setCategories((prevCategory) => {
      if (prevCategory === category) {
        return "";
      } else {
        return category;
      }
    });
    setDropdownOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    const targetEl = document.getElementById("dropdown");
    if (targetEl) {
      setDropdownOpen(!dropdownOpen);
      targetEl.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <section>
      <Heading props={"All blogs"} />
      <SubTitle props={"You can find all global blogs here"} />

      <form className="max-w-lg mt-4 mx-auto" onSubmit={handleFormSubmit}>
        <div className="flex relative">
          <button
            id="dropdown-button"
            type="button"
            onClick={toggleDropdown}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 h-[40px] border-none"
          >
            {categories === "" ? "All categories" : categories}
            <svg
              className={`w-2.5 h-2.5 ms-2.5 transform transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="hidden absolute top-full left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-1"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {[
                "business",
                "entertainment",
                "general",
                "health",
                "science",
                "sports",
                "technology",
              ].map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
              onChange={handleSearch}
              value={searchQuery}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="flex justify-center items-center mt-4">
        <BLogsComp
          size={10}
          q={searchQuery}
          currentPage={currentPage}
          category={categories}
        />
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        }
        previousLabel={
          <span className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        }
        onPageChange={handlePageClick}
        pageCount={10}
        containerClassName="flex justify-center items-center mt-4"
        pageClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activeClassName="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        breakClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      />
    </section>
  );
};

export default AllPostsPage;
