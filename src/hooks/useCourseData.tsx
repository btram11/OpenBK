import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { PublicCourseEntity } from "@/domain/course.entity";
import { UnitEntity } from "@/domain/unit.entity";
import { getCourseById } from "@/services/course";
import { getUnitById } from "@/services/course/unit";

export const prefetchCourseByID = async (id: any) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getCourseById", id],
    queryFn: async () => {
      return getCourseById(id);
    },
  });
  return queryClient;
};

export const useCourseData = (courseID: string) => {
  "use client";

  return useQuery<PublicCourseEntity | undefined>({
    queryKey: ["getCourseById", courseID],
    queryFn: () => getCourseById(courseID as string),
    staleTime: Infinity,
  });
};

export const useUnitData = (unitID: string) => {
  "use client";

  return useQuery<UnitEntity | undefined>({
    queryKey: ["getUnitById", unitID],
    queryFn: () => getUnitById(unitID as string),
    staleTime: Infinity,
  });
};

// export const prefetchCourses = async () => {
//   const queryClient = getQueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: ['getAllCourses'],
//     queryFn: getAllCourses,
//     staleTime: Infinity,
//   });
// };
