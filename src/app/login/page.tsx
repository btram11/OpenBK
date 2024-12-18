"use client";
import React from "react";
import { ButtonForm } from "@/components/common/buttons/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/services/auth/auth";
import { getUserInfo } from "@/services/user";
import { useMutation } from "@tanstack/react-query";
<<<<<<< Updated upstream
import { AxiosError } from "axios";
=======
import InputField from "@/components/common/InputField";
>>>>>>> Stashed changes

export default function LoginPage() {
  const router = useRouter();

  const { mutate, error } = useMutation({
    mutationFn: (data: any) => login(data),
    onSuccess: () => {
      window.location.reload();
      router.push("/");
    },
    onError: (error: any) => alert(error.message || "Unknown error"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required"),
      })
    ),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

<<<<<<< Updated upstream
    const onSubmit = (data: { email: string; password: string }) => {
      mutation.mutate(data);
    };
=======
  const onSubmit = (data: any) => mutate(data);
>>>>>>> Stashed changes

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
            <InputField
              label="Email"
              id="email"
              register={register}
              error={errors.email}
              placeholder="Email"
            />
            <InputField
              label="Password"
              id="password"
              type="password"
              register={register}
              error={errors.password}
              placeholder="Password"
            />
          </div>

          {error && (
            <div className="px-5 py-3 text-red-500 bg-red-200 border-2 border-red-500 font-medium rounded-lg">
<<<<<<< Updated upstream
              <p>{mutation.error?.response?.data.ERROR}</p>
=======
              <p>{error?.message}</p>
>>>>>>> Stashed changes
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


