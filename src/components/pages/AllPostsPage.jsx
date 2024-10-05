import React, { useState } from "react";
import Heading from "../util/Heading";
import SubTitle from "../util/SubTitle";
import BLogsComp from "../util/BLogsComp";
import ReactPaginate from "react-paginate";

const AllPostsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search input
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page

  // Handle the input change when the user types in the search field
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the state directly with the new search value
  };

  // Prevent the default form submission behavior
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh or submission
  };

  // Handle page click for pagination
  const handlePageClick = (event) => {
    setCurrentPage(event.selected); // Set the current page to the selected page
  };

  return (
    <section>
      {/* Main heading for the posts page */}
      <Heading props={"All blogs"} />

      {/* Subtitle for the section */}
      <SubTitle props={"You can find all global blogs here"} />

      {/* Form to handle the search input */}
      <form className="max-w-lg mt-4 mx-auto" onSubmit={handleFormSubmit}>
        <div className="flex">
          {/* Dropdown button for selecting categories (UI only, no functionality implemented here) */}
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 h-[40px] border-none"
            type="button"
          >
            All categories
            <svg
              className="w-2.5 h-2.5 ms-2.5"
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

          {/* Search input field */}
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
              onChange={handleSearch} // Update searchQuery directly on change
              value={searchQuery} // Bind the input value to searchQuery
            />
            {/* Submit button */}
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Centered BLogsComp Component */}
      <div className="flex justify-center items-center mt-4">
        <BLogsComp size={10} q={searchQuery} currentPage={currentPage} />
      </div>

      {/* Pagination with ReactPaginate */}
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
          </a>
        }
        previousLabel={
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
          </a>
        }
        onPageChange={handlePageClick} // Handle page change events
        pageCount={10} // Number of pages (change based on total results)
        containerClassName="flex justify-center items-center mt-4" // Center the pagination
        pageClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        activeClassName="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        breakClassName="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      />
    </section>
  );
};

export default AllPostsPage;
