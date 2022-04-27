import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3005/tjkf",
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

// export const getUsers = () => API.get(`/users/getusers`);
export const getUsers = (pageNumber, limit) => API.get(`/users/getusers?page=${pageNumber}&limit=${limit}`);
export const getUsersBySearch = (query) => API.get(`/users/getusers/search?searchQuery=${query || "none"}`);
export const getUser = (id) => API.get(`/users/getuser/${id}`);
export const getFriends = () => API.get("/users/friends");

//Posts
export const makePost = (post, teamId) => API.post(`/teammessages/send-message/${teamId}`, post);
export const getPosts = (teamId) => API.get(`/teammessages/getmessages/${teamId}`);

//Friend Requests
export const addFriend = (request) => API.post(`/request/addfriend`, request);
export const getInvites = () => API.get("/request/getfriendrequests");
// prettier-ignore
export const acceptInvite = (request) => API.put("/request/acceptfriendrequest", request);
// prettier-ignore
export const deleteInvite = (request) => API.delete("/request/rejectfriendrequest", {data: request});

//Teams
export const getUserTeams = () => API.get("/teams/getuserteams");
export const getTeams = () => API.get("/teams/getteams");
export const getTeam = (teamname) => API.get(`/teams/getTeam/${teamname}`);

export const getteammembers = (teamname) => API.get(`/teams/getTeamMembers/${teamname}`);

//Team requests
export const getteamrequests = (teamname) => API.get("/teams/getTeamRequests", teamname);
export const sendteamrequest = (name) => API.post("/teams/sendTeamRequest/" + name);
export const leaveteam = () => API.get("/teams/leaveteam");

//admin roles
export const createteam = () => API.post("/teams/create-team");
export const adduser = (request) => API.put("/teams/addUser", request);
export const removeuser = (request) => API.put("/teams/removeUser", request);
export const declineuser = (request) => API.put("/teams/removeUser", request);
export const getallrequests = () => API.get("/teams/getAllRequests");
export const getmemberrequests = () => API.get("/teams/getMemberRequests");
