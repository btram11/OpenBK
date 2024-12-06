'use client';
import { ButtonForm } from "../../components/common/buttons/button"; 
import { signup } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const inputStyle =
    "text-black text-base  px-5 p-3 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { name, email, password, cpassword } = Object.fromEntries(
      formData.entries()
    ) as {
      name: string;
      email: string;
      password: string;
      cpassword: string;
    };

    if (password !== cpassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      const res = await signup(name, email, password);

      if ("status" in res && res.status === 200) {
        if (res.data && "accessToken" in res.data && res.data.accessToken) {
          localStorage.setItem("accessToken", res.data.accessToken);
        }
        router.push("/home");
      } 
    } catch (error) {
      alert("Unknown error");
    }
  };

  return (
    <div className="flex bg-gray-100 items-center justify-center h-screen w-screen">
      <div className="bg-white border border-stone-400 min-w-16 min-h-16 w-4/12 h-fit px-12 py-7 rounded-2xl flex flex-col gap-6">
        <div className="text-black text-3xl font-semibold">
          Create Your Account
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-lg">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`${inputStyle} w-full`}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`${inputStyle}  w-full`}
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass" className="font-semibold text-lg">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`${inputStyle} w-full`}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cpass" className="font-semibold text-lg">
              Confirm Password
            </label>
            <input
              id="cpassword"
              name="cpassword"
              type="password"
              className={`${inputStyle} w-full`}
              placeholder="Confirm Password"
              required
            />
          </div>
          <ButtonForm type="submit" className="w-[15vw]">Sign Up</ButtonForm>

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
