import { useState } from "react";
import CategoryController from "../components/CategoryController";
import ProductController from "../components/ProductController";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
   <Layout pageTitle='Products'>
      <div className="container">
      {/* <div>
        <h1 className="page-title">Products</h1>
        <div>
          <Link to="/">Products</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div> */}
      <CategoryController
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductController selectedCategory={selectedCategory} />
    </div>
   </Layout>
  );
};

export default Main;
