import * as actions from "../Types/user";

export const userLogin = (user) => {
  return {
    type: actions.USER_LOGIN,
    payload: { user },
  };
};
