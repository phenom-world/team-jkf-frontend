import { combineReducers } from "redux";
import { LOGOUT } from "../constants/actionTypes";
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
  socialFormReducer,
  getFriendsReducer,
  socialRegisterReducer,
} from "./auth";
import { userTeamsReducer, getTeamReducer, getTeamsReducer, getTeamMembersReducer } from "./teams";
import { getPostsReducer, sendPostReducer } from "./posts";
import { friendsReducer, teamRequestReducer } from "./request";
import { messageReducer, getReceivedMessageReducer, getSentMessageReducer, getStarredMessageReducer, starReducer } from "./chat";

export const reducers = combineReducers({
  authReducer,
  registerReducer,
  userDetailsReducer,
  resendLinkReducer,
  verifyUserReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  updateUserReducer,
  socialFormReducer,
  userTeamsReducer,
  getUserReducer,
  getFriendsReducer,
  getUsersReducer,
  getTeamReducer,
  socialRegisterReducer,
  getTeamsReducer,
  getPostsReducer,
  sendPostReducer,
  friendsReducer,
  teamRequestReducer,
  messageReducer,
  getReceivedMessageReducer,
  getSentMessageReducer,
  starReducer,
  getTeamMembersReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    localStorage.clear();
    return reducers(undefined, action);
  }
  return reducers(state, action);
};
