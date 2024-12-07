"use client";

import { BulletItem } from "@/components/ui/bulletItem";
import { ButtonClick } from "@/components/common/buttons/button";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const CourseStats: React.FC<{
  students: number;
  rating: number;
  reviews: number;
  lastUpdated: string;
  language: string;
}> = ({ students, rating, reviews, lastUpdated, language }) => (
  <div id="courseInfo">
    <div className="flex relative flex-wrap gap-2.5 items-center mt-2.5 w-full max-md:max-w-full">
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
const Tab: React.FC<{
  label: string;
  isActive: boolean;
  ref: string;
}> = ({ label, isActive = false, ref }) =>
  isActive ? (
    <span
      tabIndex={0}
      className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-amber-300 font-bold`}
    >
      {label}
    </span>
  ) : (
    <Link
      tabIndex={0}
      href={ref}
      className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-zinc-200 hover:bg-zinc-300`}
    >
      {label}
    </Link>
  );

export default function CourseLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ courseID: string }>;
}>) {
  const sampleData = {
    students: 123456,
    rating: 4.5,
    reviews: 123456,
    lastUpdated: "23 Dec",
    language: "English",
  };
  const courseFeatures = [
    { type: "video", text: "95 hours on-demand video" },
    { type: "article", text: "35 articles" },
    { type: "test", text: "2 practice tests" },
    { type: "test", text: "Assignments" },
    { type: "download", text: "100 downloadble resources" },
    { type: "infinity", text: "Full lifetime access" },
    { type: "certificate", text: "Certificate of completion" },
  ];

  //*Pathname
  const { courseID } = React.use(params);
  const tabs = [
    { label: "Overview", href: `/course/${courseID}/overview` },
    { label: "Content", href: `/course/${courseID}/content` },
    { label: "About", href: `/course/${courseID}/about` },
    { label: "Reviews", href: `/course/${courseID}/review` },
  ];
  const currentRoute: string = usePathname();
  return (
    <main>
      <div
        role="top"
        className="flex flex-col relative py-5 pl-24 w-full bg-indigo-50 max-md:pl-5 max-md:max-w-full"
      >
        {currentRoute} and {courseID}
        <article className="flex flex-col justify-center mt-2.5 max-w-full w-[781px]">
          <h1 className="text-4xl font-bold text-black max-md:max-w-full">
            Learning digital marketing on Facebook
          </h1>
          <p className="mt-2.5 text-base tracking-wide leading-6 text-black max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Iaculis fermentum eget at
            non ipsum velit amet mattis aliquam.
          </p>
          <div className="mt-2.5 text-base tracking-wide text-black">
            Collaborator A
          </div>
          <CourseStats {...sampleData} />
        </article>
        <div
          id="side"
          className="flex shadow-lg absolute right-[160px] top-0 bg-white flex-col mx-auto w-full text-black max-w-[360px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/553d1327100a35814332d6abc4330430b48de3f437fed53e7376aec74b4631d5?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
            alt="Course preview"
            className="object-contain w-full rounded-md aspect-[1.38]"
          />
          <section className="flex flex-col px-2.5 py-4 w-full text-base">
            <h2 className="font-bold">This course includes:</h2>
            <div className="flex flex-col items-start mt-2.5 w-full">
              {courseFeatures.map((item, index) => (
                <BulletItem key={index} {...item} />
              ))}
            </div>
          </section>
          <section className="flex flex-col pt-2.5 w-full text-sm font-semibold">
            <div className="flex justify-center items-center px-2.5 w-full">
              <div className="flex pb-6 items-start self-stretch my-auto w-[223px]">
                <ButtonClick className="w-[200px]">Enroll now</ButtonClick>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        role="tablist"
        className="flex flex-wrap gap-4 items-center px-24 pt-4 pb-1.5 
                 max-w-full text-base text-center text-black w-[875px] max-md:px-5"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            ref={tab.href}
            isActive={currentRoute === tab.href}
          />
        ))}
      </div>
      {children}
    </main>
  );
}
