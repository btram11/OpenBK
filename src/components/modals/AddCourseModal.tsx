"use client";
import { useDialog } from "@/hooks/useDialog";
import { createCourse } from "@/services/course";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

const AddCourseModal: React.FC<{
  onClose: any;
}> = ({ onClose }) => {
  const { mutate, error } = useMutation({
    mutationKey: ["AddCourse"],
    mutationFn: (course: any) => createCourse(course),
    onSuccess: (success) => {
      alert(success.message);
      onClose();
    },
  });
  const { dialogRef, handleOutsideClick } = useDialog(onClose);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imageUrl: "",
      courseName: "",
      description: "",
      category: "",
      price: 0,
    },
  });

  return (
    <dialog
      open
      ref={dialogRef}
      onClick={handleOutsideClick}
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800/50 backdrop:bg-gray-800/50 backdrop-blur-sm w-screen h-screen"
    >
      <div
        className="flex flex-col items-center gap-6 select-none h-[70vh] min-h-fit w-[35vw] bg-white rounded-2xl p-8 min-w-fit shadow-xl"
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        <h3 className="font-bold text-2xl">Add New Course</h3>
        <form
          onSubmit={handleSubmit((data) => mutate(data))}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="imageUrl" className="font-medium">
              Image URL:
            </label>
            <input
              type="text"
              id="imageUrl"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter image URL"
              {...register("imageUrl", { required: "Image URL is required." })}
            />
            {errors.imageUrl && (
              <span className="text-red-500 text-sm">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="courseName" className="font-medium">
              Course Name:
            </label>
            <input
              type="text"
              id="courseName"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter course name"
              {...register("courseName", {
                required: "Course name is required.",
              })}
            />
            {errors.courseName && (
              <span className="text-red-500 text-sm">
                {errors.courseName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-medium">
              Description:
            </label>
            <textarea
              id="description"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter course description"
              {...register("description")}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-medium">
              Category:
            </label>
            <input
              type="text"
              id="category"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter course category"
              {...register("category", { required: "Category is required." })}
            />
            {errors.category && (
              <span className="text-red-500 text-sm">
                {errors.category.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="font-medium">
              Price:
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter course price"
              {...register("price", {
                required: "Price is required.",
                valueAsNumber: true,
                min: { value: 0, message: "Price must be greater or equal 0." },
              })}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
          <div className="flex flex-row items-center justify-between mt-4">
            <button
              type="button"
              className="navigateBtn px-6 py-3 bg-stone-600 text-white rounded-xl font-semibold hover:bg-gradient-to-r hover:from-stone-500 hover:via-stone-400 hover:to-stone-500 duration-300 shadow-md transform hover:scale-105 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="navigateBtn px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 duration-300 shadow-md transform hover:scale-105 transition"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddCourseModal;
