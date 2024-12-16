"use client";
import { Suspense } from "react";
import { roleString } from "@/lib/roleUtils";
import { useUser } from "@/hooks/useUser";

const InfoBar = () => {
  const { data: user } = useUser();

  const backgroundColor =
    user?.role === "USER" ? "bg-pink-300" : user?.role === "ADMIN" ? "bg-gray-300" :  "bg-yellow-200";

  return (
    <div
      className={`dashboard-top w-[80vw] ${backgroundColor} h-[15vw] rounded-2xl flex flex-col-reverse px-10 pb-8 min-h-fit`}
    >
      <div className="flex flex-row gap-5">
        <img
          className="rounded-full bg-black w-28 aspect-square object-cover border-[6px] border-white"
          src={user?.imageUrl}
        />
        <Suspense fallback={<p>Loading...</p>}>
          <div className="flex flex-col gap-1 self-center">
            <span className="font-semibold text-xl">
              {user?.name ?? "Name"}
            </span>
            <span>{roleString(user?.role)}</span>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default InfoBar;
