import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BulletItem } from "@/components/ui/bulletItem";
import { courseNav } from "@/data/data";

export default function Page() {
  return (
    <div className="flex flex-col justify-center pt-4 pb-[200px] w-full text-black ">
      <div className="flex flex-col justify-center p-4 w-full rounded-xl border border-solid border-black border-opacity-30 gap-4-">
        <h2 className="leading-none text-2xl font-bold">Course content</h2>
        {courseNav.map((bullet, index) => (
          <BulletItem key={index} {...bullet}></BulletItem>
        ))}
      </div>
    </div>
  );
}
