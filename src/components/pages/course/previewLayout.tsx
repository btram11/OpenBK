"use client";
import { useCourseByID } from "@/hooks/useCourses";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const Tab: React.FC<{
  label: string;
  href: string;
}> = ({ label, href }) => {
  const currentRoute: string = usePathname();

  const isActive = href === currentRoute;
  return isActive ? (
    <span
      tabIndex={0}
      className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-amber-300 font-bold`}
    >
      {label}
    </span>
  ) : (
    <Link
      tabIndex={0}
      href={href}
      className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-zinc-200 hover:bg-zinc-300`}
    >
      {label}
    </Link>
  );
};

const CourseStats: React.FC<{
  students: number;
  rating: number;
  reviews: number;
  lastUpdated: string;
  language: string;
}> = ({ students, rating, reviews, lastUpdated, language }) => (
  <div id="courseInfo">
    <div className="flex relative flex-wrap gap-2.5 items-center mt-2.5 w-full">
      <div className="flex absolute left-0 bottom-px z-0 gap-2.5 items-center self-start min-h-[18px]" />
      <div className="z-0 self-stretch my-auto text-sm tracking-wide leading-none text-black">
        {students.toLocaleString()} students
      </div>
      <div className="flex overflow-hidden z-0 gap-1.5 items-center self-stretch px-2.5 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/561dd6bf5c536831a59626d26535ac5f00eb09d736ee3a10d2d09939a048eb14?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <div className="self-stretch my-auto text-base text-center text-black capitalize">
          {rating}
        </div>
        <div className="self-stretch my-auto text-sm tracking-wide leading-none text-black">
          ({reviews} reviews)
        </div>
      </div>
    </div>

    <div className="flex gap-2.5 items-center self-start mt-2.5 text-sm tracking-wide leading-none text-black">
      <div className="flex gap-2.5 items-center self-stretch my-auto w-[207px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/e1eaa0ad71ee14910b23b983f9f7c25fc8ee3c3a092dad25acc76e9b6de5dffa?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto w-[193px]">
          Last updated {lastUpdated}
        </div>
      </div>
      <div className="flex gap-2.5 items-center self-stretch my-auto whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/8d79b4fc4e4a4e93a0b5a083a7d78008bc5b03defdc9ce320b250fbc60af8983?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto w-[67px]">{language}</div>
      </div>
    </div>
  </div>
);

export function CourseDetail({ courseID }: { courseID: any }) {
  const { data } = useCourseByID(courseID);
  return (
    <article
      id="content"
      className="flex flex-grow flex-col h-[260px] justify-center max-w-full w-[781px] gap-2"
    >
      <h1 className="text-4xl font-bold text-black w-full">
        {data?.courseName}
      </h1>
      <p className="text-base tracking-wide leading-6 text-black w-full">
        {data?.description}
      </p>
      <div className="text-base tracking-wide text-black">
        {data?.authorInfo?.name}
      </div>
      {/* <CourseStats {...data} /> */}
    </article>
  );
}
