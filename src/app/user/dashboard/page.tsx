import CourseItem from "@/components/common/cards/courseItem";

const DashboardPage: React.FC = () => (
  <div className="flex flex-col gap-6 h-fit">
    <div className="dashboard_count flex flex-col gap-5">
      <h3 className="font-semibold text-lg">Dashboard</h3>
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white drop-shadow-md duration-300 p-6 rounded-2xl hover:-translate-y-2 w-full flex flex-row gap-4 min-w-fit">
            <div className="rounded-full bg-dodger-blue-500 w-[6vw] max-w-[70px] min-w-fit aspect-square"></div>
            <div className="flex flex-col gap-3 self-center">
              <p className="text-2xl font-semibold">30</p>
              <p className="text-base">Name</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="dashboard_count flex flex-col gap-5">
      <h3 className="font-semibold text-lg capitalize">In progress Courses</h3>
      <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-xl:grid-cols-2">
        <CourseItem />
      </div>
    </div>
  </div>
);

export default DashboardPage;
