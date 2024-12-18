import { apiClient } from "@/services/apiClient/apiClient";

export const signUp = async (data: any) => {
  const {
    data: { userID, accessToken },
  } = await apiClient.post("/auth/signup", data);
  accessToken && sessionStorage.setItem("accessToken", accessToken);
  userID && sessionStorage.setItem("userID", userID);
};

export const login = async (data: any) => {
  const {
    data: { accessToken, userID },
  } = await apiClient.post("/auth/login", data);
  accessToken && sessionStorage.setItem("accessToken", accessToken);
  userID && sessionStorage.setItem("userID", userID);
};
