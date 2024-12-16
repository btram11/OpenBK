"use client";
import { useUser } from "@/hooks/useUser";

export const Profile: React.FC = () => {
  const { data } = useUser();
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
