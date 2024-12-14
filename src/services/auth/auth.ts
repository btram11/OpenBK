import { apiClient } from "@/services/apiClient";

export const signUp = async (data: any) => {
  const result = await apiClient.post("/auth/signup", data);
  if (result.data.accessToken) {
    sessionStorage.setItem("accessToken", result.data.accessToken);
  }

  if (result.data.userID) {
    localStorage.setItem("userID", result.data.userID);
  }
};

export const login = async (data: any) => {
  const result = await apiClient.post("/auth/login", data);

  if (result.data.accessToken) {
    sessionStorage.setItem("accessToken", result.data.accessToken);
  }
  if (result.data.userID) {
    localStorage.setItem("userID", result.data.userID);
  }
};
