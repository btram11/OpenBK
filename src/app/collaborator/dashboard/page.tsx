'use client';
import DashboardPage from "@/components/pages/dashboard";
import { useEnrolledCourses } from "@/hooks/useEnrollCourse";
const DashboardLearner: React.FC = () => {
  const { data, isLoading, isError } = useEnrolledCourses();
  return (
    <DashboardPage data={data} isLoading={isLoading} isError={isError} />
  );
};

export default DashboardLearner;

