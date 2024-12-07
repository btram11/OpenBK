import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { BulletItem } from "@/app/components/bulletItem";
import { courseDatas, courseFeatures, courses, courseNav } from "@/app/data/data";

export default function Page() {

    return (
        <div className="flex flex-col justify-center pt-4 pb-[200px] pr-11 pl-24 w-full text-black max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center p-4 w-[775px] rounded-xl border border-solid border-black border-opacity-30">                
            <h2 className="mt-2.5 leading-none text-2xl font-bold">Course content</h2>
              {courseNav.map((bullet, index) => (
                      <BulletItem key={index} {...bullet}></BulletItem>
                    ))}
            </div>
        </div>
    )
}