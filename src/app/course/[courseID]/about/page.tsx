import * as React from "react";
import { BulletItem } from "@/components/ui/bulletItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
    const collaboratorData = {
        name: "Someone",
        avatar: "",
        stats: [
          {
            type: "video",
            text: "500 Students"
          },
          {
            type: "video",
            text: "3 Courses"
          },
          {
            type: "video",
            text: "200 Reviews"
          },
          {
            type: "video",
            text: "4.6 Overall Ratings"
          }
        ]
    };

    return (
        <div className="flex flex-col justify-center pt-4 pb-[200px] pr-11 pl-24 w-full text-black max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center p-4 w-[775px] rounded-xl border border-solid border-black border-opacity-30 
           max-md:max-w-full">
            <h2 className="text-2xl leading-none">
              <span className="font-bold">Collaborator: {collaboratorData.name}</span>
            </h2>
            <div className="flex flex-wrap gap-2.5 justify-between items-end mt-5 w-full text-sm tracking-wide leading-none max-md:max-w-full">
              <div className="flex overflow-hidden flex-wrap gap-5 items-center min-w-[240px]">
                <Avatar className="h-[100px] w-[100px]">
                  <AvatarImage src={collaboratorData.avatar}></AvatarImage>
                  <AvatarFallback>{collaboratorData.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-start self-stretch my-auto">
                  {collaboratorData.stats.map((stat, index) => (
                    <BulletItem key={index} {...stat}
                    />
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      );
}