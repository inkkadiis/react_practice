import { useState } from "react";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Productpage from "./pages/Productpage";
import Productdetail from "./pages/Productdetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id/:num" element={<Productdetail />} />
      </Routes>
    </div>
  );
}

export default App;
