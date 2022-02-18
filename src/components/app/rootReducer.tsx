import { combineReducers } from "redux";
import todoReducer from "features/todo/todoSlice";
import userReducer from "features/user/userSlice";

export default combineReducers({
  todoReducer,
  userReducer,
});
