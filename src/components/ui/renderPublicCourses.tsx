import { PublicCourseEntity } from "@/domain/course.entity";
import { CourseCard } from "../common/cards/courseCard";
import React from "react";

export const RenderPublicCourses: React.FC<{
  courses: PublicCourseEntity[] | undefined;
  start: number;
  end: number;
}> = ({ courses, start, end }) => {
  return (
    <>
      {courses && courses.length > 0 ? (
        courses.slice(start, end).map((course) => (
          <CourseCard key={course.courseID} course={course} type="PREVIEW-COURSE" />
        ))
      ) : (
        <div className="w-full">
            <img
              className="w-full"
              src="https://nihotour.gov.ng/wp-content/plugins/tutor/assets/images/emptystate.svg"
              alt="no course data"
            />
        </div>
      )}
    </>
  );
};
