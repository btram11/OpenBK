import { BulletItem } from "@/components/ui/bulletItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { courseNav } from "@/data/data";

const NavUnit: React.FC = () => {
  return (
    <nav
      className="flex flex-wrap gap-10 items-center px-16 py-4 w-full text-black bg-blue-100 max-md:px-5 max-md:max-w-full"
      role="navigation"
    >
      <button
        className="flex gap-2.5 items-center self-stretch my-auto w-24 text-base tracking-wide leading-none whitespace-nowrap"
        aria-label="Return to previous page"
      >
        <span className="self-stretch my-auto">Return</span>
      </button>
      <h1 className="self-stretch my-auto text-xl font-bold tracking-wide leading-tight">
        Learning digital marketing on Facebook
      </h1>
    </nav>
  );
};

export default async function UnitLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    courseID: string;
    chapterID: string;
    unitID: string;
  }>;
}>) {
  return (
    <main>
      <NavUnit />
      <div className="flex overflow-hidden flex-col flex-1 justify-center w-full bg-white">
        <div className="grid grid-cols-3 grid-flow-col bg-white">
          <div
            id="content"
            className="col-span-2 items-start w-full max-md:max-w-full"
          >
            {children}
          </div>

          <div
            id="accordion"
            className="col-span-1 justify-center pt-4 pb-[200px] text-black max-md:px-5 max-md:max-w-full"
          >
            <div
              className="flex flex-col flex-wrap justify-right p-4 w-full max-w-[400px] rounded-xl 
          border border-solid border-black border-opacity-30"
            >
              <h2 className="mt-2.5 leading-none text-2xl font-bold">
                Course content
              </h2>
              {courseNav.map((bullet, index) => (
                <BulletItem key={index} {...bullet}></BulletItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
