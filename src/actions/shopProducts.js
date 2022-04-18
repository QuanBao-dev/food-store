import * as actions from "../Types/shopProducts";

export const listProductsShop = (list) => {
  return {
    type: actions.UPDATE_LIST_PRODUCTS_SHOP,
    payload: { list },
  };
};

export const startLoadingShop = () => {
  return {
    type: actions.START_LOADING,
  };
};

export const stopLoadingShop = () => {
  return {
    type: actions.STOP_LOADING,
  };
};

export const updateSortModeShop = (sort) => {
  return {
    type: actions.UPDATE_SORT_MODE,
    payload: { sort },
  };
};

export const setRawListShop = (rawList) => {
  return {
    type: actions.SET_RAW_LIST,
    payload: { rawList },
  };
};

export const updateKeySearchShop = (keySearch) => {
  return {
    type: actions.UPDATE_KEY_SEARCH,
    payload: { keySearch },
  };
};

export const updatePriceModeShop = (price) => ({
  type: actions.UPDATE_PRICE_MODE,
  payload: { price },
});

export const updateRateModeShop = (rate) => ({
  type: actions.UPDATE_RATE_MODE,
  payload: { rate },
});

export const updatePageShop = (page) => ({
  type: actions.UPDATE_PAGE_SHOP,
  payload: { page },
});

export const updatePopularModeShop = (popular) => ({
  type: actions.UPDATE_POPULAR_MODE,
  payload: { popular },
});

export const updateLayoutModeShop = (layout) => ({
  type: actions.UPDATE_LAYOUT_MODE,
  payload: { layout },
});
