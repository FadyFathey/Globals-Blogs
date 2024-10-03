import React, { useState } from "react";
import Heading from "../util/Heading";
import SubTitle from "../util/SubTitle";
import BLogsComp from "../util/BLogsComp";

const AllPostsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Single state to store the search input and trigger the search

  // Handle the input change when the user types in the search field
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the state directly
  };

  // Handle the form submission to prevent the default behavior
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
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

          {/* Hidden dropdown menu (UI only, not connected to any functionality) */}
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>

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

      {/* Pass the searchQuery (q) and size to BLogsComp */}
      <BLogsComp size={100} q={searchQuery} />
    </section>
  );
};

export default AllPostsPage;
