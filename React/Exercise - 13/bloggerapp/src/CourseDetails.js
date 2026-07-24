import React from 'react';

function CourseDetails() {
  const course = {
    name: "React Certification Course",
    date: "2026-07-24"
  };

  return (
    <div className="details-card">
      <h2>Course Details</h2>
      {course ? (
        <div className="item-info">
          <p><strong>Course Name:</strong> {course.name}</p>
          <p><strong>Date:</strong> {course.date}</p>
        </div>
      ) : (
        <p>No course details available.</p>
      )}
    </div>
  );
}

export default CourseDetails;
