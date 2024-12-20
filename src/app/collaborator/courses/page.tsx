'use client';
import CollabCoursesPage from "@/components/pages/collab-course";
import { useEnrolledCourses } from "@/hooks/useEnrollCourse";
import { useState, useEffect } from "react";
import { EnrolledCourseEntity } from "@/domain/course.entity";
const CoursesCollaborator: React.FC = () => {
  const { data, isLoading, isError } = useEnrolledCourses();
  const [state, setState] = useState<{
    data: EnrolledCourseEntity | null;
    isLoading: boolean;
    isError: boolean;
  }>({
    data: null,
    isLoading: false,
    isError: false,
  });
  useEffect(() => {
    setState({ data: data ?? null, isLoading, isError });
  }, [data, isLoading, isError]);

  if (!state.data) {
    return null;
  }
    return (
    <CollabCoursesPage data={state.data} isLoading={state.isLoading} isError={state.isError} />
        // <div className="flex flex-col w-full h-full">
        //     <h1 className="text-3xl font-bold"></h1>
        // </div>
    );
};
export default CoursesCollaborator;
