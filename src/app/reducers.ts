import { combineReducers } from "redux";
import { postSlice } from "../features/postSlice";
import { userSlice } from "../features/userSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer
})
