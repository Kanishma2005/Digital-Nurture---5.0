import React from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Blogger Application</h1>
      <div className="components-container">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    </div>
  );
}

export default App;
