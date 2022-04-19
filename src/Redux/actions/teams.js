import {
  START_USER_TEAMS_LOADING,
  USER_TEAMS,
  END_USER_TEAMS_LOADING,
  USER_TEAMS_FAILURE,
  START_GET_TEAM_LOADING,
  GET_TEAM,
  END_GET_TEAM_LOADING,
  GET_TEAM_FAILURE,
  START_GET_TEAMS_LOADING,
  GET_TEAMS,
  END_GET_TEAMS_LOADING,
  GET_TEAMS_FAILURE,
} from "../constants/actionTypes";

import * as api from "../../network/index.js";

export const getUserTeams = () => async (dispatch) => {
  try {
    dispatch({ type: START_USER_TEAMS_LOADING });
    const {
      data: { data },
    } = await api.getUserTeams();

    dispatch({ type: USER_TEAMS, data });
    dispatch({ type: END_USER_TEAMS_LOADING });
  } catch (error) {
    dispatch({
      type: USER_TEAMS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getTeam = (teamname) => async (dispatch) => {
  try {
    dispatch({ type: START_GET_TEAM_LOADING });
    const {
      data: { data },
    } = await api.getTeam(teamname);

    dispatch({ type: GET_TEAM, data });
    dispatch({ type: END_GET_TEAM_LOADING });
  } catch (error) {
    dispatch({
      type: GET_TEAM_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};

export const getTeams = () => async (dispatch) => {
  try {
    dispatch({ type: START_GET_TEAMS_LOADING });
    const {
      data: { data },
    } = await api.getTeams();
    dispatch({ type: GET_TEAMS, payload: data });
    dispatch({ type: END_GET_TEAMS_LOADING });
  } catch (error) {
    dispatch({
      type: GET_TEAMS_FAILURE,
      payload: `${error?.response?.data?.message}`,
    });
  }
};
