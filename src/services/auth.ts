const BaseURL = process.env.NEXT_PUBLIC_API;
import { apiClient } from "./apiClient";

export const signUp = async (data: any) => {
  const result = await apiClient.post("/auth/signup", data);
  // const response = await fetch(`${BaseURL}/auth/signup`, {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });

  // const result = await response.json();

  if (result.data.accessToken) {
    sessionStorage.setItem("accessToken", result.data.accessToken);
  }
};

export const login = async (data: any) => {
  const result = await apiClient.post("/auth/login", data);
  // const response = await fetch(`${BaseURL}/auth/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // if (!response.ok) throw new Error(response.statusText);
  // const result = await response.json();

  if (result.data.accessToken) {
    sessionStorage.setItem("accessToken", result.data.accessToken);
  }
};
