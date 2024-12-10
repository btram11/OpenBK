import { getUserInfo } from "@/services/user";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Profile } from "./profile";

const ProfilePage: React.FC = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["profile"],
    queryFn: getUserInfo,
  });

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <h3 className="font-semibold text-lg">My Profile</h3>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Profile />
      </HydrationBoundary>
    </div>
  );
};

export default ProfilePage;
