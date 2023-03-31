import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <div>
      <Link to={"/blog/new"} className="button">
        <p>Add</p>
      </Link>
    </div>
  );
};

export default Add;
