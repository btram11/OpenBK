"use server";
import { Profile } from "@/components/pages/profile";

const ProfileLearner: React.FC = async () => {
  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <h3 className="font-semibold text-lg">My Profile</h3>
      <Profile />
    </div>
  );
};

export default ProfileLearner;
