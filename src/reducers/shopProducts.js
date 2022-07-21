import * as actions from "../Types/shopProducts";

const initialState = {
  list: [],
  rawList: [],
  page: 1,
  isLoading: true,
  price: "",
  sort: "0",
  keySearch: "",
  rate: "",
  popular: "",
  layout: "horizontal",
};
const productsShop = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_RAW_LIST:
      return {
        ...state,
        rawList: [...action.payload.rawList],
      };
    case actions.UPDATE_LIST_PRODUCTS_SHOP:
      return {
        ...state,
        list: [...action.payload.list],
      };
    case actions.UPDATE_PAGE_SHOP:
      return {
        ...state,
        page: action.payload.page,
      };
    case actions.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case actions.UPDATE_SORT_MODE:
      return {
        ...state,
        sort: action.payload.sort,
      };
    case actions.UPDATE_KEY_SEARCH:
      return {
        ...state,
        keySearch: action.payload.keySearch,
      };
    case actions.UPDATE_PRICE_MODE:
      return {
        ...state,
        price: action.payload.price,
      };
    case actions.UPDATE_RATE_MODE:
      return {
        ...state,
        rate: action.payload.rate,
      };
    case actions.UPDATE_POPULAR_MODE:
      return {
        ...state,
        popular: action.payload.popular,
      };
    case actions.UPDATE_LAYOUT_MODE:
      return {
        ...state,
        layout: action.payload.layout,
      };
    default:
      return state;
  }
};

export default productsShop;
