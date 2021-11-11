import * as actions from "../Types/shopProductDetail";

export const updateDetailData = (detailData) => {
  return {
    type: actions.SET_DETAIL_DATA,
    payload: { detailData },
  };
};

export const updateDiscountMode = (discountMode) => {
  return {
    type: actions.UPDATE_DISCOUNT_MODE,
    payload: { discountMode },
  };
};

export const updatePriceProduct = (productPrice) => {
  return {
    type: actions.UPDATE_PRODUCT_PRICE,
    payload: { productPrice },
  };
};

export const updateProductAmount = (productAmount) => {
  return {
    type: actions.UPDATE_PRODUCT_AMOUNT,
    payload: { productAmount },
  };
};

export const updateRelatedProducts = (relatedProducts) => {
  return {
    type: actions.UPDATE_RELATED_PRODUCTS,
    payload: { relatedProducts },
  };
};

export const updateIsLoadingRelatedProducts = (isLoadingRelatedProducts) => ({
  type: actions.UPDATE_IS_LOADING_RELATED_PRODUCTS,
  payload: {isLoadingRelatedProducts}
})