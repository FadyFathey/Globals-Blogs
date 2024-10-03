import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage"; // Import HomePage component
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BlogPage from "./components/pages/BlogPage";
import AllPostsPage from "./components/pages/AllPostsPage";

function App() {
  return (
    <Router>
      <div className="custom-container mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/all-blogs" element={<AllPostsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
