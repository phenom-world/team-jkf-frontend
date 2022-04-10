import {
  AUTH,
  START_LOADING,
  END_LOADING,
  LOGOUT,
  GET_USER,
  REGISTER,
  REQUEST_FAILED,
  VERIFY_USER,
  RESEND_LINK,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../constants/actionTypes";

const authReducer = (
  state = {
    authData: null,
    message: null,
    isloading: false,
    error: null,
    userDetails: {},
  },
  action
) => {
  switch (action.type) {
    case REGISTER:
    case RESEND_LINK:
    case FORGOT_PASSWORD:
    case RESET_PASSWORD:
      return { ...state, message: action?.payload };

    case GET_USER:
      return { ...state, userDetails: action?.data };

    case VERIFY_USER:
      return { ...state, authData: action?.data };

    case AUTH:
      localStorage.setItem("result", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    case START_LOADING:
      return { ...state, isloading: true };
    case END_LOADING:
      return { ...state, isloading: false };
    case REQUEST_FAILED:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
