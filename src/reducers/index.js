import { combineReducers } from "redux";
import productsShop from "./shopProducts";
import shopProductDetail from "./shopProductDetail";
import user from "./user";
import shopCart from "./shopCart"
// import shopCart from "./shopCart"

const rootReducers = combineReducers({
  productsShop,
  shopProductDetail,
  user,
  shopCart
});

export default rootReducers;
