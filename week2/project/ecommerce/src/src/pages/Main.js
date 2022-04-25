import { useState } from "react";
import CategoryController from "../components/CategoryController";
import ProductController from "../components/ProductController";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="container">
      <h1 className="page-title">Products</h1>
      <CategoryController
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductController selectedCategory={selectedCategory} />
    </div>
  );
};

export default Main;
