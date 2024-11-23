export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  

  
  