import { useState } from "react";
import ProductCard from "./components/ProductCard";
import CategoryButton from "./components/CategoryButton";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="container">
      <h1 className="page-title">Products</h1>
      <div className="category-container">
        <CategoryButton
          onPress={() => {
            setSelectedCategory("");
          }}
          categoryName="All Products"
          isActive={selectedCategory === ""}
        />
        {categories.map((category) => (
          <CategoryButton
            onPress={() => {
              setSelectedCategory(category);
            }}
            categoryName={category}
            isActive={category === selectedCategory}
          />
        ))}
      </div>
      <div className={"product-container"}>
        {products.map((product) => {
          if (selectedCategory === "") {
            return (
              <div className="product-item">
                <ProductCard imageUrl={product.image} title={product.title} />
              </div>
            );
          }
          if (product.category === selectedCategory) {
            return (
              <div className="item">
                <ProductCard imageUrl={product.image} title={product.title} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
