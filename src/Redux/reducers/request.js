import {
  START_INVITE_LOADING,
  END_INVITE_LOADING,
  GET_INVITE_FAILURE,
  GET_INVITES,
  ACCEPT_INVITE,
  DELETE_INVITE,
} from "../constants/actionTypes";
import {
  START_GROUP_INVITE_LOADING,
  END_GROUP_INVITE_LOADING,
  GET_GROUP_INVITE_FAILURE,
  GET_GROUP_INVITES,
  ACCEPT_GROUP_INVITE,
  DELETE_GROUP_INVITE,
} from "../constants/teamTypes";

export const friendsReducer = (state = { friends: [] }, action) => {
  switch (action.type) {
    case GET_INVITES:
      return { ...state, friends: action?.payload };
    case START_INVITE_LOADING:
      return { ...state, requestloading: true };
    case END_INVITE_LOADING:
      return { ...state, requestloading: false };
    case GET_INVITE_FAILURE:
      return { ...state, requestloading: false, error: action.payload };
    case ACCEPT_INVITE:
      return { ...state, message: action?.payload };
    case DELETE_INVITE:
      return { ...state, message: action?.payload };
    default:
      return state;
  }
};

export const teamRequestReducer = (state = { teamRequests: [] }, action) => {
  switch (action.type) {
    case GET_GROUP_INVITES:
      return { ...state, friends: action?.payload };
    case START_GROUP_INVITE_LOADING:
      return { ...state, requestloading: true };
    case END_GROUP_INVITE_LOADING:
      return { ...state, requestloading: false };
    case GET_GROUP_INVITE_FAILURE:
      return { ...state, requestloading: false, error: action.payload };
    case ACCEPT_GROUP_INVITE:
      return { ...state, message: action?.payload };
    case DELETE_GROUP_INVITE:
      return { ...state, message: action?.payload };
    default:
      return state;
  }
};
