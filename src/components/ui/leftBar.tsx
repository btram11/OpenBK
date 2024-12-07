'use client'
import Link from "next/link";
import * as React from "react";
const LeftBar: React.FC = () => {
  const LinkStyle =
    "px-4 py-2 w-full text-left hover:bg-dodger-blue-500 hover:text-white rounded-md bg-stone-200 duration-200";
  const {userID} = JSON.parse(localStorage.getItem("userID") || "{}");
  
  const links = [
    { href: `/user/dashboard`, label: "Dashboard" },
    { href: `/user/profile`, label: "My Profile" },
    { href: `/user/enrolled-courses`, label: "Enrolled Courses" },
    { href: `/user/quiz-attempts`, label: "My Quiz Attemps" },
    { href: `/user/settings`, label: "Settings" },
  ];
  return (
    <nav className=" flex flex-col basis-1/5 p-8 gap-4 rounded-l-2xl border-[1.5px] border-[#E3E2E6] bg-white w-fit h-fit">
      <span className="text-black font-medium h-7 flex items-center">
        Welcome User
      </span>

      <div className="flex flex-col gap-1 items-center mb-3">
        {links.slice(0, 4).map((link, index) => (
          <Link key={index} href={link.href} className={`${LinkStyle}`}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-black font-medium text">User</div>
      {links.slice(4).map((link, index) => (
        <Link key={index} href={link.href} className={`${LinkStyle}`}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
export default LeftBar;
