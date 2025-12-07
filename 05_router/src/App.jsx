import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import LogInPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id/:num" element={<ProductDetail />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
