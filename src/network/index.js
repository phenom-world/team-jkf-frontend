import axios from "axios";

const API = axios.create({
  baseURL: "https://arcane-tor-06174.herokuapp.com/tjkf",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("result")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("result")).token
    }`;
  }
  return req;
});

export const getMe = () => API.get("/users/me/");
export const signUp = (formData) => API.post("/users/register/", formData);
export const signIn = (formData) => API.post("/users/login/", formData);
/* prettier-ignore */
export const resendLink = (formData) => API.post("/users/resendVerificationLink/", formData);
/* prettier-ignore */
export const forgotPassword = (formData) => API.post("/users/forgotpassword/", formData);
export const verify = (token) => API.get(`/users/verify/${token}`);
/* prettier-ignore */
export const updateProfile = (formData) =>
  API.put("/users/updatedetails/", formData);
export const updatePassword = (formData) =>
  API.put("/users/updatepassword/", formData);
export const resetPassword = (formData, token) =>
  API.put(`/users/resetpassword/${token}`, formData);
