"use client";
import { CourseEntity } from "@/domain/course.entity";
import { UserEntity } from "@/domain/user.entity";
import { apiClientWithAuth } from "@/services/apiClient";

export const getUserInfo = async (): Promise<UserEntity | null> => {
  try {
    const userID = sessionStorage.getItem("userID");
    if (!userID) {
      return null;
    }
    const { data } = await apiClientWithAuth.get<UserEntity>(`/user/${userID}`);
    return data ? new UserEntity(data) : null;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

export const updateProfile = async (data: Partial<UserEntity>) => {
  const response = await apiClientWithAuth.patch("/user/info", data);
  return response.data;
};

export const updatePassword = async (password: string, newPassword: string) => {
  const response = await apiClientWithAuth.patch("/user/info/password", {
    password,
    newPassword,
  });
  return response.data;
};

export const getUserParticipateCourses = async (): Promise<{
  Courses: CourseEntity[];
}> => {
  const response = await apiClientWithAuth.get("/user/course");
  return response.data;
};

export default { getUserInfo, updatePassword, getUserParticipateCourses };
