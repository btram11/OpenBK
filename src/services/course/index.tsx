import { apiClient } from "@/services/apiClient";

const url = `${process.env.NEXT_PUBLIC_API_URL}/course/public`;
const createCourse = async (courseName: string, description: string) => {
  try {
    const res = await apiClient.post(`${url}`, {
      courseName,
      description,
    });

    if (res.status === 201) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    return { message: "Network error" };
  }
};

const getAllCourses = async () => {
  try {
    const res = await apiClient.get(`${url}`);

    if (res.status === 200) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    return { message: "Network error" };
  }
};

const getCourseById = async (id: number) => {
  try {
    const res = await apiClient.get(
      `${url}/${id}`
    );

    if (res.status === 200) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    return { message: "Network error" };
  }
};

const updateCourse = async (
  id: number,
  courseName: string,
  description: string
) => {
  try {
    const res = await apiClient.put(
      `${url}/${id}`,
      {
        courseName,
        description,
      }
    );

    if (res.status === 200) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    return { message: "Network error" };
  }
};

const deleteCourse = async (id: number) => {
  try {
    const res = await apiClient.delete(
      `${url}/${id}`
    );

    if (res.status === 200) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    return { message: "Network error" };
  }
};

export {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
