import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goProductAll = () => {
    navigate("/products?q=pants");
  };

  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about"> Go to about page </Link>
      <button onClick={goProductAll}>All</button>
    </div>
  );
};

export default HomePage;
