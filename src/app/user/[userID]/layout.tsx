import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "My Profile" },
  { href: "/enrolled-courses", label: "Enrolled Courses" },
  { href: "/quiz-attempts", label: "My Quiz Attemps" },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LinkStyle =
    "px-4 py-2 w-full text-left hover:bg-dodger-blue-500 hover:text-white rounded-md bg-stone-200 duration-200";
  return (
    <div className="w-full py-4 flex flex-col items-center gap-8 overscroll-y-auto min-h-screen">
      <div className="dashboard-top w-[80vw] bg-pink-300 h-[15vw] rounded-2xl flex flex-col-reverse px-10 pb-8">
        <div className="flex flex-row gap-5">
          <img
            className="rounded-full bg-black w-28 aspect-square"
            src="./favicon.ico"
          />
          <div className="flex flex-col gap-1 self-center">
            <span className="font-semibold text-xl">Name & Lastname</span>
            <span> n Courses Enrolled</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-bottom flex flex-row w-[80vw] rounded-2xl h-fit relative">
        <div className="w-full h-full absolute left-0 top-0 border-[1.5px] border-[#E3E2E6] rounded-2xl -z-10 bg-[#FAF9FD]"></div>
        <nav className=" flex flex-col basis-1/5 p-8 gap-4 rounded-l-2xl border-[1.5px] border-[#E3E2E6] bg-white w-fit h-fit">
          <span className="text-black font-medium h-7 flex items-center">
            Welcome User
          </span>

          <div className="flex flex-col gap-1 items-center mb-3">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className={`${LinkStyle}`}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-black font-medium text">User</div>
          <Link href={"/settings"} className={`${LinkStyle}`}>
            Settings
          </Link>
        </nav>
        <div className="p-8 w-fit h-fit flex-1">{children}</div>
      </div>
    </div>
  );
}
