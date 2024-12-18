"use client";
import InfoBar from "@/components/ui/infoBar";
import LeftBar from "@/components/layout/leftBar";
import { getQueryClient } from "../providers";
import { getUserInfo } from "@/services/user";
import { getAllCourses } from "@/services/course";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: ["getProfile"],
    queryFn: getUserInfo,
    staleTime: Infinity,
  });
  queryClient.prefetchQuery({
    queryKey: ["getAllCourses"],
    queryFn: getAllCourses,
    staleTime: Infinity,
  });
  return (
    <main>
      <div className="w-full py-4 flex flex-col items-center gap-8 overscroll-y-auto min-h-screen">
        <InfoBar />

        <div className="dashboard-bottom flex flex-row w-[80vw] rounded-2xl h-fit relative">
          <div className="w-full h-full absolute left-0 top-0 border-[1.5px] border-[#E3E2E6] rounded-2xl -z-10 bg-[#FAF9FD]"></div>
          <LeftBar />
          <div className="p-8 w-fit h-fit flex-1">{children}</div>
        </div>
      </div>
    </main>
  );
}
