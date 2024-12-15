"use client";

import { ButtonForm } from "@/components/common/buttons/button";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUp } from "@/services/auth/auth";
import { getUserInfo } from "@/services/user";
import { registrationSchema } from "@/lib/validation/registrationSchema";
import InputField from "@/components/common/InputField";

export default function SignupPage() {
  const router = useRouter();
  const { mutate, error } = useMutation({
    mutationFn: (data: any) => signUp({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
      }),
    onSuccess: () => router.push("/"),
    onError: (error: any) => alert(error.message || "Unknown error"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  return (
    <div className="flex bg-gray-100 items-center justify-center h-screen w-screen min-h-fit py-4">
      <div className="bg-white border border-stone-400 min-w-16 min-h-16 w-fit h-fit px-12 py-7 rounded-2xl flex flex-col gap-10">
        <h2 className="text-black text-3xl font-semibold">
          Create Your Account
        </h2>
        <form
          className="flex flex-col gap-9"
          onSubmit={handleSubmit((data) => mutate(data))}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-8">
              <InputField
                label="First Name"
                id="firstName"
                register={register}
                error={errors.firstName}
                placeholder="First Name"
              />
                <InputField
                  label="Last Name"
                  id="lastName"
                  register={register}
                  error={errors.lastName}
                  placeholder="Last Name"
                />
              
            </div>
            <InputField
              label="Email"
              id="email"
              type="email"
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
            <InputField
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword}
              placeholder="Confirm Password"
            />
          </div>

          {error && (
            <div className="px-5 py-3 text-red-500 bg-red-200 border-2 border-red-500 font-medium rounded-lg">
              <p>{error?.message}</p>
            </div>
          )}

          <ButtonForm className="w-[15vw]">Sign Up</ButtonForm>

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
