import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="blogItem">
      <Link to={`/blog/${blog.id}`}  className = 'item-link'>
        <h1>{blog.title}</h1>
        <h2>{blog.description}</h2>
      </Link>
    </div>
  );
};

export default BlogItem;
