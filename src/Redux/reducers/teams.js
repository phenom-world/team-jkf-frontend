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

export const userTeamsReducer = (state = { userTeams: [] }, action) => {
  switch (action.type) {
    case USER_TEAMS:
      return { ...state, userTeams: action?.data };
    case START_USER_TEAMS_LOADING:
      return { ...state, isloading: true };
    case END_USER_TEAMS_LOADING:
      return { ...state, isloading: false };
    case USER_TEAMS_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};

export const getTeamReducer = (state = { TeamDetails: {} }, action) => {
  switch (action.type) {
    case GET_TEAM:
      return { ...state, TeamDetails: action?.payload };
    case START_GET_TEAM_LOADING:
      return { ...state, teamloading: true };
    case END_GET_TEAM_LOADING:
      return { ...state, teamloading: false };
    case GET_TEAM_FAILURE:
      return { ...state, teamloading: false, error: action.payload };
    default:
      return state;
  }
};

export const getTeamsReducer = (state = { teams: [] }, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return { ...state, teams: action?.payload };
    case START_GET_TEAMS_LOADING:
      return { ...state, getteamsloading: true };
    case END_GET_TEAMS_LOADING:
      return { ...state, getteamsloading: false };
    case GET_TEAMS_FAILURE:
      return { ...state, getteamsloading: false, error: action.payload };
    default:
      return state;
  }
};
