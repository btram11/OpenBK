import { apiClient } from "@/services/apiClient/apiClient";

export const signUp = async (data: any) => {
  const {
    data: { userID },
  } = await apiClient.post("/auth/signup", data, {
    withCredentials: true,
  });
  userID && sessionStorage.setItem("userID", userID);
};

export const login = async (data: any) => {
  const response = await apiClient.post("/auth/login", data, {
    withCredentials: true,
  });
  response.data.userID &&
    sessionStorage.setItem("userID", response.data.userID);
};
