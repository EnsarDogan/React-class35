import UseMyDataFetching from "../components/UseMyDataFetching";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = UseMyDataFetching(
    `https://fakestoreapi.com/products/${id}`
  );

  return (
    <div>
      {isLoading ? <div>Loading</div> : <ProductDetails product={data} />}
    </div>
  );
};
export default ProductDetailsPage;
