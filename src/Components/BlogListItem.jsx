// ./Components/BlogListItem.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogListItem = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <img src={blog.authorPhoto} alt="User" className="w-8 h-8 rounded-full mr-2" />
        <div>
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-sm text-gray-600 mb-2">By {blog.author} | {blog.date}</p>
        </div>
      </div>
      <NavLink to={`/blogs/${blog.id}`} className="block text-blue-500 hover:underline">Read More</NavLink>
    </div>
  );
}

export default BlogListItem;
