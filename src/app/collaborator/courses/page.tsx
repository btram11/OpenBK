"use client";
import { useModal } from "@/context/ModalContext";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { TbEdit, TbTrash } from "react-icons/tb";

const CoursesCollaborator: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["collaboratorCourses"],
    queryFn: () => {
      return { Courses: [{}, {}] };
    },
  });
  const { openModal } = useModal();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading courses</div>;
  }

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-9">
      <div className="w-full flex flex-row justify-between">
        <h3 className="font-semibold text-lg">Course</h3>
        <button
          className="px-4 py-2 rounded-xl bg-gray-500/20 text-gray-500 hover:bg-dodger-blue-700 hover:text-white duration-200"
          onClick={() => openModal("AddCourseModal")}
        >
          New course
        </button>
      </div>
      <table className="table w-full table-auto rounded-md overflow-clip">
        <thead className="table-header-group bg-dodger-blue-300/40">
          <tr>
            <th className="table-cell text-left px-3 py-2">Course</th>
            <th className="table-cell text-left px-3 py-2">Price</th>
            <th className="table-cell text-left px-3 py-2">Status</th>
            <th className="table-cell text-left px-3 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="table-cell text-left px-3 py-4 font-semibold">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="table-cell text-left px-3 py-2">4</td>
            <td className="table-cell px-3 py-2">
              <span className="text-center p-2 text-xs font-normal bg-green-400/10 text-green-500 rounded-md">
                Pass
              </span>
            </td>
            <td className="table-cell px-3 py-2 w-1/6 min-w-fit justify-end items-center">
              <div className="w-full flex flex-row gap-4 justify-end">
                <button className="text-dodger-blue-700 bg-dodger-blue-300/20 px-4 py-2 rounded-2xl">
                  <TbEdit />
                </button>
                <button className="text-red-500 bg-red-300/20 px-4 py-2 rounded-2xl">
                  <TbTrash />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoursesCollaborator;
