import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQurey] = useSearchParams();

  console.log("dd", query.get("page"));
  return (
    <div>
      <h1>Show All Products</h1>
    </div>
  );
};

export default ProductPage;
