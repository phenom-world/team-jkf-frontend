import { ADD_FRIEND, START_INVITE_LOADING, END_INVITE_LOADING, GET_INVITES, ACCEPT_INVITE, DELETE_INVITE } from "../constants/actionTypes";
import * as api from "../../network/index.js";

export const getinvites = () => async (dispatch) => {
  try {
    dispatch({ type: START_INVITE_LOADING });
    const {
      data: { data },
    } = await api.getInvites();
    dispatch({ type: GET_INVITES, payload: data });
    dispatch({ type: END_INVITE_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const addFriend = (request) => async (dispatch) => {
  try {
    const { data } = await api.addFriend(request);
    dispatch({ type: ADD_FRIEND, payload: data.message });
  } catch (error) {
    console.log(error);
  }
};

export const acceptInvite = (request) => async (dispatch) => {
  try {
    const { data } = await api.acceptInvite(request);
    dispatch({ type: ACCEPT_INVITE, payload: data.message });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInvite = (request) => async (dispatch) => {
  try {
    console.log(request);
    const { data } = await api.deleteInvite(request);
    console.log(data);
    // dispatch({ type: DELETE_INVITE, payload: data.message });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
