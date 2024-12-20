import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BulletItem } from "@/components/ui/bulletItem";

export default function Page({
  params,
}: Readonly<{
  params: Promise<{ courseID: string }>;
}>) {
  const courseContentData = [
    {
      id: 1,
      title: "A",
      content: [
        {
          type: "video",
          text: "Video 1",
          href: "/",
        },
        {
          type: "video",
          text: "Video 2",
          href: "/",
        },
        {
          type: "video",
          text: "Video 3",
          href: "/",
        },
        {
          type: "video",
          text: "4.6 Overall Ratings",
          href: "/",
        },
      ],
    },
    {
      id: 2,
      title: "A",
      content: [
        {
          type: "video",
          text: "Video 1",
        },
        {
          type: "article",
          text: "Article 1",
        },
        {
          type: "test",
          text: "Test 1",
        },
        {
          type: "test",
          text: "Test 2",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center pt-4 pb-[200px] w-full text-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center p-4 w-[775px] rounded-xl border border-solid border-black border-opacity-30 gap-5">
        <div className="flex flex-grow flex-row justify-between items-start">
          <h2 className="mt-2.5 leading-none text-2xl font-bold">
            Course content
          </h2>
        </div>
        <Accordion type="single" collapsible>
          {courseContentData.map((item) => (
            <AccordionItem value={`item-${item.id}`}>
              <AccordionTrigger className="text-xl">
                Unit {item.id}
              </AccordionTrigger>
              <AccordionContent>
                {item.content.map((bullet) => (
                  <BulletItem {...bullet}></BulletItem>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
