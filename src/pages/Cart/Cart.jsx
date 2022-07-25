import './Cart.css';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Banner from '../../components/Banner/Banner';

const Cart = ({ cart }) => {
  window.scroll({ top: 0 });
  const history = useHistory();
  return (
    <div>
      <Banner url={window.location.href}></Banner>
      <div className="cart-container">
        <table className="cart-wrapper">
          <thead>
            <tr>
              <th className="round-border-top-left"></th>
              <th>Title</th>
              <th>Price</th>
              <th>Location</th>
              <th>Rate</th>
              <th className="round-border-top-right">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(({ item, amount }, index) => (
              <tr key={item.productId}>
                <td
                  className={
                    index === cart.length - 1 ? "round-border-bottom-left" : ""
                  }
                >
                  <img src={item.imageUrl} width="100px" alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.location}</td>
                <td>{item.rate}</td>
                <td
                  className={
                    index === cart.length - 1 ? "round-border-bottom-right" : ""
                  }
                >
                  {amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="cart-button-submit"
        onClick={() => history.push("/shop/checkout")}
      >
        Go to checkout
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
