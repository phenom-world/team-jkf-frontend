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
  START_COMMENT_LOADING,
  END_COMMENT_LOADING,
  GET_COMMENT,
  DELETE_COMMENT,
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
export const fetchComments = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_COMMENT_LOADING });
    const {
      data: { data },
    } = await api.getcomments(id);
    dispatch({ type: GET_COMMENT, payload: data });
    dispatch({ type: END_COMMENT_LOADING });
  } catch (error) {
    console.log(error?.response?.data?.message);
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

export const commentPost = (value) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.commentpost(value);
    dispatch({ type: COMMENT_POST, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: COMMENT_POST_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
export const deleteComment = (commentId) => async (dispatch) => {
  try {
    const { data } = await api.deletecomment(commentId);
    dispatch({ type: DELETE_COMMENT, payload: commentId });
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
