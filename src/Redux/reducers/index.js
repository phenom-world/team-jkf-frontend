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
  getFriendsReducer,
} from "./auth";
import { userTeamsReducer, getTeamReducer, getTeamsReducer } from "./teams";
import { getPostsReducer, sendPostReducer } from "./posts";
import { friendsReducer } from "./friends";

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
  getFriendsReducer,
  getUsersReducer,
  getTeamReducer,
  getTeamsReducer,
  getPostsReducer,
  sendPostReducer,
  friendsReducer,
});
