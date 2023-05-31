import React from 'react';

const Course = ({ courseData }) => {
  return (
    <div className='text-white bg-[#262626] p-6 rounded-2xl'>
      <h1 className='text-3xl'>{courseData.title}</h1>
      <p>{courseData.description}</p>
      
      {/* Render the videos */}
      <h3>Videos</h3>
      <ul>
        {courseData.videos.map((video) => (
          <li key={video.id}>
            <h4>{video.title}</h4>
            <video src={video.url} controls />
          </li>
        ))}
      </ul>
      
      {/* Other course-specific content */}
    </div>
  );
};

export default Course;
