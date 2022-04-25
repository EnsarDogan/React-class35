import { Link } from "react-router-dom";

const ProductCard = ({ id, imageUrl, title }) => {
  return (
    <Link className="card" to={`/product/${id}`}>
      <img className="cardImage" src={imageUrl} />
      <p className="cardTitle">{title}</p>
    </Link>
  );
};

export default ProductCard;
