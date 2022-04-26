import {
  AUTH,
  AUTH_FAILURE,
  REGISTER,
  REGISTER_FAILURE,
  START_AUTH_LOADING,
  END_AUTH_LOADING,
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

import * as api from "../../network/index.js";

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_REGISTER_LOADING });
    const { data } = await api.signUp(formData);
    dispatch({ type: REGISTER, payload: data.message });
    dispatch({ type: END_REGISTER_LOADING });
    navigate("/register-success");
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const socialSignup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_SOCIAL_REGISTER_LOADING });
    const { data } = await api.signUp(formData);
    dispatch({ type: SOCIAL_REGISTER, payload: data });
    dispatch({ type: END_SOCIAL_REGISTER_LOADING });
    navigate("/dashboard");
  } catch (error) {
    dispatch({
      type: SOCIAL_REGISTER_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const signin = (formData, navigate, from) => async (dispatch) => {
  try {
    dispatch({ type: START_AUTH_LOADING });
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_AUTH_LOADING });
    navigate(from, { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const userDetails = () => async (dispatch) => {
  try {
    dispatch({ type: START_USER_DETAILS_LOADING });
    const {
      data: { data },
    } = await api.getMe();

    dispatch({ type: USER_DETAILS, data });
    dispatch({ type: END_USER_DETAILS_LOADING });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_GET_USER_LOADING });
    const {
      data: { data },
    } = await api.getUser(id);
    dispatch({ type: GET_USER, payload: data });
    dispatch({ type: END_GET_USER_LOADING });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getFriends = () => async (dispatch) => {
  try {
    dispatch({ type: START_GET_FRIENDS_LOADING });
    const {
      data: { data },
    } = await api.getFriends();

    dispatch({ type: GET_FRIENDS, payload: data });
    dispatch({ type: END_GET_FRIENDS_LOADING });
  } catch (error) {
    dispatch({
      type: GET_FRIENDS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: START_GET_USERS_LOADING });
    const {
      data: { data },
    } = await api.getUsers();
    dispatch({ type: GET_USERS, data });
    dispatch({ type: END_GET_USERS_LOADING });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const updateUser = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_UPDATE_USER_LOADING });
    const { data } = await api.updateProfile(formData);
    dispatch({ type: UPDATE_USER, payload: data.token });
    dispatch({ type: END_UPDATE_USER_LOADING });
    navigate("/dashboard");
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const resendLink = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_RESEND_LINK_LOADING });
    const { data } = await api.resendLink(formData);
    dispatch({ type: RESEND_LINK, payload: data.message });
    dispatch({ type: END_RESEND_LINK_LOADING });
    navigate("/register-success");
  } catch (error) {
    dispatch({
      type: RESEND_LINK_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const verifyUser = (token, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_VERIFY_USER_LOADING });
    const { data } = await api.verify(token);
    dispatch({ type: VERIFY_USER, payload: data });
    dispatch({ type: END_VERIFY_USER_LOADING });
    navigate("/dashboard");
  } catch (error) {
    dispatch({
      type: VERIFY_USER_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const reset = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_FORGOT_PASSWORD_LOADING });
    const { data } = await api.forgotPassword(formData);
    dispatch({ type: FORGOT_PASSWORD, data });
    dispatch({ type: END_FORGOT_PASSWORD_LOADING });
    navigate("/password_reset/done");
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const resetPassword = (formData, token, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_RESET_PASSWORD_LOADING });
    const { data } = await api.resetPassword(formData, token);
    dispatch({ type: RESET_PASSWORD, payload: data.message });

    dispatch({ type: END_RESET_PASSWORD_LOADING });
    navigate("/reset/done");
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
