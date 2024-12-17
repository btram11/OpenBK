import { useQuery } from "@tanstack/react-query";
import { getQueryClient } from "@/app/providers";
import { getUserParticipateCourses } from "@/services/user";
export const useUCourses = () => {
  return useQuery({
    queryKey: ["userCourses"],
    queryFn: getUserParticipateCourses,
    staleTime: Infinity,
  });
};

export const useUCoursesPrefetch = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["userCourses"],
    queryFn: getUserParticipateCourses,
    staleTime: Infinity,
  });
};
