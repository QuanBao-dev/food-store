import "./QualityProductCard.css";
const QualityProductCard = ({ imageUrl, name, description, price, style }) => {
  return (
    <div
      style={{
        ...style,
      }}
    >
      <div className="quality-product-card-container">
        <img src={imageUrl} alt="" />
        <div className="quality-product-content-wrapper">
          <div className="product-best-deal">Best deal</div>
          <h1 className="product-name">{name}</h1>
          <p className="product-description">{description}</p>
          <div className="product-price">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default QualityProductCard;
