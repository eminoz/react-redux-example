import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function configurStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
