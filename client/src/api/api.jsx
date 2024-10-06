import axios from "axios";

// Function to get blogs based on query parameters
export const fetchBlogs = async ({ size, currentPage, q, category }) => {
  try {
    // Update the URL to use your backend's API route
    let url = `/api/blogs?size=${size}&page=${currentPage + 1}`;

    // Append query and category if they exist
    if (q) {
      url += `&q=${q}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    // Fetch blogs from the backend instead of directly from NewsAPI
    const response = await axios.get(url);
    return response.data.articles || [];
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
};
