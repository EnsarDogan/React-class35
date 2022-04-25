const ProductDetails = ({ product }) => {
  return (
    <div className="product-details-container">
      <h1 className="page-title">{product?.title}</h1>
      <div className="product-detail">
        <p className="details">{product?.description}</p>
        <img className="detail-image" src={product?.image} />
      </div>
    </div>
  );
};

export default ProductDetails;
