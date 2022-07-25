import { connect } from "react-redux";
import {
  updateDiscountMode,
  updateProductAmount,
} from "../../actions/shopProductDetail";
import DiscountOption from "../DiscountOption/DiscountOption";
import "./DiscountOptions.css";
const dataLabel = [
  "Buy 2 get 15 percent off",
  "Buy 3 get 25 percent off",
  "Buy 5 get 50 percent off",
];
const DiscountOptions = (
  { discountMode, updateDiscountMode, updateAmount } = {
    ...mapStateToProps(),
    ...mapDispatchToProps(),
  }
) => {
  return (
    <div>
      {dataLabel.map((label, index) => (
        <DiscountOption
          key={index}
          label={label}
          isActive={discountMode === index}
          index={index}
          updateDiscountMode={updateDiscountMode}
          updateAmount={updateAmount}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    discountMode: state.shopProductDetail.discountMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDiscountMode: (discountMode) =>
      dispatch(updateDiscountMode(discountMode)),
    updateAmount: (amount) => dispatch(updateProductAmount(amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountOptions);
