import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  GET_SENT_MESSAGE,
  GET_SENT_MESSAGE_LOADING,
  END_GET_SENT_MESSAGE_LOADING,
  GET_SENT_MESSAGE_FAILURE,
  GET_RECEIVED_MESSAGE,
  GET_RECEIVED_MESSAGE_LOADING,
  GET_RECEIVED_MESSAGE_FAILURE,
  END_GET_RECEIVED_MESSAGE_LOADING,
  STAR_MESSAGE,
} from "../constants/chatType";

import * as api from "../../network/index.js";

export const sendMessage = (message) => async (dispatch) => {
  try {
    const { data } = await api.sendmessage(message);
    dispatch({ type: SEND_MESSAGE });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const getSentMessage = (teamname) => async (dispatch) => {
  try {
    dispatch({ type: GET_SENT_MESSAGE_LOADING });
    const {
      data: { data },
    } = await api.getsentmessages(teamname);

    dispatch({ type: GET_SENT_MESSAGE, payload: data });
    dispatch({ type: END_GET_SENT_MESSAGE_LOADING });
  } catch (error) {
    dispatch({
      type: GET_SENT_MESSAGE_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getReceivedMessage = () => async (dispatch) => {
  try {
    dispatch({ type: GET_RECEIVED_MESSAGE_LOADING });
    const {
      data: { data },
    } = await api.getreceivedmessages();
    dispatch({ type: GET_RECEIVED_MESSAGE, payload: data });
    dispatch({ type: END_GET_RECEIVED_MESSAGE_LOADING });
  } catch (error) {
    dispatch({
      type: GET_RECEIVED_MESSAGE_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const starMessage = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.starmessage();
    dispatch({ type: STAR_MESSAGE, payload: data });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
