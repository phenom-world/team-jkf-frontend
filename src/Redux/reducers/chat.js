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

export const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, success: true };
    default:
      return state;
  }
};

export const getSentMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SENT_MESSAGE:
      return { ...state, message: action?.payload };
    case GET_SENT_MESSAGE_LOADING:
      return { ...state, getSentMessageLoading: true };
    case END_GET_SENT_MESSAGE_LOADING:
      return { ...state, getSentMessageLoading: false };
    case GET_SENT_MESSAGE_FAILURE:
      return { ...state, getSentMessageLoading: false, error: action.payload };
    default:
      return state;
  }
};
export const getReceivedMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RECEIVED_MESSAGE:
      return { ...state, message: action?.payload };
    case GET_RECEIVED_MESSAGE_LOADING:
      return { ...state, getReceivedMessageLoading: true };
    case END_GET_RECEIVED_MESSAGE_LOADING:
      return { ...state, getReceivedMessageLoading: false };
    case GET_RECEIVED_MESSAGE_FAILURE:
      return { ...state, getReceivedMessageLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const starReducer = (state = {}, action) => {
  switch (action.type) {
    case STAR_MESSAGE:
      return { ...state, message: action?.payload };
    default:
      return state;
  }
};
