import * as actions from "../Types/shopCart";

const initialState = {
  cart: [],
};

const shopCart = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM_TO_CART:
      // const {item, amount} = action.payload;
      let isContained = false;
      let temp;
      temp = state.cart.map((itemData) => {
        if (!itemData.amount) itemData.amount = 0;
        if (itemData.item.productId === action.payload.item.productId) {
          isContained = true;
          return {
            ...itemData,
            amount: itemData.amount + action.payload.amount,
          };
        }
        return itemData;
      });
      if (!isContained)
        temp = [
          { ...action.payload, amount: action.payload.amount },
          ...state.cart,
        ];
      return { ...state, cart: temp };
    case actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: action.cart.filter((item) => item.title !== action.payload.title),
      };
    case actions.INIT_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default shopCart;
