"use server";

import { getQueryClient } from "@/lib/get-query-client";
import { Profile } from "@/components/pages/profile";
import { prefetchUser } from "@/hooks/useUser";
import { getUserInfo } from "@/services/user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const ProfileUser: React.FC = async () => {
  // const queryClient = new QueryClient();
  const queryClient = await prefetchUser();
  // const queryClient = getQueryClient();
  // queryClient.prefetchQuery({
  //   queryKey: ["getProfile"],
  //   queryFn: getUserInfo,
  //   // staleTime: Infinity,
  // });
  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <h3 className="font-semibold text-lg">My Profile</h3>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Profile />
      </HydrationBoundary>
    </div>
  );
};

export default ProfileUser;
