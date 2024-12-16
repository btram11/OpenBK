import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/app/providers";
import { CourseEntity } from "@/domain/course.entity";
import { getUserInfo } from "@/services/user";
import { getUserParticipateCourses } from "@/services/user";
export const useUCourses = () => {
  return useQuery({
    queryKey: ["userCourses"],
    queryFn: getUserParticipateCourses,
    staleTime: Infinity,
  });
};
