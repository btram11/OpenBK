import { QueryClient, useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { UserEntity } from "@/domain/user.entity";
import { getUserInfo } from "@/services/user";

export const prefetchUser = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getProfile"],
    queryFn: getUserInfo,
    // staleTime: Infinity,
  });
  return queryClient;
};

export const useUser = () => {
  "use client";
  return useQuery<UserEntity | null>({
    queryKey: ["getProfile"],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
};
