import { useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  reduceItemFromCart,
  removeFromCart,
} from "../../actions/shopCart";
import Banner from "../../components/Banner/Banner";
import "./Checkout.css";

const Checkout = ({
  cart,
  addOneItemIntoCart,
  reduceOneItemFromCart,
  removeOneItemFromCart,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const nameOnCardRef = useRef();
  const cardNumberRef = useRef();
  const history = useHistory();
  return (
    <div className="checkout-container">
      <Banner url={window.location.href}></Banner>
      <div className="checkout-wrapper">
        <section className="ordering-cart-section">
          <h1>Ordering Cart</h1>
          <table className="ordering-cart-table">
            <thead>
              <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            {cart.map(({ item, amount }) => (
              <tbody key={item.productId}>
                <tr>
                  <td
                    style={{
                      display: "flex",
                      alignItem: "center",
                    }}
                  >
                    <img src={item.imageUrl} width={100} alt="" />
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "1rem",
                        fontWeight: "700",
                        fontSize: "1rem",
                      }}
                    >
                      {item.title}
                    </span>
                  </td>
                  <td className="quantity-container">
                    <div className="quantity-wrapper">
                      <span onClick={() => {}}>
                        <i
                          className="fas fa-minus"
                          onClick={() => {
                            if (amount > 1) return reduceOneItemFromCart(item);
                            removeOneItemFromCart(item);
                          }}
                        ></i>
                      </span>
                      <span>{amount}</span>
                      <span
                        onClick={() => {
                          addOneItemIntoCart(item);
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    $
                    {parseFloat(
                      amount * parseFloat(item.price.replace("$", ""))
                    ).toFixed(2)}
                  </td>
                  <td>
                    <i
                      className="fas fa-times"
                      onClick={() => {
                        removeOneItemFromCart(item);
                      }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="total-container">
            <div
              style={{
                borderBottom: "1px solid rgb(205, 205, 205)",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className="total-wrapper">
                <div>Subtotal:</div>
                <div>Shipping:</div>
              </div>
              <div className="total-wrapper">
                <div>
                  $
                  {parseFloat(
                    cart.reduce((ans, data) => {
                      ans +=
                        parseFloat(data.item.price.replace("$", "")) *
                        data.amount;
                      return ans;
                    }, 0)
                  ).toFixed(2)}
                </div>
                <div>Free</div>
              </div>
            </div>
          </div>
          <div
            className="total-container"
            style={{
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            <div>Total:</div>
            <div
              style={{
                marginLeft: "1.4rem",
              }}
            >
              $
              {parseFloat(
                cart.reduce((ans, data) => {
                  ans +=
                    parseFloat(data.item.price.replace("$", "")) * data.amount;
                  return ans;
                }, 0)
              ).toFixed(2)}
            </div>
          </div>
        </section>
        <form className="payment-info-section" action="/">
          <h1>Payment Info</h1>
          <div className="payment-method-container">
            <h4>Payment Method:</h4>
            <div
              className={
                "payment-method-wrapper" + (indexActive === 0 ? " active" : "")
              }
              onClick={() => {
                setIndexActive(0);
              }}
            >
              <div className="check-box"></div>
              <span style={{ cursor: "pointer" }}>Credit Card</span>
            </div>
            <div
              className={
                "payment-method-wrapper" + (indexActive === 1 ? " active" : "")
              }
              onClick={() => {
                setIndexActive(1);
              }}
            >
              <div className="check-box"></div>
              <span style={{ cursor: "pointer" }}>Paypal</span>
            </div>
          </div>

          <div className="name-on-card-container">
            <h4>Name On Card:</h4>
            <input ref={nameOnCardRef} required></input>
          </div>

          <div className="card-number-container">
            <h4>Card Number:</h4>
            <input ref={cardNumberRef} required type="password"></input>
          </div>

          <button
            className="check-out-button"
            onClick={(e) => {
              if (
                nameOnCardRef.current.value.trim() !== "" &&
                cardNumberRef.current.value.trim() !== ""
              ) {
                e.preventDefault();
                alert("Success");
                history.push("/");
              }
            }}
          >
            Check Out
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shopCart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOneItemIntoCart: (item) => dispatch(addToCart(item, 1)),
    removeOneItemFromCart: (item) => dispatch(removeFromCart(item)),
    reduceOneItemFromCart: (item) => dispatch(reduceItemFromCart(item, 1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
