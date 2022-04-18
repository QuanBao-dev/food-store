import { applyMiddleware, createStore } from "redux";
import {createLogger} from "redux-logger";
import rootReducers from "./reducers";

const store = createStore(
  rootReducers,
  applyMiddleware(createLogger({
    collapsed: false
  }))
);

export default store;
