'use client';
import * as React from "react";
import { CourseItemHome } from "@/components/common/cards/coursecard";
import Slogan from "@/components/layout/slogan";
import { getAllCourses } from "@/services/course";
import { Course } from "@/domain/course.entity";
import { useQuery } from "@tanstack/react-query";


export default function Page() {

  const { data: courseData } = useQuery<Course[] | null>({
    queryKey: ["getCourses"],
    queryFn: getAllCourses,
    staleTime: Infinity,
  });

  return (
    <main>
      <Slogan />

      <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
        <h2 className="text-3xl leading-none text-black">What's new</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
          {courseData?.slice(0, 3).map(course => (
            course && <CourseItemHome key={course.courseID} course={course} />
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
        <h2 className="text-3xl leading-none text-black">
          Resume your learning
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
          {courseData?.slice(3, 6).map(course => (
            course && <CourseItemHome key={course.courseID} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
};

