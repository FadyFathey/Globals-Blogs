import axios from "axios";

// Function to get blogs based on query parameters
export const fetchBlogs = async ({ size, currentPage, q, category }) => {
  try {
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${size}&page=${
      currentPage + 1
    }&apiKey=${import.meta.env.VITE_API_KEY}`;
    // check if query parameters exist
    if (q) {
      url += `&q=${q}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    const response = await axios.get(url);
    return response.data.articles || [];
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
};
