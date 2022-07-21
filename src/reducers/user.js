import * as actions from "../Types/user"

const initialState = {
  username: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        username: action.payload.user.username,
        email: action.payload.user.email,
      };
    default:
      return state;
  }
};

export default userReducer;
