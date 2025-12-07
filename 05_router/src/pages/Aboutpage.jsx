import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};

export default AboutPage;
