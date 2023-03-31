import React, { useState } from "react";
import { useEffect } from "react";
import Add from "../components/Add";
import BlogItem from "../components/BlogItem";

const BlogListPage = () => {
  let [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);

  let getBlogs = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/blogs");
    let data = await response.json();
    setBlogs(data);
  };

  return (
    <div>
      <div className="blogs-list">
        {blogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </div>
      <Add />
    </div>
  );
};

export default BlogListPage;
