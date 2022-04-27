import {
  START_INVITE_LOADING,
  END_INVITE_LOADING,
  GET_INVITES,
  GET_INVITE_FAILURE,
  ACCEPT_INVITE,
  DELETE_INVITE,
} from "../constants/actionTypes";
import {
  START_GROUP_INVITE_LOADING,
  END_GROUP_INVITE_LOADING,
  GET_GROUP_INVITE_FAILURE,
  GET_GROUP_INVITES,
  ACCEPT_GROUP_INVITE,
  DECLINE_GROUP_INVITE,
  DELETE_USER,
  CREATE_TEAM,
} from "../constants/teamTypes";

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
    dispatch({
      type: GET_INVITE_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const addFriend = (request) => async (dispatch) => {
  try {
    const { data } = await api.addFriend(request);
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
    dispatch({ type: DELETE_INVITE, payload: data.message });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

//TEAM INVITES
export const getTeamRequests = () => async (dispatch) => {
  try {
    dispatch({ type: START_GROUP_INVITE_LOADING });
    const {
      data: { data },
    } = await api.getallrequests();
    console.log(data);
    dispatch({ type: GET_GROUP_INVITES, payload: data });
    dispatch({ type: END_GROUP_INVITE_LOADING });
  } catch (error) {
    dispatch({
      type: GET_GROUP_INVITE_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const sendTeamRequest = (name) => async (dispatch) => {
  try {
    const { data } = await api.sendteamrequest(name);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const leaveTeam = (request) => async (dispatch) => {
  try {
    const { data } = await api.leaveteam(request);
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (request) => async (dispatch) => {
  try {
    const { data } = await api.adduser(request);
    dispatch({ type: ACCEPT_GROUP_INVITE, payload: request.id });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const declineUser = (request) => async (dispatch) => {
  try {
    const { data } = await api.declineuser(request);
    dispatch({ type: DECLINE_GROUP_INVITE, payload: request.id });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const removeUser = (request) => async (dispatch) => {
  try {
    const { data } = await api.removeuser(request);
    dispatch({ type: DELETE_USER, payload: request.id });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const createTeam = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createteam(formData);
    dispatch({ type: CREATE_TEAM, payload: data.message });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
