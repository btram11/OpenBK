export const stats = [
  { count: 10, label: 'Enrolled Courses'},
  { count: 3, label: 'Active Courses'},
  { count: 7, label: 'Completed Courses'}
];


interface CommentProps {
  username: string,
  avatar: string,
  timestamp: string,
  content: string,
}

export const comments: CommentProps[] = [
    {
      username: 'User A',
      avatar: "",
      timestamp: "2 days ago",
      content: "I love the tips you've shared about leveraging Facebook for digital marketing! However, I'm struggling to see results. Any advice on how to improve engagement with my audience?",
    },
    {
      username: 'User B',
      avatar: "",
      timestamp: "3 days ago",
      content: "I've been trying to improve my Facebook marketing strategy, but I'm not sure where to start. Any tips?"
    },
    {
      username: 'User C',
      avatar: "",
      timestamp: "10 days ago",
      content: "I really enjoyed your post! "
    }
];
export const collaboratorDatas = {
  name: "Collaborator A",
  avatar: "",
  stats: [
    {
      type: "video",
      text: "500 Students"
    },
    {
      type: "video",
      text: "3 Courses"
    },
    {
      type: "video",
      text: "200 Reviews"
    },
    {
      type: "video",
      text: "4.6 Overall Ratings"
    }
  ]
};

export const courseNav = [
  {
    type: "unit",
    text: "Unit 1",
  },
  {
    type: "unit",
    text: "Unit 2",
  },
  {
    type: "test",
    text: "Test 1",
  },
  {
    type: "test",
    text: "Test 2",
  },    
]

export const objectiveDatas = {
  objectives: [
    { text: "Increase brand awareness through social media campaigns", type: "objective" },
    { text: "Generate leads through targeted advertising", type: "objective" },
    { text: "Improve customer engagement with content marketing", type: "objective" },
    { text: "Enhance website traffic through SEO strategies", type: "objective" }
  ],
  description: "This digital marketing plan aims to leverage various online channels to boost brand visibility, attract potential customers, and engage with the audience effectively. By implementing targeted campaigns and optimizing content, we strive to achieve measurable growth in key performance metrics."
}
export const courses = [
  {
      id: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.5,
      reviews: 123456,
      title: "Learning Digital Marketing on Facebook",
      instructor: "Collaborator A",
      price: "200.000đ"
  },
  {
      id: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Design",
      rating: 4.7,
      reviews: 98765,
      title: "Mastering Photoshop",
      instructor: "John Doe",
      price: "300.000đ"
  },
  {
      id: 3,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Business",
      rating: 4.8,
      reviews: 54321,
      title: "Entrepreneurship 101",
      instructor: "Jane Smith",
      price: "250.000đ"
  },
  {
      id: 4,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Marketing",
      rating: 4.6,
      reviews: 67890,
      title: "SEO Basics",
      instructor: "Alice Johnson",
      price: "150.000đ"
  },
  {
      id: 5,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.9,
      reviews: 112233,
      title: "Advanced JavaScript",
      instructor: "Bob Brown",
      price: "400.000đ"
  },
  {
      id: 6,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.3,
      reviews: 445566,
      title: "React for Beginners",
      instructor: "Charlie Davis",
      price: "350.000đ"
  },
  {
      id: 7,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.2,
      reviews: 778899,
      title: "Python Programming",
      instructor: "David Evans",
      price: "500.000đ"
  },
  {
      id: 8,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.1,
      reviews: 334455,
      title: "Machine Learning A-Z",
      instructor: "Eve Foster",
      price: "600.000đ"
  },
  {
      id: 9,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.0,
      reviews: 556677,
      title: "Data Science with R",
      instructor: "Frank Green",
      price: "450.000đ"
  },
  {
      id: 10,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/4d2e3c9ca02843ada293db57d2cfd6d0/03807c569bf6de01d291f892863aa137360b0c91fee9d286d0aa8a6feb2e0250?apiKey=4d2e3c9ca02843ada293db57d2cfd6d0&",
      category: "Development",
      rating: 4.4,
      reviews: 998877,
      title: "Full-Stack Web Development",
      instructor: "Grace Hall",
      price: "550.000đ"
  }
];  

  export const courseDatas = {
    students: 123456,
    rating: 4.5,
    reviews: 123456,
    lastUpdated: "23 Dec",
    language: "English",
  };
  export const courseFeatures = [
    { type: "test", text: "2 practice tests" },
    { type: "video", text: "2 units" },
    { type: "infinity", text: "Full lifetime access" },
    { type: "certificate", text: "Certificate of completion" },
  ];
