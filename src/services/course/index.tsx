import axios from 'axios';

const createCourse = async (courseName: string, description: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/course`, {
      courseName,
      description,
    });

    if (res.status === 201) {
      console.log("Course created successfully", res.data);
      return res.data;
    } else {
      console.error("Failed to create course", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Create course error", error);
    return { message: "Network error" };
  }
};

const getAllCourses = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/course`);

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Failed to fetch courses", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Get all courses error", error);
    return { message: "Network error" };
  }
};

const getCourseById = async (id: number) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/course/${id}`
    );

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Failed to fetch course by ID", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Get course by ID error", error);
    return { message: "Network error" };
  }
};

const updateCourse = async (
  id: number,
  courseName: string,
  description: string
) => {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/course/${id}`,
      {
        courseName,
        description,
      }
    );

    if (res.status === 200) {
      console.log("Course updated successfully", res.data);
      return res.data;
    } else {
      console.error("Failed to update course", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Update course error", error);
    return { message: "Network error" };
  }
};

const deleteCourse = async (id: number) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/course/${id}`
    );

    if (res.status === 200) {
      console.log("Course deleted successfully", res.data);
      return res.data;
    } else {
      console.error("Failed to delete course", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Delete course error", error);
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
