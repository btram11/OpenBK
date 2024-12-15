export interface Course {
  courseID?: string;
  authorID: string;
  courseName: string;
  imageUrl: string;
  description: string | null;
  category: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    profileUrl: string;
  };
}
