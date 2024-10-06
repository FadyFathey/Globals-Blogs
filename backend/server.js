const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/blogs", async (req, res) => {
  const { size, page, q, category } = req.query;

  try {
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${size}&page=${page}&apiKey=${process.env.VITE_API_KEY}`;

    if (q) {
      url += `&q=${q}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    const response = await axios.get(url);
    res.json({ articles: response.data.articles });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from News API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
