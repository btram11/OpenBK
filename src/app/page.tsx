'use client';
import * as React from "react";
import { CourseItemHome } from "@/components/common/cards/coursecard";
import Slogan from "@/components/layout/slogan";
import { CourseEntity } from "@/domain/course.entity";
import { useCourses } from "@/hooks/useCourses";


export default function Page() {
  const { data: courses } = useCourses();

  const renderCourses = (courses: CourseEntity[] | undefined, start: number, end: number) => (
    <>
      {courses && courses.length > 0 ? (
        courses.slice(start, end).map((course) => (
          <CourseItemHome key={course.courseID} course={course} />
        ))
      ) : (
        <div className="w-full flex justify-center">
          <img
            className="w-full]"
            src="https://nihotour.gov.ng/wp-content/plugins/tutor/assets/images/emptystate.svg"
            alt="no course data"
          />
        </div>
      )}
    </>
  );

  return (
    <main>
      <Slogan />

      <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
        <h2 className="text-3xl leading-none text-black">What's new</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
          {renderCourses(courses, 0, 3)}
        </div>
      </section>

    </main>
  );
}

