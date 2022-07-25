import { connect } from "react-redux";
import { updateLayoutModeShop } from "../../actions/shopProducts";
import "./ShopProductsLayoutOptions.css";
const ShopProductsLayoutOptions = ({ layout, updateLayout }) => {
  return (
    <div className="shop-products-layout-options">
      <i
        className={
          "fas fa-grip-horizontal" + (layout === "horizontal" ? " active" : "")
        }
        onClick={() => {
          updateLayout("horizontal");
        }}
      ></i>
      <i
        className={
          "fas fa-grip-vertical" + (layout === "vertical" ? " active" : "")
        }
        onClick={() => {
          updateLayout("vertical")
        }}
      ></i>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  updateLayout: (layout) => dispatch(updateLayoutModeShop(layout)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopProductsLayoutOptions);
