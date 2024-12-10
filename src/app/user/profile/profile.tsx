"use client";
import { getUserInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

export const Profile = () => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserInfo(),
  });

  const profileEntries = [
    { label: "Registration Date", value: data?.createdAt },
    { label: "Fullname", value: data?.name },
    { label: "Email", value: data?.email },
    { label: "Phone Number", value: data?.phoneNumber },
    // { label: "Skill/Occupation", value: data?.occupation },
    { label: "Biography", value: data?.biography },
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
