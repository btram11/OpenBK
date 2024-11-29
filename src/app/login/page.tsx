"use client";

import React from "react";
import {ButtonForm} from "../components/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const inputStyle =
    "text-black text-base w-[30vw] px-5 p-3 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

  const [error, setError] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // Basic validation
    // if (!email || !password) {
    //   setError("Email and Password are required.");
    //   return;
    // }

    // setError(""); // Clear error

    // Simulate login API call
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        // Handle errors
      }
      console.log("Logging in with:", { email, password });
      // Perform login logic, e.g., send a request to an API
    } catch (error) {
      // setError("Invalid login credentials.");
    }
  };
  return (
    <main className="flex bg-zinc-100 items-center justify-center h-screen w-screen">
      <div className="border bg-white border-stone-400 min-w-16 min-h-16 w-fit h-fit px-12 py-7 rounded-2xl flex flex-col gap-14">
        <div className="text-black text-3xl font-semibold">
          Are you ready to join?
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`${inputStyle} rounded-lg`}
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="pass" className="font-semibold text-lg">
              Password
            </label>
            <input
              id="pass"
              type="password"
              className={inputStyle}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 accent-dodger-blue-500 "
            />
            <label htmlFor="remember" className="text-sm gap-4">
              Remember me
            </label>
          </div>
          {error && <div></div>}
          <ButtonForm className="w-[15vw]">Log in</ButtonForm>
          
          <div className="self-center text-stone-500">
            Don't have an account?{" "}
            <a
              href="/registration"
              className="cursor-pointer text-dodger-blue-600 duration-150 underline hover:text-saffron-400"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
