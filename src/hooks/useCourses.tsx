import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { CourseEntity } from "@/domain/course.entity";
import { getAllCourses, getCourseById } from "@/services/course";

export const useCourses = () => {
  return useQuery<CourseEntity[] | undefined>({
    queryKey: ["getAllCourses"],
    queryFn: getAllCourses,
    staleTime: Infinity,
  });
};

export const prefetchCourses = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getAllCourses"],
    queryFn: getAllCourses,
    staleTime: Infinity,
  });
  return queryClient;
};

export const prefetchCourseByID = async (id: any) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getCourse", id],
    queryFn: async () => {
      return getCourseById(id);
    },
  });
  return queryClient;
};

export const useCourseByID = (id: any) => {
  return useQuery<CourseEntity | undefined>({
    queryKey: ["getCourse", id],
    queryFn: async () => {
      return getCourseById(id);
    },
    staleTime: Infinity,
  });
};
