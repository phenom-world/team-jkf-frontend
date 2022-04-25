import {
  ADD_FRIEND,
  START_INVITE_LOADING,
  END_INVITE_LOADING,
  GET_INVITE_FAILURE,
  GET_INVITES,
  ACCEPT_INVITE,
  DELETE_INVITE,
} from "../constants/actionTypes";

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
