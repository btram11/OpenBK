import { EnrolledCourseEntity } from "@/domain/enrolledCourse.entity";

const CourseItem: React.FC<{ course: EnrolledCourseEntity }> = (props) => {
  const { course } = props;
  return (
    <div
      {...props}
      className="border border-[#909094] w-full rounded-xl min-w-fit "
    >
      <div className="flex flex-col p-5 w-full max-w-full h-fit gap-5">
        <img
          className="rounded-md w-full max-w-full h-48"
          src={
            course?.courseInfo.imageUrl ||
            "https://www.w3schools.com/images/w3schools_green.jpg"
          }
          alt=""
        />

        {/* Course Info */}
        <div className="flex flex-col w-full gap-3">
          <span className="flex w-fit px-3 py-1 bg-[#E3E2E6] rounded-full text-xs items-center justify-center hover:bg-dodger-blue-600 hover:text-white duration-300">
            {course?.courseInfo.category}
          </span>

          <a
            href="https://www.example.com"
            className="text-lg font-semibold text-start hover:underline hover:underline-offset-4 duration-100"
          >
            {course?.courseInfo.courseName}
          </a>

          <div className="flex flex-row justify-between">
            <a
              href="https://www.example.com"
              className="author flex flex-row items-center gap-2"
            >
              <img
                className="aspect-square w-7 rounded-full"
                src={course?.courseInfo?.authorInfo?.imageUrl}
              />
              <span className="text-sm">
                {course?.courseInfo?.authorInfo?.name}
              </span>
            </a>
            <div className="ratings flex flex-row items-center">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L10.2665 4.88043L15.6085 5.52786L11.6673 9.19157L12.7023 14.4721L8 11.856L3.29772 14.4721L4.33273 9.19157L0.391548 5.52786L5.7335 4.88043L8 0Z"
                  fill="#F4BF2A"
                />
              </svg>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row justify-between w-full font-semibold text-xs text-[#909094]">
              <span>Progress</span>
              <span>Progress</span>
            </div>
            <div className="w-full max-w-full h-[5px] bg-[#E3E2E6] rounded-full">
              <div className="w-3/5 max-w-full h-full bg-dodger-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row border-t border-[#909094] px-5 py-2">
        hkhkhkhk
      </div> */}
    </div>
  );
};

export default CourseItem;
