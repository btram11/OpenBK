"use client";
import { getUserInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

const InfoBar = () => {
  const { data } = useQuery({
    queryKey: ["getProfile"],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
  return (
    <div className="dashboard-top w-[80vw] bg-pink-300 h-[15vw] rounded-2xl flex flex-col-reverse px-10 pb-8 min-h-fit">
      <div className="flex flex-row gap-5">
        <img
          className="rounded-full bg-black w-28 aspect-square object-cover border-[6px] border-white"
          src={`http://localhost:3001/uploads/profile/default.png`}
        />
        <Suspense fallback={<p>Loading...</p>}>
          <div className="flex flex-col gap-1 self-center">
            <span className="font-semibold text-xl">
              {data?.name ?? "Name"}
            </span>
            <span>{data?.phoneNumber} Courses Enrolled</span>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default InfoBar;
