export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export interface CourseCardProps {
    imageUrl: string;
    category: string;
    rating: number;
    reviews: number;
    title: string;
    instructor: string;
    price: string;
  }
  

  
  