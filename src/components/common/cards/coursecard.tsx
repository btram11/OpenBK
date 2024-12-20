import * as React from "react";
import { ButtonClick } from "../buttons/button";
import Star from "@/public/svg/star.svg";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { CourseEntity } from "@/domain/course.entity";

export const CourseItemHome: React.FC<
  {
    course: CourseEntity | null;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ course, ...props }) => {
  return (
    <Link
      className="border border-[#909094] w-[250px] rounded-xl min-w-fit max-w-[300px]"
      href={`/course/${course?.courseID}/overview`}
      as={`/course/${course?.courseID}/overview`}
      {...props}
    >
      <div className="flex flex-col p-5 max-w-[350px] min-w-[200px] w-full h-fit gap-3">
        <img
          loading="lazy"
          className="rounded-md w-full max-w-full h-48 border-1 border-black bg-gray-300"
          src={course?.imageUrl}
          alt={course?.courseName}
        />

        {/* Course Info */}
        <div className="flex flex-col w-full gap-3">
          <span className="flex w-fit px-3 py-1 bg-[#E3E2E6] rounded-full text-xs items-center justify-center hover:bg-dodger-blue-600 hover:text-white duration-300">
            {course?.category}
          </span>

          <a
            href={`/course/${course?.courseID}/overview`}
            className="text-lg font-semibold text-start hover:underline hover:underline-offset-4 duration-200"
          >
            {course?.courseName}
          </a>

          <div className="flex flex-row justify-between">
            <a
              href="https://www.example.com"
              className="author flex flex-row items-center gap-2"
            >
              <img
                className="aspect-square w-10 rounded-full"
                src={course?.authorInfo?.imageUrl}
              />
              <span className="text-sm font-medium hover:text-dodger-blue-500 duration-200">
                {course?.authorInfo?.name}
              </span>
            </a>
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
        </div>
        <div className="flex gap-5 justify-between items-center w-full">
          <ButtonClick className="flex items-end">
            Enroll now
            <FaArrowRight size={16} className="self-end mb-1" />
          </ButtonClick>
          <div className="self-stretch my-auto text-2xl font-bold text-sky-600">
            {course?.price}$
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
