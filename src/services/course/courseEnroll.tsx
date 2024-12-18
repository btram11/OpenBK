import { apiClientWithAuth } from "@/services/apiClient";

const url = `${process.env.NEXT_PUBLIC_API_URL}/course/enroll`;

const enrollCourse = async (learnerID: string, courseID: string) => {
  try {
    const res = await apiClientWithAuth.post(`${url}`, {
      learnerID,
      courseID,
    });

    if (res.status === 201) {
      console.log("Course enrolled successfully", res.data);
      return res.data;
    } else {
      console.error("Failed to enroll course", res.data);
      return res.data;
    }
  } catch (error) {
    throw error; 
  }
};

const getAllEnrolledCourses = async (learnerID: string) => {
  try {
    const res = await apiClientWithAuth.get(`${url}/${learnerID}`);

    if (res.status === 200) {
      return res.data;
    } else {
      return res.data;
    }
  } catch (error) {
    throw error; 
  }
};

const getEnrolledCourseById = async (id: number) => {
  try {
    const res = await apiClientWithAuth.get(
      `${url}/${id}`
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

// const updateEnrolledCourse = async (
//   courseName: string,
//   description: string
// ) => {
//   try {
//     const res = await apiClientWithAuth.put(
//       `${url}/${id}`,
//       {
//         courseName,
//         description,
//       }
//     );

//     if (res.status === 200) {
//       console.log("Course updated successfully", res.data);
//       return res.data;
//     } else {
//       console.error("Failed to update course", res.data);
//       return res.data;
//     }
//   } catch (error) {
//     console.error("Update course error", error);
//     return { message: "Network error" };
//   }
// };

const deleteEnrolledCourse = async (learnerID: string, courseID: string) => {
  try {
    const res = await apiClientWithAuth.delete(
      `${url}/${learnerID}/${courseID}`
    );

    if (res.status === 200) {
      console.log("Enrolled Course deleted successfully", res.data);
      return res.data;
    } else {
      console.error("Failed to delete enrolled course", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("Delete course error", error);
    return { message: "Network error" };
  }
};

export {
  enrollCourse,
  getAllEnrolledCourses,
  getEnrolledCourseById,
  // updateEnrolledCourse,
  deleteEnrolledCourse
};
