import { UserEntity } from "@/domain/user.entity";
import { apiClientWithAuth } from "@/services/apiClient";

export const getUserInfo = async (): Promise<UserEntity> => {
  const response = await apiClientWithAuth.get("/user/info");
  return new UserEntity(response.data);
};

export const updateProfile = async (data: any) => {
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

export default { getUserInfo, updatePassword };
