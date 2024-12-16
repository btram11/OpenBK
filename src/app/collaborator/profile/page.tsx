import { Profile } from "@/components/pages/profile";
import { prefetchUser } from "@/hooks/useUser";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const ProfileUser: React.FC = async () => {
  const queryClient = await prefetchUser();
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
