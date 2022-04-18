import { combineReducers } from "redux";
import productsShop from "./shopProducts";
import shopProductDetail from "./shopProductDetail";
import user from "./user";

const rootReducers = combineReducers({
  productsShop,
  shopProductDetail,
  user,
});

export default rootReducers;
