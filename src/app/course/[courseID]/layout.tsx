import {
  CourseDetail,
  CourseInfoCard,
  Tab,
} from "@/components/pages/previewLayout";
import { ClientBackground } from "@/components/ClientBackground";
import { prefetchCourseByID } from "@/hooks/useCourseData";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function CourseLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ courseID: string }>;
}>) {
  // const sampleData = {
  //   students: 123456,
  //   rating: 4.5,
  //   reviews: 123456,
  //   lastUpdated: "23 Dec",
  //   language: "English",
  // };

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
            <CourseInfoCard courseID={courseID} />
          </div>
          <div
            id="background-content"
            className="-z-30 top-0 w-full bg-indigo-50 absolute"
          ></div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
