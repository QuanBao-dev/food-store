import "./HoverCart.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HoverCart = ({ cart, hoverCartContainerRef, isMobile }) => {
  if (isMobile) return <div ref={hoverCartContainerRef}></div>;
  return (
    <div className="hover-cart-container" ref={hoverCartContainerRef}>
      <ul className="hover-cart-wrapper">
        {cart.map(({ item, amount }, key) => (
          <Link
            to={"/shop/" + item.productId}
            className="hover-cart-item-container"
            key={key}
          >
            <li className="hover-cart-item" key={item.productId}>
              <img src={item.imageUrl} alt="" />
              <div className="hover-cart-detail">
                <h1 className="hover-title">{item.title}</h1>
                <div className="hover-amount">{amount}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <div className="container-buttons">
        <Link to={"/shop/checkout"}>
          <button>Check out</button>
        </Link>
        <Link to={"/shop/cart"}>
          <button>View Cart</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shopCart.cart,
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(HoverCart);
