"use client";
import * as React from "react";
import Search from "@/public/svg/search.svg";
import Cart from "@/public/svg/cart.svg";
import BkIcon from "@/public/images/BkIcon.png";
import Link from "next/link";
import SigninButton from "../common/buttons/SigninButton";
import SignupButton from "../common/buttons/SignupButton";
import { roleString } from "@/lib/roleUtils";
import { useUser } from "@/hooks/useUser";

const CartCount: React.FC = () => {
  return (
    <div
      id="count"
      className="flex absolute bg-blue-500 text-white border-1 border-black rounded-lg px-1 w-25
    items-center justify-center left-4 bottom-3"
    >
      2
    </div>
  );
};

export const Navbar: React.FC = () => {
  const { data: user } = useUser();

  return (
    <div className="flex overflow-hidden flex-wrap gap-10 items-center py-4 pl-16 w-full text-base leading-none bg-white text-black shadow-sm max-md:pl-5 max-md:max-w-full">
      <Link
        href="/"
        className="flex gap-2.5 justify-center items-center self-stretch pl-5 my-auto text-2xl leading-none text-sky-600 h-[39px] w-[188px]"
      >
        <img src={BkIcon.src} className=""></img>
        <span className="font-bold">OpenBK</span>
      </Link>

      <Link href="/course" className="self-stretch my-auto tracking-wide">
        Courses
      </Link>

      <form className="flex flex-wrap gap-10 justify-between items-center self-stretch px-4 py-2 my-auto tracking-wide whitespace-nowrap rounded-2xl bg-stone-100 min-w-[240px] text-black text-opacity-70 w-[607px] max-md:px-5 max-md:max-w-full">
        <label htmlFor="search" className="sr-only">
          Search courses
        </label>
        <div className="flex items-center w-full">
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="bg-transparent border-none outline-none flex-grow"
          />
          <Search />
        </div>
      </form>

      <div className="flex gap-4 justify-between items-center self-stretch my-auto tracking-wide min-w-[240px] w-[325px]">
        <div className="relative">
          <Cart />
          <CartCount />
        </div>

        {user ? (
          <Link
            href={`/${roleString(user?.role)?.toLowerCase()}/dashboard`}
            className="self-stretch my-auto tracking-wide"
          >
            <img
              className="rounded-full bg-black w-10 aspect-square object-cover border-[6px] border-white"
              src={user?.imageUrl}
            />
            <button className="self-stretch my-auto">{user?.name ?? "Your name"}</button>
          </Link>
        ) : (
          <>
            <SigninButton />
            <SignupButton />
          </>
        )}
      </div>
    </div>
  );
};
