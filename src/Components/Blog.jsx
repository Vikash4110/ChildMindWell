// ./Components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Sample user photo
import UserPhoto from '../assets/user_photo.jpg'; // Import your user photo here

const Blog = ({ blogs }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-center bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg mt-[6vh] font-mono">
      <h1 className="text-4xl font-semibold mb-8 font-serif">Child Mind Well Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <img src={UserPhoto} alt="User" className="w-8 h-8 rounded-full mr-2" /> {/* Display user photo */}
              <div>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-2">By {blog.author} | {blog.date}</p>
              </div>
            </div>
            <p className="text-base">{blog.content}</p>
            <Link to={`/blogs/${blog.id}`} className="block mt-4 text-blue-500 hover:underline">Read More</Link> {/* Link to full blog page */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
