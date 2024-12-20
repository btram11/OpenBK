'use client';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllEnrolledCourses } from "@/services/course/courseEnroll";
export const useEnrolledCourses = () => {
  const [learnerID, setLearnerID] = useState<string | null>(null);

  useEffect(() => {
    const userID = sessionStorage.getItem("userID");
    setLearnerID(userID);
  }, []);

  return useQuery({
    queryKey: ["EnrollCourses", learnerID],
    queryFn: () => getAllEnrolledCourses(learnerID as string),
    staleTime: Infinity,
    enabled: !!learnerID,
  });
};
