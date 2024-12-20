// "use client";
import * as React from "react";
import { CourseItemHome } from "@/components/common/cards/coursecard";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getAllCourses } from "@/services/course";
interface CategoryItem {
  id: number;
  name: string;
  isActive?: boolean;
}

interface LanguageItem {
  id: number;
  name: string;
}

interface PriceItem {
  id: number;
  name: string;
}

const categories: CategoryItem[] = [
  { id: 1, name: "All Category" },
  { id: 2, name: "Art & Design" },
  { id: 3, name: "Business" },
  { id: 4, name: "Development" },
  { id: 5, name: "Data Science" },
  { id: 6, name: "Finance" },
];

const languages: LanguageItem[] = [
  { id: 1, name: "All Language" },
  { id: 2, name: "English" },
  { id: 3, name: "Vietnamese" },
];

const prices: PriceItem[] = [
  { id: 1, name: "All Price" },
  { id: 2, name: "Free" },
  { id: 3, name: "Paid" },
];
const FilterSection: React.FC<{
  title: string;
  items: (CategoryItem | LanguageItem | PriceItem)[];
  showMore?: boolean;
}> = ({ title, items }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center p-8 max-w-full bg-gray-100 rounded-3xl w-[260px] max-md:px-5">
      <div className="self-start text-xl font-bold leading-none text-black">
        {title}
      </div>
      <div className="flex overflow-hidden flex-col mt-5 w-full">
        <RadioGroup className="flex overflow-hidden flex-col items-start w-full text-base text-black">
          {items.map((item) => (
            <label
              key={item.id}
              className="flex overflow-hidden text-m gap-2 items-center first:mt-0 select-none cursor-pointer"
            >
              <RadioGroupItem key={item.id} value={item.name}></RadioGroupItem>
              {item.name}
            </label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

// const Pagination: React.FC<{
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }> = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <nav
//       className="flex gap-2.5 justify-between items-center text-base tracking-wide text-center text-neutral-950"
//       role="navigation"
//       aria-label="Pagination"
//     >
//       {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`self-stretch px-0.5 my-auto h-[33px] min-h-[33px] rounded-[30px] w-[33px] border border-black border-solid focus:outline-none focus:ring-2 focus:ring-sky-600 ${
//             currentPage === page ? "text-white bg-sky-600" : "bg-gray-100"
//           }`}
//           aria-current={currentPage === page ? "page" : undefined}
//           aria-label={`Page ${page}`}
//         >
//           <span className="font-bold">{page}</span>
//         </button>
//       ))}
//     </nav>
//   );
// };

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  // const [searchQuery, setSearchQuery] = React.useState("");
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [courseData, setCourseData] = React.useState<any[]>([]);
  // React.useEffect(() => {
  //   const getCourseData = async () => {
  //     const data = await getAllCourses();
  //     setCourseData(data);
  //   };

  //   getCourseData();
  // }, []);

  // const handleSearch = (query: string) => {
  //   setSearchQuery(query);
  //   setCurrentPage(1);
  // };
  const { category, language, price, searchQuery } = await searchParams;
  const courses = await getAllCourses();
  const filteredCourses = courses?.filter((course: any) => {
    const matchCategory = category ? course.category === category : true;
    const matchLanguage = language ? course.language === language : true;
    const matchPrice = price ? course.price === price : true;

    return matchCategory && matchLanguage && matchPrice;
  });
  return (
    <main className="flex flex-col bg-white">
      <div className="flex overflow-hidden flex-wrap gap-20 px-5 py-6 w-full max-md:max-w-full">
        <aside className="flex overflow-hidden flex-col items-center py-2.5 text-center min-w-[200px] w-fit gap-8">
          <FilterSection title="Categories" items={categories} />
          <FilterSection title="Languages" items={languages} />
          <FilterSection title="Price" items={prices} showMore={false} />
        </aside>

        <section className="flex overflow-hidden flex-col flex-1 shrink self-start px-2.5 pt-2.5 basis-10 min-h-[812px] min-w-[240px] max-md:max-w-full w-[60vw]">
          <h1 className="self-start text-2xl font-bold text-center text-black">
            Courses in Development
          </h1>
          <div className="flex overflow-hidden self-stretch pt-2 mt-2 w-full text-base text-center text-black min-h-[40px] max-md:max-w-full">
            Showing 1-6 of 48 Results
          </div>

          <div
            id="Course lists"
            className="grid grid-cols-3 px-2 gap-8 w-full max-lg:grid-cols-1 max-xl:grid-cols-2"
          >
            {filteredCourses.map((courseData: any, index: number) => (
              <CourseItemHome key={index} course={courseData} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {/* <Pagination
              currentPage={currentPage}
              totalPages={4}
              onPageChange={setCurrentPage}
            /> */}
          </div>
        </section>
      </div>
    </main>
  );
}
