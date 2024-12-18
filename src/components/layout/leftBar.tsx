"use client";
import * as React from "react";
import { LeftBarButton } from "../common/buttons/leftBarButton";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/services/user";
import { UserEntity } from "@/domain/user.entity";
import { roleString } from "@/lib/roleUtils";

const LeftBar: React.FC = () => {
  const { data: user, isLoading, isError } = useQuery<UserEntity>({
    queryKey: ["getProfile"],
    queryFn: () => getUserInfo(),
  });

  const baseLinks = [
    { href: `/${roleString(user?.role)?.toLowerCase()}/dashboard`, label: "Dashboard" },
    { href: `/${roleString(user?.role)?.toLowerCase()}/profile`, label: "My Profile" },
    { href: `/${roleString(user?.role)?.toLowerCase()}/setting`, label: "Settings" },
  ];

  const roleSpecificLinks = user?.role === "USER"
    ? [
        { href: `/${roleString(user?.role)?.toLowerCase()}/enrolled-courses`, label: "Enrolled Courses" },
        { href: `/${roleString(user?.role)?.toLowerCase()}/quiz-attempts`, label: "My Quiz Attemps" },
      ]
    : [
        { href: `/${roleString(user?.role)?.toLowerCase()}/courses`, label: "Courses" },
      ];

  const links = [...baseLinks, ...roleSpecificLinks];

  return (
    <nav className="flex flex-col basis-1/5 p-8 gap-4 rounded-l-2xl border-[1.5px] border-[#E3E2E6] bg-white w-fit h-fit">
      <div className="text-black font-medium text">
        Welcome {user?.name}
      </div>
      <div className="flex flex-col gap-1 items-center mb-3">
        {links.slice(0, 4).map((link, index) => (
          <LeftBarButton key={index} link={link} index={index} />
        ))}
      </div>
    </nav>
  );
};
export default LeftBar;
