import { ButtonForm } from "@/components/common/buttons/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserInfo, updateProfile } from "@/services/user";
import { changeProfileSchema } from "@/lib/validation/settingsSchema";
import { AxiosError } from "axios";

const inputStyle =
  "text-black text-base w-full px-5 py-2 rounded-lg border dark:border-stone-400 caret-dodger-blue-500 focus:outline-dodger-blue-500";

export const ProfileFrom: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["getProfile"],
    queryFn: getUserInfo,
  });
  const mutation = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: (data: any) => {
      return updateProfile(data);
    },
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { dirtyFields, errors },
  } = useForm({
    defaultValues: { ...data, firstName: "dsffsdf" },
    resolver: yupResolver(changeProfileSchema),
    mode: "all",
    reValidateMode: "onBlur",
  });
  console.log(
    Object.keys(dirtyFields).length > 0,
    "isDirty",
    data,
    Object.keys(errors).length
  );
  return (
    <form
      className={`grid grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-6`}
      onSubmit={handleSubmit((dataForm) => mutation.mutate(dataForm))}
    >
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="fname" className="font-semibold text-base">
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
      <div className="flex flex-col gap-2">
        <label htmlFor="lname" className="font-semibold text-base">
          Last Name
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
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold text-base">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="text"
          className={`${inputStyle} ${
            errors.email ? " border-2 border-red-500 focus:outline-red-500" : ""
          }`}
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-semibold text-base">
          Phone Number
        </label>
        <input
          {...register("phoneNumber")}
          id="phone"
          type="text"
          pattern="^(0|\+84)(3[2-9]|5[6|8|9]|7[0-9]|8[1-9]|9[0-9])\d{7}$"
          className={`${inputStyle} appearance-none ${
            errors.phoneNumber
              ? " border-2 border-red-500 focus:outline-red-500"
              : ""
          }`}
          placeholder="Phone Number"
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <label htmlFor="bio" className="font-semibold text-base">
          Biography
        </label>
        <textarea
          {...register("biography")}
          id="bio"
          className={`${inputStyle} min-h-20`}
          minLength={35}
        />
      </div>
      {mutation.error && mutation.error instanceof AxiosError && (
        <div className="px-5 py-3 text-red-500 bg-red-200 border-2 border-red-500 font-medium rounded-lg">
          <p>
            {mutation.error?.response?.data.ERROR ||
              mutation.error?.response?.data.message}
          </p>
        </div>
      )}
      <ButtonForm
        align="self-left mt-8 col-start-1"
        disabled={
          !(Object.keys(dirtyFields).length > 0) ||
          Object.keys(errors).length > 0
        }
      >
        Update Info
      </ButtonForm>
    </form>
  );
};
