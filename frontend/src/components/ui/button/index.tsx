"use-client";

const Button: React.FC<
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
  const align1 = `${align}`;
  return (
    <button
      type="submit"
      className={`group relative ${align} w-fit flex`}
      {...props}
    >
      <div
        className={`px-5 py-2 bg-saffron-400 font-semibold text-lg rounded-3xl border-2 border-black ${className}`}
      >
        {children}
      </div>
      <div
        className={`absolute border-2 border-black ${shadow_left} ${shadow_top} w-full h-full rounded-3xl -z-10 bg-black/90 transition-transform duration-300 ease-in-out`}
      ></div>
    </button>
  );
};

export default Button;
