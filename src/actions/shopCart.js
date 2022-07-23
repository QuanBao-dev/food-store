import * as actions from "../Types/shopCart";

export const initCart = () => {
  return {
    type: actions.INIT_CART,
    payload: JSON.parse(
      window.localStorage.getItem("shopCart")
        ? window.localStorage.getItem("shopCart")
        : "[]"
    ),
  };
};

export const addToCart = (item, amount) => {
  return {
    type: actions.ADD_ITEM_TO_CART,
    payload: { item, amount },
  };
};

export const reduceItemFromCart = (item, amount) => {
  return {
    type: actions.REDUCE_ITEM_FROM_CART,
    payload: { item, amount },
  };
};

export const removeFromCart = (item) => {
  return {
    type: actions.REMOVE_ITEM_FROM_CART,
    payload: { item },
  };
};
