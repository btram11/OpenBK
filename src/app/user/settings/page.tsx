"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProfileFrom } from "./ProfileForm";
import { PasswordForm } from "./PasswordForm";

const tabs: Array<{
  id: string;
  label: string;
  component: React.FC;
}> = [
  { id: "profile", label: "Profile", component: ProfileFrom },
  { id: "password", label: "Password", component: PasswordForm },
  //   { id: "completedCourses", label: "Completed Courses" },
];

const SettingsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].id);

  // Hàm xử lý sự kiện khi nhấn vào tab
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

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
        {tabs.map(({ id, component: Component }) =>
          selectedTab === id ? (
            <React.Fragment key={id}>
              <Component />
            </React.Fragment>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
