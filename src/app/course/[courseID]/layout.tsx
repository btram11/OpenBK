"use client";

import { BulletItem } from "@/components/ui/bulletItem";
import { ButtonClick } from "@/components/common/buttons/button";
import React, { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { Tab } from "@/components/pages/course/previewLayout";
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

export default async function CourseLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ courseID: string }>;
}>) {
  //TODO: Fetch data
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
  // const { courseID } = await params;
  const { courseID } = useParams();
  const tabs = [
    { label: "Overview", href: `/course/${courseID}/overview` },
    { label: "Content", href: `/course/${courseID}/content` },
    { label: "About", href: `/course/${courseID}/about` },
    { label: "Reviews", href: `/course/${courseID}/review` },
  ];
  const currentRoute: string = usePathname();

  useEffect(() => {
    const article = document.querySelector("#content") as HTMLElement; // Ép kiểu thành HTMLElement
    const background = document.querySelector(
      "#background-content"
    ) as HTMLElement;

    const updateHeight = () => {
      if (article && background) {
        const height = article.getBoundingClientRect().height;
        background.style.height = `${height}px`;
      }
    };

    updateHeight(); // Gọi lần đầu để cập nhật ngay

    // Quan sát thay đổi trong article
    const observer = new MutationObserver(updateHeight);
    if (article) {
      observer.observe(article, { childList: true, subtree: true });
    }

    return () => observer.disconnect(); // Ngắt quan sát khi component bị unmount
  }, []);

  return (
    <div className="flex flex-col w-screen max-w-full">
      <div className="w-full h-fit relative">
        <div className="flex flex-row px-24 justify-between gap-44 max-md:px-5 flex-grow">
          {/* {currentRoute} and {courseID} */}
          {/* <nav aria-label="breadcrumb" className="text-base font-bold text-sky-600 w-full">
                        <span>Marketing</span> &gt; <span>Digital marketing</span>
                    </nav> */}
          <div className="flex flex-col">
            <article
              id="content"
              className="flex flex-grow flex-col h-[260px] justify-center max-w-full w-[781px] gap-2"
            >
              <h1 className="text-4xl font-bold text-black w-full">
                Learning digital marketing on Facebook
              </h1>
              <p className=" text-base tracking-wide leading-6 text-black w-full">
                Lorem ipsum dolor sit amet consectetur. Iaculis fermentum eget
                at non ipsum velit amet mattis aliquam.
              </p>
              <div className=" text-base tracking-wide text-black">
                Collaborator A
              </div>
              <CourseStats {...sampleData} />
            </article>
            <div
              className="flex flex-wrap gap-4 items-center pt-4 pb-1.5 
                 max-w-full text-base text-center text-black w-full "
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
          </div>
          <div className="w-[30vw] min-w-[360px]">
            <div className="flex shadow-lg  right-0 top-0 bg-white flex-col mx-auto w-full text-black max-w-[360px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/553d1327100a35814332d6abc4330430b48de3f437fed53e7376aec74b4631d5?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&"
                alt="Course preview"
                className="object-contain w-full rounded-md aspect-[1.38]"
              />
              <section className="flex flex-col px-2.5 py-4 w-full text-base">
                <h2 className="font-bold">This course includes:</h2>
                <div className="flex flex-col items-start mt-2.5 w-full">
                  {courseFeatures.map((item) => (
                    <BulletItem {...item} />
                  ))}
                </div>
              </section>
              <section className="flex flex-col pt-2.5 w-full text-sm font-semibold">
                <div className="flex justify-center items-center px-2.5 w-full">
                  <div className="flex pb-6 items-start self-stretch my-auto w-[223px] max-w-full">
                    <ButtonClick className="w-[200px]">Enroll now</ButtonClick>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          id="background-content"
          className="-z-30 top-0 w-full  bg-indigo-50 absolute"
        ></div>
      </div>
    </div>
  );
}
