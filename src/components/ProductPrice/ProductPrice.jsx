import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { parsePrice } from "../../util/parsePrice";

const ProductPrice = ({ price, productAmount, discountMode }) => {
  const [priceState, setPriceState] = useState(price);
  useEffect(() => {
    let discountProductAmount;
    let percentOff;
    let amountTimesDiscount;

    switch (discountMode) {
      case 0:
        discountProductAmount = 2;
        percentOff = 15 / 100;
        amountTimesDiscount = parseInt(productAmount / discountProductAmount);
        setPriceState(
          price * (productAmount - amountTimesDiscount) +
            price * percentOff * amountTimesDiscount
        );
        break;
      case 1:
        discountProductAmount = 3;
        percentOff = 25 / 100;
        amountTimesDiscount = parseInt(productAmount / discountProductAmount);
        setPriceState(
          price * (productAmount - amountTimesDiscount) +
            price * percentOff * amountTimesDiscount
        );
        break;
      case 2:
        discountProductAmount = 5;
        percentOff = 50 / 100;
        amountTimesDiscount = parseInt(productAmount / discountProductAmount);
        setPriceState(
          price * (productAmount - amountTimesDiscount) +
            price * percentOff * amountTimesDiscount
        );
        break;
      default:
        setPriceState(productAmount * price);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountMode, productAmount]);
  return (
    <h2 style={{ color: "red" }}>${parsePrice(priceState.toString(), 2)}</h2>
  );
};

const mapStateToProps = (state) => {
  return {
    productAmount: state.shopProductDetail.productAmount,
    discountMode: state.shopProductDetail.discountMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPrice);
