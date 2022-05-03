import {
  POST,
  POST_FAILURE,
  START_POSTS_LOADING,
  POSTS,
  END_POSTS_LOADING,
  POSTS_FAILURE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import {
  CREATE_POST,
  CREATE_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_FAILURE,
  GET_POST,
  GET_POSTS,
  UPDATE_POST,
  COMMENT_POST,
  UPDATE_POST_FAILURE,
  GET_COMMENT,
  START_COMMENT_LOADING,
  END_COMMENT_LOADING,
  DELETE_COMMENT,
} from "../constants/postTypes";

export const sendPostReducer = (state = {}, action) => {
  switch (action.type) {
    case POST:
      return { ...state, success: action?.payload };
    case POST_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action?.payload };
    case START_POSTS_LOADING:
      return { ...state, getPostsLoading: true };
    case END_POSTS_LOADING:
      return { ...state, getPostsLoading: false };
    case POSTS_FAILURE:
      return { ...state, getPostsLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const postsReducer = (state = { posts: [], post: {} }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isloading: true };
    case END_LOADING:
      return { ...state, isloading: false };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };

    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case CREATE_POST_FAILURE:
      return { ...state, isloading: false, error: action.payload };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
      };

    case UPDATE_POST_FAILURE:
      return { ...state, isloading: false, error: action.payload };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case DELETE_POST_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const commentReducer = (state = { comment: [] }, action) => {
  switch (action.type) {
    case START_COMMENT_LOADING:
      return { ...state, isloading: true };
    case END_COMMENT_LOADING:
      return { ...state, isloading: false };

    case GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case COMMENT_POST:
      return {
        ...state,
        comment: [...state.comment, action.payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter((comment) => comment._id !== action.payload),
      };
    default:
      return state;
  }
};
