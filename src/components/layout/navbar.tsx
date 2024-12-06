import * as React from "react";
import Search from "../../public/svg/search.svg"
import Cart from "../../public/svg/cart.svg"
import BkIcon from "../../public/images/BkIcon.png"
import Link from "next/link";
import SigninButton from "../common/buttons/SigninButton";
import SignupButton from "../common/buttons/SignupButton";

//TODO: FETCH CART
const CartCount: React.FC = () => {
  return (
    <div id="count" className="flex absolute bg-blue-500 text-white border-1 border-black rounded-lg px-1 w-25 
    items-center justify-center left-4 bottom-3">
      2
    </div>
  )
}

export const Navbar: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-10 items-center py-4 pl-16 w-full text-base leading-none bg-white text-black shadow-sm max-md:pl-5 max-md:max-w-full">
       <Link href="/home" className="flex gap-2.5 justify-center items-center self-stretch pl-5 my-auto text-2xl leading-none text-sky-600 h-[39px] w-[188px]">
        <img src={BkIcon.src} className=""></img>
        <span className="font-bold">OpenBK</span>
      </Link>

      <Link href="/course" className="self-stretch my-auto tracking-wide">Courses</Link>

      <form className="flex flex-wrap gap-10 justify-between items-center self-stretch px-4 py-2 my-auto tracking-wide whitespace-nowrap rounded-2xl bg-stone-100 min-w-[240px] text-black text-opacity-70 w-[607px] max-md:px-5 max-md:max-w-full">
        <label htmlFor="search" className="sr-only">Search courses</label>
        <div className="flex items-center w-full">
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="bg-transparent border-none outline-none flex-grow"
          />
          <Search/>
        </div>
      </form>

      <div className="flex gap-4 justify-between items-center self-stretch my-auto tracking-wide min-w-[240px] w-[325px]">
        <Link href="/collaborator/1/dashboard" className="self-stretch my-auto tracking-wide">
          <button className="self-stretch my-auto">Collaborators</button>
        </Link>
        <div className="relative">
            <Cart></Cart>
            <CartCount></CartCount>
        </div>

        <Link href="/user/dashboard" className="self-stretch my-auto tracking-wide">
            <button className="self-stretch my-auto">My dashboard</button>
        </Link>
        {/* <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[38px] w-[38px]" /> */}
        <SigninButton />
        <SignupButton />
      </div>
    </div>
  );
};