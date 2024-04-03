// ./pages/Blogpage.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from '../Components/Blog';
import FullBlog from '../Components/FullBlog';

const Blogpage = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Understanding Childhood Anxiety",
      author: "Dr. Emily Smith",
      date: "October 15, 2023",
      content: "Childhood anxiety is a common mental health issue that often goes unnoticed...",
    },
    {
      id: 2,
      title: "Promoting Resilience in Children",
      author: "Dr. John Doe",
      date: "September 28, 2023",
      content: "Resilience is a crucial skill that children need to navigate life's challenges...",
    },
    {
      id: 3,
      title: "The Importance of Play in Child Development",
      author: "Dr. Michael Johnson",
      date: "November 10, 2023",
      content: "Play is essential for the cognitive, social, and emotional development of children...",
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Blog blogs={blogs} />} />
      <Route path="/:id" element={<FullBlog blogs={blogs} />} />
    </Routes>
  );
}

export default Blogpage;
