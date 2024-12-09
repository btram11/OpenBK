"use client";
import { ButtonForm } from "@/components/common/buttons/button";
import { useRouter } from "next/navigation";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUp } from "@/services/auth/auth";
import { AxiosError } from "axios";

export default function SignupPage() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (data: any) => {
      console.log(data);
      return signUp({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        password: data.password,
      });
    },
    onSuccess: () => {
      router.push("/home");
    },
  });
  const formSchema = yup.object().shape({
    lastName: yup.string().required("Last name is required"),
    firstName: yup.string().required("First name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Confirm Password must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const inputStyle =
    "text-black text-base  px-5 p-3 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

  const onSubmit = (data: { firstName: string; lastName: string; email: string; password: string }) => {
    mutation.mutate(data);
  }

  return (
    <div className="flex bg-gray-100 items-center justify-center h-screen w-screen min-h-fit py-4">
      <div className="bg-white border border-stone-400 min-w-16 min-h-16 w-fit h-fit px-12 py-7 rounded-2xl flex flex-col gap-10">
        <div className="text-black text-3xl font-semibold">
          Create Your Account
        </div>
        <form
          className="flex flex-col gap-9"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-8">
              <div className="flex-1 flex flex-col gap-2 relative">
                <label htmlFor="fname" className="font-semibold text-lg">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  id="fname"
                  type="text"
                  className={`${inputStyle} ${
                    errors.firstName
                      ? " border-2 border-red-500 focus:outline-red-500"
                      : ""
                  }`}
                  placeholder="First Name"
                />
                <span className="text-red-500 text-sm absolute -bottom-5">
                  {errors.firstName?.message}
                </span>
              </div>
              <div className="flex-1 flex flex-col gap-2 relative">
                <label htmlFor="lname" className="font-semibold text-lg">
                  Last name
                </label>
                <input
                  {...register("lastName")}
                  id="lname"
                  type="text"
                  className={`${inputStyle} ${
                    errors.lastName
                      ? " border-2 border-red-500 focus:outline-red-500"
                      : ""
                  }`}
                  placeholder="Last name"
                />
                <span className="text-red-500 text-sm absolute -bottom-5">
                  {errors.lastName?.message}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="email" className="font-semibold text-lg">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className={`${inputStyle} w-full  ${
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
                className={`${inputStyle} w-full ${
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
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="cpass" className="font-semibold text-lg">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                id="cpass"
                type="password"
                className={`${inputStyle} w-full ${
                  errors.confirmPassword
                    ? " border-2 border-red-500 focus:outline-red-500"
                    : ""
                }`}
                placeholder="Confirm Password"
              />
              <span className="text-red-500 text-sm absolute -bottom-5">
                {errors.confirmPassword?.message}
              </span>
            </div>
          </div>

          {mutation.error && mutation.error instanceof AxiosError && (
            <div className="px-5 py-3 text-red-500 bg-red-200 border-2 border-red-500 font-medium rounded-lg">
              <p>{mutation.error.response?.data.ERROR}</p>
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
