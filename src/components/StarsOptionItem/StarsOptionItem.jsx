import "./StarsOptionItem.css";

import { connect } from "react-redux";

import { updateRateModeShop } from "../../actions/shopProducts";
import Stars from "../Stars/Stars";
import { useRef } from "react";

const StarsOptionItem = ({ amount, index, rate, updateRateMode }) => {
  const starsOptionItemRef = useRef();
  return (
    <li
      ref={starsOptionItemRef}
      className={"stars-option-item" + (rate === index ? " active" : "")}
      onClick={() => {
        if (starsOptionItemRef.current.className.includes(" active")) {
          updateRateMode("");
        } else {
          updateRateMode(index.toString());
        }
      }}
    >
      <Stars activeKeyStar={amount} maxStars={5} />
      {amount !== 5 && <span>& up</span>}
    </li>
  );
};

const mapStateToProps = (state) => ({
  rate: parseInt(state.productsShop.rate),
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateRateMode: (rate) => dispatch(updateRateModeShop(rate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarsOptionItem);
