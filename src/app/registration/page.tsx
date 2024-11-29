import Button from "@/components/ui/button";

export default function SignupPage() {
  const inputStyle =
    "text-black text-base  px-5 p-3 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border border-stone-400 min-w-16 min-h-16 w-fit h-fit px-12 py-7 rounded-2xl flex flex-col gap-14">
        <div className="text-black text-3xl font-semibold">
          Create Your Account
        </div>
        <form className="flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="fname" className="font-semibold text-lg">
                First Name
              </label>
              <input
                id="fname"
                type="text"
                className={`${inputStyle} `}
                placeholder="First Name"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="lname" className="font-semibold text-lg">
                Last name
              </label>
              <input
                id="lname"
                type="text"
                className={`${inputStyle} `}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`${inputStyle}  w-full`}
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass" className="font-semibold text-lg">
              Password
            </label>
            <input
              id="pass"
              type="password"
              className={`${inputStyle} w-full`}
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cpass" className="font-semibold text-lg">
              Confirm Password
            </label>
            <input
              id="cpass"
              type="password"
              className={`${inputStyle} w-full`}
              placeholder="Confirm Password"
            />
          </div>

          <Button className="w-[15vw]">Sign Up</Button>

          <div className="self-center text-stone-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="cursor-pointer text-dodger-blue-600 duration-150 underline hover:text-saffron-400"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
