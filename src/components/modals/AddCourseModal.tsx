"use client";
import { useDialog } from "@/hooks/useDialog";
import { createCourse } from "@/services/course/courseCollab";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../common/InputField";
import { Input } from "@/components/ui/input";
import { courseSchema } from "@/lib/validation/courseSchema";
import { useState } from "react";

const formFields = [
  // {
  //   label: "Author ID",
  //   type: "hidden",
  //   id: "authorID",
  //   placeholder: "",
  //   disabled: false,
  // },
  {
    label: "Course Name",
    type: "text",
    id: "courseName",
    placeholder: "Course Name",
    disabled: false,
    required: true,
  },
  {
    label: "Description",
    type: "text",
    id: "description",
    placeholder: "Description",
    disabled: false,
    required: true,
  },
  {
    label: "Category",
    type: "text",
    id: "category",
    placeholder: "Category",
    disabled: false,
    required: true,
  },
  {
    label: "Price",
    type: "number",
    id: "price",
    placeholder: "Price",
    disabled: false,
    required: true,
  },
];

const defaultValues = {
  courseName: "",
  description: "",
  category: "",
  price: 0,
  image: File,
};

const AddCourseModal: React.FC<{
  onClose: any;
}> = ({ onClose }) => {
  const { mutate, error } = useMutation({
    mutationKey: ["AddCourse"],
    mutationFn: (course: any) =>
      createCourse({ ...course, authorID: sessionStorage.getItem("userID") }),
    onSuccess: (success) => {
      alert(success?.message);
      onClose();
      window.location.reload();
    },
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const { dialogRef, handleOutsideClick } = useDialog(onClose);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(courseSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      id="dialog"
      ref={dialogRef}
      onClick={handleOutsideClick}
      className="fixed inset-0 z-10 bg-gray-800/50 backdrop:bg-gray-800/50 backdrop-blur-sm w-screen h-full overscroll-y-contain overscroll-contain overflow-y-scroll"
    >
      <div
        className="flex flex-col items-center gap-6 select-none h-fit w-[35vw] bg-white rounded-2xl p-8 min-w-fit shadow-xl my-20 m-auto"
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        <h3 className="font-bold text-2xl">Add New Course</h3>
        <form
          onSubmit={handleSubmit((data) => mutate(data))}
          className="flex flex-col gap-6 w-full h-fit"
        >
          {formFields.map(
            ({ label, id, placeholder, disabled, type }, index) => (
              <label key={index} className="block">
                <InputField
                  {...register(id as keyof typeof defaultValues)}
                  label={label}
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  error={errors[id as keyof typeof errors]}
                  disabled={disabled}
                  className="w-full"
                />
              </label>
            )
          )}
          <label className="block">
            <span className="text-gray-700">Course Image</span>
            <Input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Image preview"
                  className="w-32 h-32 object-cover"
                />
              </div>
            )}
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
