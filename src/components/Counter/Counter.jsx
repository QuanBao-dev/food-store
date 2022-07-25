import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  updateDiscountMode,
  updateProductAmount,
} from "../../actions/shopProductDetail";
import "./Counter.css";
const Counter = ({ amount, updateAmount, updateDiscountMode }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    updateAmount(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setCount(amount)
  },[amount]);
  useEffect(() => {
    if(count >= 5){
      updateDiscountMode(2);
      return;
    }
    if(count >= 3){
      updateDiscountMode(1);
      return;
    }
    if(count >= 2){
      updateDiscountMode(0);
      return;
    }
    updateDiscountMode(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[count])
  return (
    <div className="counter-container">
      <div
        className="count-down-button"
        onClick={() => {
          if (count >= 2) {
            setCount(count - 1);
            updateAmount(count - 1);
          }
        }}
      >
        <i className="fas fa-minus"></i>
      </div>
      <div>{count}</div>
      <div
        className="count-up-button"
        onClick={() => {
          setCount(count + 1);
          updateAmount(count + 1);
        }}
      >
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: state.shopProductDetail.productAmount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateAmount: (productAmount) => dispatch(updateProductAmount(productAmount)),
  updateDiscountMode: (discountMode) =>
    dispatch(updateDiscountMode(discountMode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
