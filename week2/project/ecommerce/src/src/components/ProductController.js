import ProductCard from "./ProductCard";
import UseMyDataFetching from "./UseMyDataFetching";
const ProductController = ({ selectedCategory }) => {
  const { data, isLoading } = UseMyDataFetching(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="product-container">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {data?.map((product) => {
            const showProduct =
              !selectedCategory || product.category === selectedCategory;
            if (showProduct) {
              return (
                <div className="product-item">
                  <ProductCard
                    imageUrl={product.image}
                    title={product.title}
                    id={product.id}
                  />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};
export default ProductController;
