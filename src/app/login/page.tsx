"use client";
import React from "react";
import { ButtonForm } from "@/components/common/buttons/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/services/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function LoginPage() {
  const router = useRouter();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const mutation = useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      return login({
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: () => {
      router.push("/home");
    },
    onError: (error: any) => {
      alert(error.message || "Unknown error");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const inputStyle =
    "text-black text-base w-[30vw] px-5 p-3 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

    const onSubmit = (data: { email: string; password: string }) => {
      mutation.mutate(data);
    };

  return (
    <main className="flex bg-zinc-100 items-center justify-center h-screen w-full">
      <div className="border bg-white border-stone-400 min-w-16 min-h-16 w-fit h-fit px-12 py-7 rounded-2xl flex flex-col gap-14">
        <div className="text-black text-3xl font-semibold">
          Are you ready to join?
        </div>
        <form
          className="flex flex-col gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className={`${inputStyle} rounded-lg ${
                  errors.email
                    ? " border-2 border-red-500 focus:outline-red-500"
                    : ""
                }`}
                placeholder="Email"
              />
              <span className="text-red-500 text-sm absolute -bottom-5">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="pass" className="font-semibold text-lg">
                Password
              </label>
              <input
                {...register("password")}
                id="pass"
                type="password"
                className={`${inputStyle} ${
                  errors.password
                    ? " border-2 border-red-500 focus:outline-red-500"
                    : ""
                }`}
                placeholder="Password"
              />
              <span className="text-red-500 text-sm absolute -bottom-5">
                {errors.password?.message}
              </span>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 accent-dodger-blue-500 "
              />
              <label htmlFor="remember" className="text-sm gap-4 select-none">
                Remember me
              </label>
            </div>
          </div>

          {mutation.error && mutation.error instanceof AxiosError && (
            <div className="px-5 py-3 text-red-500 bg-red-200 border-2 border-red-500 font-medium rounded-lg">
              <p>{mutation.error?.response?.data.ERROR}</p>
            </div>
          )}

          <ButtonForm className="w-[15vw]">Log in</ButtonForm>

          <div className="self-center text-stone-500 select-none">
            Don't have an account?{" "}
            <a
              href="/register"
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
