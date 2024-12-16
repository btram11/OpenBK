import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/app/providers";
import { CourseEntity } from "@/domain/course.entity";
import { getAllCourses } from "@/services/course";

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
    queryKey: ['getAllCourses'],
    queryFn: getAllCourses,
    staleTime: Infinity,
  });
};
