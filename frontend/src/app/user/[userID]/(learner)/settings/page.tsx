"use client";
import React from "react";
import { motion } from "framer-motion";
import CourseItem from "@/components/ui/CourseItem";
import Button from "@/components/ui/button";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "password", label: "Password" },
  //   { id: "completedCourses", label: "Completed Courses" },
];

const SettingsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].id);
  const inputStyle =
    "text-black text-base w-full px-5 py-2 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

  // Hàm xử lý sự kiện khi nhấn vào tab
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  //TODO: FETCH
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/your-endpoint");
  //       if (!response.ok) throw new Error("Network response was not ok");
  //       const result = await response.json();
  //     } catch (err) {
  //       // setError(err.message);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6 min-w-full">
      <h3 className="font-semibold text-lg">Settings</h3>
      <div className="flex flex-col h-fit w-full">
        <div className="flex flex-row w-full flex-wrap relative gap-3">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex flex-row w-fit flex-wrap px-7 py-2 text-base cursor-pointer hover:bg-gray-500/10 rounded-t-md duration-300 ease-in-out transition-all transform relative${
                selectedTab === tab.id ? "font-semibold" : "font-medium"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
              {selectedTab === tab.id && (
                <motion.div
                  layoutId="active"
                  className="absolute bottom-0 left-0 bg-dodger-blue-500 h-[3px] w-full"
                  transition={{ durration: 0.6 }}
                />
              )}
            </div>
          ))}
          <div className="w-full h-full border-b-[3px] border-[#C7C6CA] absolute left-0 top-0 -z-10"></div>
        </div>
      </div>
      <div className="tab_content w-full h-fit flex flex-col">
        <form
          className={`flex flex-col gap-4 ${
            selectedTab === tabs[1].id ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="old-pass" className="font-semibold text-base">
              Current Password
            </label>
            <input
              id="old-pass"
              type="password"
              className={inputStyle}
              required
              placeholder="Current Password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="new-pass" className="font-semibold text-base">
              New Password
            </label>
            <input
              id="pass"
              type="password"
              className={inputStyle}
              required
              placeholder="New Password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="retype" className="font-semibold text-base">
              Re-Typed New Password
            </label>
            <input
              id="pass"
              type="password"
              className={inputStyle}
              required
              placeholder="Re-Typed New Password"
            />
          </div>
          <Button align="self-left mt-8">Update Info</Button>
        </form>
        <form
          className={`grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-4 ${
            selectedTab === tabs[0].id ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="fname" className="font-semibold text-base">
              First Name
            </label>
            <input
              id="fname"
              type="text"
              className={inputStyle}
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lname" className="font-semibold text-base">
              Last Name
            </label>
            <input
              id="lname"
              type="text"
              className={inputStyle}
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="font-semibold text-base">
              Username
            </label>
            <input
              id="username"
              type="text"
              className={inputStyle}
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold text-base">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              pattern="^(0|\+84)(3[2-9]|5[6|8|9]|7[0-9]|8[1-9]|9[0-9])\d{7}$"
              className={`${inputStyle} appearance-none`}
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill" className="font-semibold text-base">
              Skill/Occupation
            </label>
            <input id="skill" type="text" className={inputStyle} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="skill" className="font-semibold text-base">
              Skill/Occupation
            </label>
            <input id="skill" type="text" className={inputStyle} />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label htmlFor="bio" className="font-semibold text-base">
              Biography
            </label>
            <textarea
              id="bio"
              className={`${inputStyle} min-h-12`}
              minLength={35}
            />
          </div>
          <Button align="self-left mt-8 col-start-1">Update Info</Button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
