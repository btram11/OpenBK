// const CoursesCollaborator: React.FC = () => {
//     return (
//         <div className="flex flex-col w-full h-full">
//             <h1 className="text-3xl font-bold">Courses</h1>
//         </div>
//     );
// };

// export default CoursesCollaborator;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import CourseItem from "@/components/common/cards/courseItem";
import Pagination from "@/components/common/pagination";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
// import { getCoursesCreatedByCollaborator } from "@/services/user"; // Giả sử bạn có API này

const tabs = [
  { id: "all", label: "All" },
  { id: "activeCourses", label: "Active Courses" },
  { id: "inactiveCourses", label: "Inactive Courses" },
];

const ITEMS_PER_PAGE = 21;

const CoursesCollaborator: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["collaboratorCourses"],
    queryFn: () => {
      return { Courses: [{}, {}] };
    },
  });

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading courses</div>;
  }

  // Extract courses from API response
  const allCourses = {
    all: data?.Courses,
    activeCourses: data.Courses.filter(
      (course: any) => course.status === "active"
    ),
    inactiveCourses: data.Courses.filter(
      (course: any) => course.status === "inactive"
    ),
  };

  const coursesForSelectedTab =
    allCourses[selectedTab as keyof typeof allCourses] || [];
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const coursesToShow = coursesForSelectedTab.slice(startIndex, endIndex);
  const totalPages = Math.ceil(coursesForSelectedTab.length / ITEMS_PER_PAGE);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6 min-w-full">
      <div className="flex flex-row w-full justify-between items-center h-fit">
        <h3 className="font-semibold text-lg">Courses Created by You</h3>
        <Link
          href={"/collaborator/courses/add-course"}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add New Course
        </Link>
      </div>
      <div className="flex flex-col h-fit w-full">
        <div className="flex flex-row w-full flex-wrap relative gap-3">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex flex-row w-fit flex-wrap px-7 py-2 text-base cursor-pointer hover:bg-gray-500/10 rounded-t-md duration-300 ease-in-out transition-all transform relative ${
                selectedTab === tab.id ? "font-semibold" : "font-medium"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
              {selectedTab === tab.id && (
                <motion.div
                  layoutId="activeCourseTab"
                  className="absolute bottom-0 left-0 bg-dodger-blue-500 h-[3px] w-full"
                  transition={{ duration: 0.6 }}
                />
              )}
            </div>
          ))}
          <div className="w-full h-full border-b-[3px] border-[#C7C6CA] absolute left-0 top-0 -z-10"></div>
        </div>
      </div>
      <div className="tab_content w-full h-fit flex flex-col">
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
          {coursesToShow.map((course: any, index) => (
            <CourseItem key={index} course={course} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CoursesCollaborator;
