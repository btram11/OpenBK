import { CourseItemHome } from "@/app/components/coursecard";

const courses = [
    {
      id: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.5,
      reviews: 123456,
      title: "Learning Digital Marketing on Facebook",
      instructor: "Someone",
      price: "200.000đ"
    },
    {
        id: 2,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
        category: "Development",
        rating: 4.5,
        reviews: 123456,
        title: "Learning Digital Marketing on Facebook",
        instructor: "Someone",
        price: "200.000đ"
    },
    {
        id: 3,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
        category: "Development",
        rating: 4.5,
        reviews: 123456,
        title: "Learning Digital Marketing on Facebook",
        instructor: "Someone",
        price: "200.000đ"
      }

  ];

export default function Page() {
  return (
    <main>
        <section className="flex flex-col justify-center items-start py-14 pr-20 pl-20 w-full bg-gray-100 min-h-[294px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[450px]">
            <h1 className="text-5xl font-bold my-4 text-black max-md:text-4xl">
                Slogan here
                <div className="my-2"/>
                slogan here
            </h1>
            <p className="text-base tracking-wide leading-6 text-black">
                Lorem ipsum dolor sit amet consectetur. Iaculis fermentum eget at
                non ipsum velit amet mattis aliquam.
            </p>
            </div>
        </section>

        <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-3xl leading-none text-black">What's new</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
            {courses.map((course, index) => (
                <CourseItemHome key={index} {...course} />
            ))}
            </div>
        </section>

        <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-3xl leading-none text-black">Resume your learning</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
            {courses.map((course, index) => (
                  <CourseItemHome key={index} {...course} />
            ))}
            </div>
        </section>
    </main>
  )
}