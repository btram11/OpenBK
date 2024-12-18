export interface EnrolledCourseEntity {
  learnerID: string;
  courseID: string;
  enrollmentDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  courseInfo: {
    courseName: string;
    category: string;
    description: string | null;
    imageUrl: string | null;
    authorInfo: {
      name: string;
      imageUrl: string;
    }
  }
}

