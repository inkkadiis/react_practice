import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navi = useNavigate();
  const goToHome = () => {
    navi("/");
  };

  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};

export default Aboutpage;
