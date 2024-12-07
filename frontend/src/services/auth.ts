import { apiClient } from "./apiClient";

export const signUp = async (data: any) => {
  const result = await apiClient.post("/auth/signup", data);
  if (result.data.accessToken) {
    sessionStorage.setItem("accessToken", result.data.accessToken);
  }
};

export const login = async (data: any) => {
  const result = await apiClient.post("/auth/login", data);

  if (result.data.accessToken) {
    sessionStorage.setItem("accessToken", result.data.accessToken);
  }
};
