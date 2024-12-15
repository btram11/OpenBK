import * as React from "react";
import { ButtonClick } from "../buttons/button";
import Star from "@/public/svg/star.svg";
import ArrowRight from "@/public/svg/arrow_right.svg";
import Link from "next/link";
import { Course } from "@/domain/course.entity";

export const CourseItemHome: React.FC<{ course: Course | null }> = ({ course }) => {
  if (!course) {
    console.log(course)
  }

  return (
    <Link href={`/course/${course?.courseID}/overview`}>
      <div
        className="flex overflow-hidden flex-col self-stretch px-5 pt-6 pb-8 my-auto rounded-2xl border border-solid border-zinc-600 
    min-w-[200px] w-[300px]"
      >
        <img
          loading="lazy"
          src={course?.imageUrl}
          alt={course?.courseName}
          className="object-contain w-full aspect-[1.42]"
        />
        <div className="flex flex-col self-center mt-5 w-full max-w-[270px]">
          <div className="flex overflow-hidden gap-10 justify-between items-start w-full text-center whitespace-nowrap">
            <div className="overflow-hidden gap-2 self-stretch px-3.5 py-2 text-sm text-black bg-zinc-200 rounded-[50px]">
              {course?.category}
            </div>
            <div className="flex overflow-hidden gap-2.5 justify-center items-center py-2 rounded-[50px] text-zinc-600">
              <div
                id="star"
                className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto"
              >
                <Star />
                {/* <div className="self-stretch my-auto text-base">{course.rating}</div> */}
                {/* <div className="self-stretch my-auto text-sm">({course.reviews})</div> */}
              </div>
            </div>
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-wider text-black">
            {course?.courseName}
          </h3>
          <div className="flex gap-1 items-center mt-4 w-full text-base text-black whitespace-nowrap">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[27px] w-[27px]" />
              <div className="self-stretch my-auto">{course?.authorID}</div>
            </div>
          </div>

          <div className="flex gap-5 justify-between items-center pt-4 mt-4 w-full">
            <ButtonClick>
              Enroll now
              <ArrowRight />
            </ButtonClick>
            <div className="self-stretch my-auto text-2xl font-bold text-sky-600">
              {course?.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const CourseItemDashboard: React.FC = () => {
  return (
    <div className="border border-[#909094] w-full rounded-xl min-w-fit ">
      <div className="flex flex-col p-5 w-full max-w-full h-fit gap-5">
        <img
          className="rounded-md w-full max-w-full h-48"
          src="./favicon.ico"
        />

        {/* Course Info */}
        <div className="flex flex-col w-full gap-3">
          <span className="flex w-fit px-3 py-1 bg-[#E3E2E6] rounded-full text-xs items-center justify-center hover:bg-dodger-blue-600 hover:text-white duration-300">
            Development
          </span>

          <h5 className="text-lg font-semibold text-start hover:underline hover:underline-offset-4 duration-100">
            Learning Digital Marketing on Facebook
          </h5>

          <div className="flex flex-row justify-between">
            <div className="author flex flex-row items-center gap-1">
              <img
                className="aspect-square w-7 rounded-full"
                src={`./favicon.ico`}
              />
              <span className="text-sm">Author name</span>
            </div>
            <div className="ratings flex flex-row items-center">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z"
                  fill="#F4BF2A"
                />
              </svg>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row justify-between w-full font-semibold text-xs text-[#909094]">
              <span>Progress</span>
              <span>Progress</span>
            </div>
            <div className="w-full max-w-full h-[5px] bg-[#E3E2E6] rounded-full">
              <div className="w-3/5 max-w-full h-full bg-dodger-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row border-t border-[#909094] px-5 py-2">
        hkhkhkhk
      </div>
    </div>
  );
};
