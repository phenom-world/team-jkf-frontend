import { combineReducers } from "redux";

import {
  authReducer,
  registerReducer,
  userDetailsReducer,
  resendLinkReducer,
  verifyUserReducer,
  resetPasswordReducer,
  forgotPasswordReducer,
  updateUserReducer,
  getUserReducer,
  getUsersReducer,
} from "./auth";
import { userTeamsReducer, getTeamReducer } from "./teams";
import { getPostsReducer, sendPostReducer } from "./posts";

export const reducers = combineReducers({
  authReducer,
  registerReducer,
  userDetailsReducer,
  resendLinkReducer,
  verifyUserReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  updateUserReducer,
  userTeamsReducer,
  getUserReducer,
  getUsersReducer,
  getTeamReducer,
  getPostsReducer,
  sendPostReducer,
});
