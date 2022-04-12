
const ProductCard = (props) => {
  return (
    <div className="card">
      <img className="cardImage" src={props.imageUrl} />
      <p className="cardTitle">{props.title}</p>
    </div>
  );
};

export default ProductCard;
