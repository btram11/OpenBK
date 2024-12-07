import { CourseItemHome } from "@/app/components/coursecard";
import { courses } from "@/app/data/data";

export default function Page() {
  return (
    <main>
        <section className="flex flex-col justify-center items-start py-14 pr-20 pl-20 w-full bg-gradient-to-r from-sky-300 to-indigo-200 min-h-[294px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[450px]">
            <h1 className="text-5xl font-bold my-4 text-black max-md:text-4xl">
                "Learn, Grow, Succeed"
            </h1>
            <p className="text-base tracking-wide leading-6 text-black">
                Unlock your potential with OpenBK.
            </p>
            </div>
        </section>

        <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-3xl leading-none text-black">Resume your learning</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
            {courses.slice(0,3).map((course, index) => (
                <CourseItemHome key={index} {...course} />
            ))}
            </div>
        </section>

        <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-3xl leading-none text-black"></h2>
            <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
            {courses.slice(4,7).map((course, index) => (
                  <CourseItemHome key={index} {...course} />
            ))}
            </div>
        </section>
    </main>
  )
}