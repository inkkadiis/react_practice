import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navi = useNavigate();
  const goProductAll = () => {
    navi("/products?q=pants");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about"> Go to about page </Link>
      <button onClick={goProductAll}>All</button>
    </div>
  );
};

export default Homepage;
