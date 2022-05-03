import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import UseMyDataFetching from "../hooks/UseMyDataFetching";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

const FavoritesPage = ()=>{
  const {favList} = useContext(AppContext);
    const { data, isLoading } = UseMyDataFetching(
    "https://fakestoreapi.com/products"
  );

 
  return <Layout pageTitle='Favorites'>
    <div style={{display:'flex', 
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent:'space-evenly', margin:10,}}>
 {favList.length == 0  ? "You haven't chosen any favourites yet!" :
    isLoading ? "Loading" : 
      data?.map(product=>{
        if(favList?.includes(product.id)){
          return <ProductCard
                    imageUrl={product.image}
                    title={product.title}
                    id={product.id}
                  />
        }
      })
    }
    </div>
  </Layout >
}

export default FavoritesPage;
