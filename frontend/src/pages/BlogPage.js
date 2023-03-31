import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  const blogId = useParams().id;
  let CSRF = document.cookie.slice(10)
  let [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog();
  }, [blogId]);

  let getBlog = async () => {
    if (blogId === "new") return;
    let response = await fetch(`http://127.0.0.1:8000/api/blogs/${blogId}`);
    let data = await response.json();
    setBlog(data);
  };

  let createBlog = async () => {
    fetch(`http://127.0.0.1:8000/api/blogs/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF,
      },
      body: JSON.stringify(blog),
    });
  };

  let updateBlog = async () => {
    fetch(`http://127.0.0.1:8000/api/blogs/${blogId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF,
      },
      body: JSON.stringify(blog),
    });
  };

  let deleteBlog = async () => {
    fetch(`http://127.0.0.1:8000/api/blogs/${blogId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF,
      },
    });
    navigate("/");
  };

  let handleUpdate = () => {
    if (blogId !== "new" && blog.title === "" && blog.description === "") {
      deleteBlog();
    } else if (blogId !== "new" && blog.title === "") {
      blog.title = "No title";
      updateBlog();
    } else if (blogId !== "new" && blog.description === "") {
      blog.description = "No description";
      updateBlog();
    } else if (blogId !== "new") {
      updateBlog();
    } else if (blogId === "new" && blog !== null) {
      createBlog();
    }
    navigate("/");
  };

  return (
    <div>
      <Link to={"/"}  className="button">
        <p onClick={handleUpdate}>Back</p>
      </Link>
      {blogId !== "new" ? (
        <Link to={"/"}  className="button">
          <p onClick={deleteBlog}>Delete</p>
        </Link>
      ) : (
        <Link to={"/"}  className="button">
          <p onClick={handleUpdate}>Done</p>
        </Link>
      )}
      <p className="box-heading">Title</p>
      <textarea placeholder="Enter title" className="text-area"
        onChange={(e) => {
          setBlog({ ...blog, title: e.target.value });
        }}
        value={blog?.title}
      ></textarea>
      <p className="box-heading">Description</p>
      <textarea placeholder="Enter description"  className="text-area"
        onChange={(e) => {
          setBlog({ ...blog, description: e.target.value });
        }}
        value={blog?.description}
      ></textarea>
    </div>
  );
};

export default BlogPage;
