import { combineReducers } from "redux";
import todoReducer from "./todoReducer/todoReducer";
import visibilityFilterReducer from "./visibilityFilterReducer/visibilityFilterReducer";

export default combineReducers({
  todoReducer,
  visibilityFilterReducer,
});
