import axios from "axios";

const API = axios.create({
  baseURL: "https://team-jkf.herokuapp.com/tjkf",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("result")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("result")).token}`;
  }
  return req;
});

//user
export const getMe = () => API.get("/users/me/");
export const signUp = (formData) => API.post("/users/register/", formData);
export const signIn = (formData) => API.post("/users/login/", formData);
/* prettier-ignore */
export const resendLink = (formData) => API.post("/users/resendVerificationLink/", formData);
/* prettier-ignore */
export const forgotPassword = (formData) => API.post("/users/forgotpassword/", formData);
export const verify = (token) => API.put(`/users/verify/${token}`);
/* prettier-ignore */
export const updateProfile = (formData) =>
  API.put("/users/updatedetails/", formData);
export const updatePassword = (formData) => API.put("/users/updatepassword/", formData);
export const resetPassword = (formData, token) => API.put(`/users/resetpassword/${token}`, formData);

export const getUsers = () => API.get("/users/getusers");
export const getUser = (id) => API.get(`/users/getuser/${id}`);
export const getFriends = () => API.get("/users/friends");

//Teams
export const getUserTeams = () => API.get("/teams/getuserteams");
export const getTeams = () => API.get("/teams/getteams");
export const getTeam = (teamname) => API.get(`/teams/getTeam/${teamname}`);

//Posts
export const makePost = (post, teamId) => API.post(`/teammessages/send-message/${teamId}`, post);
export const getPosts = (teamId) => API.get(`/teammessages/getmessages/${teamId}`);

//Friend Requests
export const addFriend = (request) => API.post(`/request/addfriend`, request);
export const getInvites = () => API.get("/request/getfriendrequests");
// prettier-ignore
export const acceptInvite = (request) =>
  API.put("/request/acceptfriendrequest", request);
// prettier-ignore
export const deleteInvite = (request) =>
  API.delete("/request/rejectfriendrequest", request);
