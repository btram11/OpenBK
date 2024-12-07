import CourseItem from "@/components/ui/CourseItem";
import { CourseItemDashboard } from "@/app/components/coursecard";
import { StatCard } from "@/app/components/statcard";
import { stats } from "@/app/data/data";
import { courses } from "@/app/data/data";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-fit">
      <div className="dashboard_count flex flex-col gap-5">
        <h3 className="font-semibold text-lg">Dashboard</h3>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
          {stats.map((item, index) => 
            <StatCard key={index} {...item}/>
          )}
        </div>
      </div>
    
      <div className="dashboard_count flex flex-col gap-5">
        <div className="font-semibold text-lg capitalize">
          In progress Courses
        </div>
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
          {courses.slice(0,3).map((item, index) => 
            <CourseItemDashboard key={index} {...item}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
