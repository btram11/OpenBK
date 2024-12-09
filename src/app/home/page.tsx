import { CourseItemHome } from "@/components/common/cards/coursecard";
import Slogan from "../../components/layout/slogan";

const courseData = [
  {
    id:1,
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
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
    category: "Development",
    rating: 4.5,
    reviews: 123456,
    title: "Learning Digital Marketing on Facebook",
    instructor: "Someone",
    price: "200.000đ",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
    category: "Development",
    rating: 4.5,
    reviews: 123456,
    title: "Learning Digital Marketing on Facebook",
    instructor: "Someone",
    price: "200.000đ",
  },
];
export default function Page() {
  return (
    <main>
        <Slogan />

        <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-3xl leading-none text-black">What's new</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
            {[...Array(3)].map((_, index) => (
                <CourseItemHome key={index} {...courseData[0]} />
            ))}
            </div>
        </section>

        <section className="flex flex-col justify-center px-20 w-full bg-white min-h-[595px] max-md:px-5 max-md:max-w-full">
            <h2 className="text-3xl leading-none text-black">Resume your learning</h2>
            <div className="flex flex-wrap gap-6 justify-center items-center py-4 w-full max-md:max-w-full">
            {[...Array(3)].map((_, index) => (
                <CourseItemHome key={index} {...courseData[0]} />
            ))}
            </div>
        </section>
    </main>
  )
}