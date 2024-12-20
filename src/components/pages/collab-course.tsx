"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "../common/cards/courseCard";
import Pagination from "@/components/common/pagination";
import { PublicCourseEntity } from "@/domain/course.entity";
import { transformToCourse } from "@/lib/utils";

const tabs = [
  { id: "all", label: "All" },
//   { id: "activeCourses", label: "Active Courses" },
//   { id: "completedCourses", label: "Completed Courses" },
];

const ITEMS_PER_PAGE = 21;

const CollabCoursesPage: React.FC<{
  data: any;
  isLoading: boolean;
  isError: boolean;
}> = ({ data, isLoading, isError }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [courses, setCourses] = useState<PublicCourseEntity[]>([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setCourses(data);
    } else {
      setCourses([]);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading courses</div>;
  }

  const allCourses: Record<string, PublicCourseEntity[]> = {
    all: courses,
    // activeCourses: courses.filter((course) => course.status === "ACTIVE"),
    // completedCourses: courses.filter((course) => course.status === "COMPLETED"),
  };
  const coursesForSelectedTab = allCourses[selectedTabId] || [];
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const coursesToShow = coursesForSelectedTab.slice(startIndex, endIndex);
  const totalPages = Math.ceil(coursesForSelectedTab.length / ITEMS_PER_PAGE);

  const handleTabClick = (tabId: string) => {
    setSelectedTabId(tabId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6 min-w-full">
      <h3 className="font-semibold text-lg">My Courses</h3>
      <div className="tab_content w-full h-fit flex flex-col">
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
          {coursesToShow.map((course) => (
            <CourseCard key={course.courseID} course={transformToCourse(course)} type="ENROLLED-COURSES" />
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

export default CollabCoursesPage;
