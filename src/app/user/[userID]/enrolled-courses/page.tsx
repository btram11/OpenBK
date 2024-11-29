"use client";

import React from "react";
import { motion } from "framer-motion";
import {CourseItemDashboard} from "@/app/components/coursecard";

const tabs = [
  { id: "all", label: "All" },
  { id: "activeCourses", label: "Active Courses" },
  { id: "completedCourses", label: "Completed Courses" },
];

const EnrolledCoursesPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0].id);

  // Hàm xử lý sự kiện khi nhấn vào tab
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/your-endpoint");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6 min-w-full">
      <h3 className="font-semibold text-lg">Enrolled Courses</h3>
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
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2 ${
              selectedTab === tab.id ? "" : "hidden"
            }`}
          >
            <CourseItemDashboard />
          </div>
        ))}
        {/* <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
          <CourseItem />
        </div> */}
      </div>
    </div>
  );
};

export default EnrolledCoursesPage;
