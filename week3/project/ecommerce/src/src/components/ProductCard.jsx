import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ReactComponent as FavSolid } from "../assets/heart-solid.svg";
import { ReactComponent as FavRegular } from "../assets/heart-regular.svg";

const ProductCard = ({ id, imageUrl, title }) => {
  const { favList, setFavList } = useContext(AppContext);
  const navigate = useNavigate();

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
    <>
      <div className="card" onClick={(e)=>navigate(`/product/${id}`)}>
        <div className="image-container">
          <img className="cardImage" src={imageUrl} />
        </div>
        <p className="cardTitle">{title}</p>
      <div onClick={(e)=>{toggleFav(id);e.stopPropagation() }} className='fav-button'>
        {favList.includes(id) ? (
          <FavSolid width="1rem" color="black" />
        ) : (
          <FavRegular width="1rem" color="black" />
        )}
      </div>
      </div>
    </>
  );
};

export default ProductCard;
