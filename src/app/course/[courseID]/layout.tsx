// "use client";

import { BulletItem } from "@/components/ui/bulletItem";
import { ButtonClick } from "@/components/common/buttons/button";
import { CourseDetail, Tab } from "@/components/pages/course/previewLayout";
import { ClientBackground } from "@/components/ClientBackground";
import { prefetchCourseByID } from "@/hooks/useCourses";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

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

  const { courseID } = await params;

  const queryClient = await prefetchCourseByID(courseID);
  const tabs = [
    { label: "Overview", href: `/course/${courseID}/overview` },
    { label: "Content", href: `/course/${courseID}/content` },
    { label: "About", href: `/course/${courseID}/about` },
    { label: "Reviews", href: `/course/${courseID}/review` },
  ];
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col w-screen max-w-full">
        <div className="w-full h-fit relative min-w-fit">
          <div className="flex flex-row px-24 justify-between gap-44 max-md:px-5 flex-grow">
            {/* {currentRoute} and {courseID} */}
            {/* <nav aria-label="breadcrumb" className="text-base font-bold text-sky-600 w-full">
                        <span>Marketing</span> &gt; <span>Digital marketing</span>
                    </nav> */}
            <ClientBackground />
            <div className="flex flex-col">
              <CourseDetail courseID={courseID} />
              <div
                className="flex flex-wrap gap-4 items-center pt-4 pb-1.5 
                 max-w-full text-base text-center text-black w-full "
              >
                {tabs.map((tab, index) => (
                  <Tab key={index} label={tab.label} href={tab.href} />
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
                    {courseFeatures.map((item, index) => (
                      <BulletItem {...item} key={index} />
                    ))}
                  </div>
                </section>
                <section className="flex flex-col pt-2.5 w-full text-sm font-semibold">
                  <div className="flex justify-center items-center px-2.5 w-full">
                    <div className="flex pb-6 items-start self-stretch my-auto w-[223px] max-w-full">
                      <ButtonClick className="w-[200px]">
                        Enroll now
                      </ButtonClick>
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
    </HydrationBoundary>
  );
}
