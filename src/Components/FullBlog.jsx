import React from 'react';

const FullBlog = ({ blog }) => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-semibold mb-8">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-4">By {blog.author} | {blog.date}</p>
      <p className="text-base">{blog.content}</p>
    </div>
  );
}

export default FullBlog;
