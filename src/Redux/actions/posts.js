import {
  START_POST_LOADING,
  POST,
  END_POST_LOADING,
  POST_FAILURE,
  POSTS,
  POSTS_FAILURE,
} from "../constants/actionTypes";
import * as api from "../../network/index.js";

export const makePost = (post, teamId) => async (dispatch) => {
  try {
    dispatch({ type: START_POST_LOADING });
    const { data } = await api.makePost(post, teamId);
    dispatch({ type: POST, payload: data.message });
    dispatch({ type: END_POST_LOADING });
  } catch (error) {
    dispatch({
      type: POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getPosts = (teamId) => async (dispatch) => {
  try {
    const { data } = await api.getPosts(teamId);
    dispatch({ type: POSTS, payload: data.message });
  } catch (error) {
    dispatch({
      type: POSTS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
