import React from 'react';

function BlogDetails() {
  const blog = {
    title: "React Learning Journey",
    author: "Jordan Walke",
    description: "A comprehensive guide to understanding React components and state management."
  };

  return (
    <div className="details-card">
      <h2>Blog Details</h2>
      {blog ? (
        <div className="item-info">
          <p><strong>Topic:</strong> {blog.title}</p>
          <p><strong>Author:</strong> {blog.author}</p>
          <p><strong>Description:</strong> {blog.description}</p>
        </div>
      ) : (
        <p>No blog details available.</p>
      )}
    </div>
  );
}

export default BlogDetails;
