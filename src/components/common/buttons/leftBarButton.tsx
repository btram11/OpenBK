"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const LeftBarButton: React.FC<{
  link: { href: string; label: string; matchParent?: boolean };
  index: number;
}> = ({ link, index }) => {
  const pathname = usePathname();
  const linkClassName =
    "px-4 py-2 w-full text-left hover:bg-dodger-blue-500 hover:text-white rounded-md duration-200 font-medium";
  const activeLinkClassName = "bg-dodger-blue-500 text-white";

  const IsActive = link.matchParent
    ? pathname.startsWith(link.href)
    : pathname === link.href;

  return (
    <Link
      key={index}
      href={link.href}
      className={`${linkClassName} ${
        IsActive ? activeLinkClassName : "bg-stone-200"
      }`}
    >
      {link.label}
    </Link>
  );
};
