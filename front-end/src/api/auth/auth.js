import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  if (tokens?.access) {
    config.headers.Authorization = `JWT ${tokens.access}`;
  }
  return config;
});

// Auth endpoints
export const login = (data) => API.post("/auth/jwt/create/", data);
export const refresh = (refreshToken) =>
  API.post("/auth/jwt/refresh/", { refresh: refreshToken });
export const verify = (token) => API.post("/auth/jwt/verify/", { token });

// User endpoints
export const register = (data) => API.post("/auth/users/", data);
export const getMe = () => API.get("/auth/users/me/");
export const getUsers = () => API.get("/auth/users/");
export const getUser = (id) => API.get(`/auth/users/${id}/`);
export const updateUser = (id, data) => API.put(`/auth/users/${id}/`, data);
export const patchUser = (id, data) => API.patch(`/auth/users/${id}/`, data);
export const deleteUser = (id) => API.delete(`/auth/users/${id}/`);

// Activation & reset flows
export const activate = (data) => API.post("/auth/users/activation/", data);
export const resendActivation = (data) =>
  API.post("/auth/users/resend_activation/", data);

export const resetEmail = (data) => API.post("/auth/users/reset_email/", data);
export const resetEmailConfirm = (data) =>
  API.post("/auth/users/reset_email_confirm/", data);

export const resetPassword = (data) =>
  API.post("/auth/users/reset_password/", data);
export const resetPasswordConfirm = (data) =>
  API.post("/auth/users/reset_password_confirm/", data);

export const setEmail = (data) => API.post("/auth/users/set_email/", data);
export const setPassword = (data) => API.post("/auth/users/set_password/", data);