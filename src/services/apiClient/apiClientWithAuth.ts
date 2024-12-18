"use client";
import axios from "axios";

const apiClientWithAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để quản lý token
apiClientWithAuth.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

apiClientWithAuth.interceptors.response.use(
  (response) => {
    const newAccessToken = response.data.accessToken;
    if (newAccessToken) {
      sessionStorage.setItem("accessToken", newAccessToken);

      const originalRequest = response.config;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      // Gửi lại request ban đầu với token mới
      return apiClientWithAuth(originalRequest);
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export { apiClientWithAuth };
