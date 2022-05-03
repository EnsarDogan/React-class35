import { AppContext } from "../context/AppContext";
import { ReactComponent as FavSolid } from "../assets/heart-solid.svg";
import { ReactComponent as FavRegular } from "../assets/heart-regular.svg";
import { useContext } from "react";
// id, imageUrl, title 
const ProductDetails = ({ product }) => {

  const { favList, setFavList } = useContext(AppContext);

  const toggleFav = (productId) => {

    if (favList.includes(productId)) {
      setFavList((prevFavList) =>
        [...prevFavList].filter((id) => id !== productId)
      );
    } else {
      setFavList((prevFavList) => [...prevFavList, productId]);
    }
  };

  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={product?.image} height={420} width={327} alt="product-image" />
      </div>
      <div className="product-info">
        <div onClick={() => toggleFav(product?.id)} className='fav-button'>
          {
            favList.includes(product?.id) ? (
              <FavSolid width="1.5rem" color="black" />
            ) : (
              <FavRegular width="1.5rem" color="black" />
            )
          }
        </div>
        <div className="product-text">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
