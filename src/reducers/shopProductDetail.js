import * as actions from "../Types/shopProductDetail";
const initialState = {
  detailData: {},
  discountMode: null,
  productPrice: null,
  productAmount: 1,
  relatedProducts: [],
  isLoadingRelatedProducts: true,
};
const shopProductDetail = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DETAIL_DATA:
      return {
        ...state,
        detailData: action.payload.detailData,
      };
    case actions.UPDATE_DISCOUNT_MODE:
      return {
        ...state,
        discountMode: action.payload.discountMode,
      };
    case actions.UPDATE_PRODUCT_PRICE:
      return {
        ...state,
        productPrice: action.payload.productPrice,
      };
    case actions.UPDATE_PRODUCT_AMOUNT:
      return {
        ...state,
        productAmount: action.payload.productAmount,
      };
    case actions.UPDATE_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: action.payload.relatedProducts,
      };
    case actions.UPDATE_IS_LOADING_RELATED_PRODUCTS:
      return {
        ...state,
        isLoadingRelatedProducts: action.payload.isLoadingRelatedProducts,
      };
    default:
      return state;
  }
};

export default shopProductDetail;