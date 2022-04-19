import { ADD_FRIEND, START_INVITE_LOADING, END_INVITE_LOADING, GET_INVITES, ACCEPT_INVITE, DELETE_INVITE } from "../constants/actionTypes";

export const friendsReducer = (state = { friends: [], requestloading: true }, action) => {
  switch (action.type) {
    case START_INVITE_LOADING:
      return { ...state, requestloading: true };
    case END_INVITE_LOADING:
      return { ...state, requestloading: false };
    case ADD_FRIEND:
      return { ...state, message: action?.payload };
    case GET_INVITES:
      return { ...state, friends: action?.payload };
    case ACCEPT_INVITE:
      return { ...state, posts: action?.payload };
    case DELETE_INVITE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
