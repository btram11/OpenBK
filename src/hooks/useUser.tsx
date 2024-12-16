import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/app/providers";
import { UserEntity } from "@/domain/user.entity";
import { getUserInfo } from "@/services/user";
export const useUser = () => {
  return useQuery<UserEntity | null>({
    queryKey: ['getProfile'],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
};

export const prefetchUser = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['getProfile'],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
};