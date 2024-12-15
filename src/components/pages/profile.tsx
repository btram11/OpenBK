'use client';
import { getUserInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { UserEntity } from "@/domain/user.entity";
// import { Profile } from "./profile";
const Profile: React.FC<{ data?: UserEntity }> = ({ data }) => {
  
  const profileEntries = [
    { label: "Registration Date", value: data?.createdAt },
    { label: "Fullname", value: data?.name },
    { label: "Email", value: data?.email },
    { label: "Role", value: data?.role },
  ];

  return (
    <ul className="flex flex-col gap-4">
      {profileEntries.map(({ label, value }) => (
        <li
          key={label}
          className="flex flex-row gap-8 text-base font-medium text-[#5D5E62]"
        >
          <span className="w-2/5">{label}</span>
          {value || "-"}
        </li>
      ))}
    </ul>
  );
};



const ProfilePage: React.FC = async () => {
  const queryClient = new QueryClient();

  const { data: user } = useQuery<UserEntity | null>({
    queryKey: ["getProfile"],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });

  // const data = queryClient.getQueryData<UserEntity>(["profile"]);


  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <h3 className="font-semibold text-lg">My Profile</h3>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Profile data={user as UserEntity}/>
      </HydrationBoundary>
    </div>
  );
};

export default ProfilePage;
