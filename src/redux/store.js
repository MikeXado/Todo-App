import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const presistedState = localStorage.getItem("todoState")
  ? JSON.parse(localStorage.getItem("todoState"))
  : {};
const store = createStore(rootReducer, presistedState, composeWithDevTools());

export default store;
