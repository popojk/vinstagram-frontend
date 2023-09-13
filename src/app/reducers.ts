import { combineReducers } from "redux";
import { postSlice } from "../features/postSlice";
import { authSlice } from "../features/authSlice";
import { userSlice } from "../features/userSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  post: postSlice.reducer,
  user: userSlice.reducer
})
