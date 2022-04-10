import {
  AUTH,
  START_LOADING,
  END_LOADING,
  REQUEST_FAILED,
  GET_USER,
  RESEND_LINK,
  REGISTER,
  VERIFY_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from "../constants/actionTypes";

import * as api from "../../network/index.js";

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signUp(formData);
    dispatch({ type: REGISTER, payload: data.message });
    dispatch({ type: END_LOADING });
    navigate("/register-success");
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: `${error.response.data.message}`,
    });
  }
};

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    navigate("/dashboard");
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: `${error.response.data.message}`,
    });
  }
};
export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.getMe();
    dispatch({ type: GET_USER, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: `${error.response.data.message}`,
    });
  }
};

export const verifyUser = (token) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.verify(token);
    console.log(data);
    dispatch({ type: VERIFY_USER, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: `${error.response.data.message}`,
    });
  }
};

export const resendLink = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.resendLink(formData);
    dispatch({ type: RESEND_LINK, payload: data });
    dispatch({ type: END_LOADING });
    navigate("/register-success");
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const reset = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.forgotPassword(formData);
    dispatch({ type: FORGOT_PASSWORD, data });
    dispatch({ type: END_LOADING });
    navigate("/password_reset/done");
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: `${error.response.data.message}`,
    });
  }
};

export const resetPassword =
  (formData, token, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.resetPassword(formData, token);
      dispatch({ type: RESET_PASSWORD, payload: data.message });
      console.log(data);
      dispatch({ type: END_LOADING });
      navigate("/reset/done");
    } catch (error) {
      dispatch({
        type: REQUEST_FAILED,
        payload: `${error.response.data.message}`,
      });
    }
  };
