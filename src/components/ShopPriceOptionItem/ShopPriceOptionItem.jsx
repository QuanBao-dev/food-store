import "./ShopPriceOptionItem.css";

import { connect } from "react-redux";

import { updatePriceModeShop } from "../../actions/shopProducts";
import { useRef } from "react";

const ShopPriceOptionItem = ({ name, index, price, updatePriceMode }) => {
  const priceOptionItemRef = useRef();
  return (
    <li
      ref={priceOptionItemRef}
      className={"price-option-item" + (price === index ? " active" : "")}
      onClick={() => {
        if (priceOptionItemRef.current.className.includes(" active")) {
          updatePriceMode("");
        } else {
          updatePriceMode(index.toString());
        }
      }}
    >
      <div className={"check-box"}></div>
      <div>{name}</div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    price: parseInt(state.productsShop.price),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePriceMode: (price) => dispatch(updatePriceModeShop(price)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPriceOptionItem);
