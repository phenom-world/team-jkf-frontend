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
  START_GET_USER_LOADING,
  GET_USER,
  END_GET_USER_LOADING,
  GET_USER_FAILURE,
  START_GET_USERS_LOADING,
  GET_USERS,
  END_GET_USERS_LOADING,
  GET_USERS_FAILURE,
  GET_FRIENDS,
  START_GET_FRIENDS_LOADING,
  END_GET_FRIENDS_LOADING,
  GET_FRIENDS_FAILURE,
  START_SOCIAL_REGISTER_LOADING,
  SOCIAL_REGISTER,
  END_SOCIAL_REGISTER_LOADING,
  SOCIAL_REGISTER_FAILURE,
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

export const socialRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SOCIAL_REGISTER:
      localStorage.setItem("result", JSON.stringify(action.payload));
      return { ...state, message: action?.payload };
    case START_SOCIAL_REGISTER_LOADING:
      return { ...state, isloading: true };
    case END_SOCIAL_REGISTER_LOADING:
      return { ...state, isloading: false };
    case SOCIAL_REGISTER_FAILURE:
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
export const userDetailsReducer = (state = { userDetail: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS:
      return { ...state, userDetail: action?.data };
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

export const getUserReducer = (state = { userProfileDetails: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, userProfileDetails: action?.payload };
    case START_GET_USER_LOADING:
      return { ...state, userProfileloading: true };
    case END_GET_USER_LOADING:
      return { ...state, userProfileloading: false };
    case GET_USER_FAILURE:
      return { ...state, userProfileloading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFriendsReducer = (state = { friends: [] }, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return { ...state, friends: action?.payload };
    case START_GET_FRIENDS_LOADING:
      return { ...state, getfriendsloading: true };
    case END_GET_FRIENDS_LOADING:
      return { ...state, getfriendsloading: false };
    case GET_FRIENDS_FAILURE:
      return { ...state, getfriendsloading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action?.data };
    case START_GET_USERS_LOADING:
      return { ...state, getUsersLoading: true };
    case END_GET_USERS_LOADING:
      return { ...state, getUsersLoading: false };
    case GET_USERS_FAILURE:
      return { ...state, getUsersLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const socialFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
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
