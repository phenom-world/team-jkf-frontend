import {
  AUTH,
  AUTH_FAILURE,
  START_AUTH_LOADING,
  END_AUTH_LOADING,
  REGISTER,
  REGISTER_FAILURE,
  START_REGISTER_LOADING,
  END_REGISTER_LOADING,
  START_UPDATE_USER_LOADING,
  UPDATE_USER,
  END_UPDATE_USER_LOADING,
  UPDATE_USER_FAILURE,
  USER_DETAILS,
  START_USER_DETAILS_LOADING,
  END_USER_DETAILS_LOADING,
  USER_DETAILS_FAILURE,
  RESEND_LINK,
  START_RESEND_LINK_LOADING,
  END_RESEND_LINK_LOADING,
  RESEND_LINK_FAILURE,
  VERIFY_USER,
  START_VERIFY_USER_LOADING,
  END_VERIFY_USER_LOADING,
  VERIFY_USER_FAILURE,
  FORGOT_PASSWORD,
  START_FORGOT_PASSWORD_LOADING,
  END_FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD,
  START_RESET_PASSWORD_LOADING,
  END_RESET_PASSWORD_LOADING,
  RESET_PASSWORD_FAILURE,
  LOGOUT,
  START_USER_TEAMS_LOADING,
  USER_TEAMS,
  END_USER_TEAMS_LOADING,
  USER_TEAMS_FAILURE,
} from "../constants/actionTypes";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("result", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    case AUTH_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    case START_AUTH_LOADING:
      return { ...state, isloading: true };
    case END_AUTH_LOADING:
      return { ...state, isloading: false };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, message: action?.payload };
    case START_REGISTER_LOADING:
      return { ...state, isloading: true };
    case END_REGISTER_LOADING:
      return { ...state, isloading: false };
    case REGISTER_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, message: action?.payload };
    case START_UPDATE_USER_LOADING:
      return { ...state, updateUserloading: true };
    case END_UPDATE_USER_LOADING:
      return { ...state, updateUserloading: false };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        updateUserloading: false,
        updateUserError: action.payload,
      };
    default:
      return state;
  }
};
export const userDetailsReducer = (state = { userDetails: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return { ...state, userDetails: action?.data };
    case START_USER_DETAILS_LOADING:
      return { ...state, isloading: true };
    case END_USER_DETAILS_LOADING:
      return { ...state, isloading: false };
    case USER_DETAILS_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const userTeamsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TEAMS:
      return { ...state, message: action?.data };
    case START_USER_TEAMS_LOADING:
      return { ...state, isloading: true };
    case END_USER_TEAMS_LOADING:
      return { ...state, isloading: false };
    case USER_TEAMS_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};
export const resendLinkReducer = (state = {}, action) => {
  switch (action.type) {
    case RESEND_LINK:
      return { ...state, resendLink_message: action?.payload };
    case START_RESEND_LINK_LOADING:
      return { ...state, isloading: true };
    case END_RESEND_LINK_LOADING:
      return { ...state, isloading: false };
    case RESEND_LINK_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const verifyUserReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_USER:
      localStorage.setItem("result", JSON.stringify(action?.payload));
      return { ...state, verifyUser_message: action?.payload.message };
    case START_VERIFY_USER_LOADING:
      return { ...state, verifyUser_loading: true };
    case END_VERIFY_USER_LOADING:
      return { ...state, verifyUser_loading: false };
    case VERIFY_USER_FAILURE:
      return {
        ...state,
        verifyUser_loading: false,
        verifyUserError: action.payload,
      };
    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return { ...state, message: action?.data };
    case START_FORGOT_PASSWORD_LOADING:
      return { ...state, isloading: true };
    case END_FORGOT_PASSWORD_LOADING:
      return { ...state, isloading: false };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return { ...state, message: action?.payload };
    case START_RESET_PASSWORD_LOADING:
      return { ...state, isloading: true };
    case END_RESET_PASSWORD_LOADING:
      return { ...state, isloading: false };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
