import { Link } from "react-router-dom";
import "./ShopProductItem.css";
const ShopProductItem = ({
  productId,
  imageUrl,
  title,
  description,
  location,
  price,
  rate
}) => {
  return (
    <Link to={"/shop/" + productId} className="shop-product-item">
      <div className="product-image">
        <div className="product-rate-container">
          <i className="star-icon fas fa-star"></i>
          <span>{rate}</span>
        </div>
        <img src={imageUrl} alt={title} />
        <div className="container-add-to-cart">
          <div>
            <i className="far fa-heart"></i>
          </div>
          <div>
            <i className="far fa-cart-plus"></i>
          </div>
        </div>
      </div>
      <div className="product-wrapper-text">
        <div>
          <h1 className="product-name">{title}</h1>
          <p className="product-description small-text">{description}</p>
        </div>
        <div className="container-address-price small-text">
          <div>
            <i className="fas fa-map-marker-minus"></i> <span>{location}</span>
          </div>
          <div>{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ShopProductItem;
