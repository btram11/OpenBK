"use-client";
import { ButtonProps } from "./types"

export const ButtonForm: React.FC<
  {
    children: React.ReactNode;
    shadow_left?: `left-[${number}px] group-hover:-translate-x-[${number}px]`;
    shadow_top?: `top-[${number}px] group-hover:-translate-y-[${number}px]`;
    align?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  shadow_left = "left-[6.5px] group-hover:-translate-x-[6.5px]",
  shadow_top = "top-[6px] group-hover:-translate-y-[6px]",
  align = "self-center",
  className = "",
  ...props
}) => {
  return (
    <button
      type="submit"
      className={`group relative ${align} w-fit flex`}
      {...props}
    >
      <div
        className={`flex items-center justify-center px-5 py-2 bg-saffron-400 font-semibold text-lg rounded-3xl z-20 border-2 border-black ${className}`}
      >
        {children}
      </div>
      <div
        className={`absolute border-2 border-black ${shadow_left} ${shadow_top} w-full h-full rounded-3xl z-10 bg-black/90 transition-transform duration-300 ease-in-out`}
      ></div>
    </button>
  );
};

export const ButtonClick: React.FC<
  {
    children: React.ReactNode;
    shadow_left?: `left-[${number}px] group-hover:-translate-x-[${number}px]`;
    shadow_top?: `top-[${number}px] group-hover:-translate-y-[${number}px]`;
    align?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  shadow_left = "left-[6.5px] group-hover:-translate-x-[6.5px]",
  shadow_top = "top-[6px] group-hover:-translate-y-[6px]",
  align = "self-center",
  className = "",
}) => {
  return (
    <button
      className={`group relative ${align} w-fit flex`}
    >
      <div
        className={`flex justify-center items-center gap-2 p-2 bg-saffron-400 font-semibold text-lg rounded-3xl border-2 z-20 border-black ${className}`}
      >
        {children}
      </div>
      <div
        className={`absolute border-2 border-black ${shadow_left} ${shadow_top} w-full h-full rounded-3xl z-10 bg-black/90 transition-transform duration-300 ease-in-out`}
      ></div>
    </button>
  );
};




export const ButtonCourse: React.FC<ButtonProps> = ({children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex justify-center items-center overflow-hidden gap-1 self-stretch px-1.5 py-1.5 rounded-[50px] text-sm 
        font-semibold bg-amber-400 border border-black border-solid
        shadow-[3px_3px_0px_2px_rgba(0,0,0,1)] text-black`}
      type="button"
    >
      {children}
    </button>
  );
};
