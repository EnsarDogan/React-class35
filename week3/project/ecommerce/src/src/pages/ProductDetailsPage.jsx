import UseMyDataFetching from "../hooks/UseMyDataFetching";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Layout from "../components/Layout";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = UseMyDataFetching(
    `https://fakestoreapi.com/products/${id}`
  );

  return (
    <Layout pageTitle='Details'>
      {isLoading ? <div>Loading</div> : <ProductDetails product={data} />}
    </Layout>
  );
};
export default ProductDetailsPage;
