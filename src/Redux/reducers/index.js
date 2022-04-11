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
} from "./auth";

export const reducers = combineReducers({
  authReducer,
  registerReducer,
  userDetailsReducer,
  resendLinkReducer,
  verifyUserReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  updateUserReducer,
});
