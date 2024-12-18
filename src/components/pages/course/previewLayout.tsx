import Link from "next/link";

export const Tab: React.FC<{
  label: string;
  isActive: boolean;
  ref: string;
}> = ({ label, isActive = false, ref }) =>
  isActive ? (
    <span
      tabIndex={0}
      className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-amber-300 font-bold`}
    >
      {label}
    </span>
  ) : (
    <Link
      tabIndex={0}
      href={ref}
      className={`self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap rounded-[50px] bg-zinc-200 hover:bg-zinc-300`}
    >
      {label}
    </Link>
  );
