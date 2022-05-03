import { POST, POST_FAILURE, POSTS, POSTS_FAILURE } from "../constants/actionTypes";
import * as api from "../../network/index.js";
import {
  COMMENT_POST,
  COMMENT_POST_FAILURE,
  CREATE_POST,
  CREATE_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_FAILURE,
  GET_POST,
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POST_FAILURE,
  START_LOADING,
  UPDATE_POST,
  UPDATE_POST_FAILURE,
  END_LOADING,
} from "../constants/postTypes";

export const makePost = (post, teamId) => async (dispatch) => {
  try {
    const { data } = await api.makePost(post, teamId);
    dispatch({ type: POST, payload: data.success });
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

export const createPost = (value) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.createpost(value);
    dispatch({ type: CREATE_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
export const updatePost = (value, id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.updatepost(value, id);
    dispatch({ type: UPDATE_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: UPDATE_POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.getposts();
    dispatch({ type: GET_POSTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.getpost(id);
    dispatch({ type: GET_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.deletepost(id);
    dispatch({ type: DELETE_POST, payload: data.message });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.commentpost(value, id);
    dispatch({ type: COMMENT_POST, payload: data });
    return data.comment;
  } catch (error) {
    dispatch({
      type: COMMENT_POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
