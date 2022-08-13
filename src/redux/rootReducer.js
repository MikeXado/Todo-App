import { combineReducers } from "redux";
import todoReducer from "./Todos/todo-reducer";
const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
