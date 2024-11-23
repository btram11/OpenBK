import * as React from "react";
import { CourseCardProps } from "./types";
import Star from "./svg/star.svg"
import { Button } from "./button";
import ArrowRight from "./svg/arrowRight.svg"

export const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  category,
  rating,
  reviews,
  title,
  instructor,
  price
}) => {
  return (
    <article className="flex overflow-hidden flex-col self-stretch px-5 pt-6 pb-8 my-auto rounded-2xl border border-solid border-zinc-600 min-w-[240px] w-[310px]">
      <img
        loading="lazy"
        src={imageUrl}
        alt={title}
        className="object-contain w-full aspect-[1.42]"
      />
      <div className="flex flex-col self-center mt-5 w-full max-w-[270px]">
        <div className="flex overflow-hidden gap-10 justify-between items-start w-full text-center whitespace-nowrap">
          <div className="overflow-hidden gap-2 self-stretch px-3.5 py-2 text-sm text-black bg-zinc-200 rounded-[50px]">
            {category}
          </div>
          <div className="flex overflow-hidden gap-2.5 justify-center items-center py-2 rounded-[50px] text-zinc-600">
            <div id="star" className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <Star/>
              <div className="self-stretch my-auto text-base">{rating}</div>
              <div className="self-stretch my-auto text-sm">({reviews})</div>
            </div>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-wider text-black">
          {title}
        </h3>
        <div className="flex gap-1 items-center mt-4 w-full text-base text-black whitespace-nowrap">
          <div className="flex gap-1.5 items-center self-stretch my-auto">
            <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[27px] w-[27px]" />
            <div className="self-stretch my-auto">{instructor}</div>
          </div>
        </div>

        <div className="flex gap-9 justify-between items-center pt-2 mt-4 w-full">
          <div className="flex flex-col self-stretch my-auto w-auto">
            {/* <button className="flex overflow-hidden z-10 gap-1 justify-center items-center px-5 py-2.5 -mr-1 text-sm font-semibold text-black bg-amber-400 border border-black border-solid rounded-[50px]">
              <span className="self-stretch my-auto">Enroll Now</span>
              <img
                loading="lazy"
                src=""
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[1.17]"
              />
            </button> */}
            <Button>
            Enroll now<ArrowRight/>
            </Button>
          </div>
          <div className="self-stretch my-auto text-2xl font-bold text-sky-600">
            {price}
          </div>
        </div>
      </div>
    </article>
  );
};