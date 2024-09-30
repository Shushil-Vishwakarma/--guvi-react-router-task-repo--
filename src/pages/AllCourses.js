import React from 'react';
import coursesData from '../coursesData';
import './AllCourses.css'; // Optional for custom styles

const AllCourses = () => {
     return (
          <div>
               <div className="course-cards">
                    {coursesData.map(course => (
                         <div key={course.id} className="course-card">
                              <img src={course.image} alt={course.title} />
                              <h2>{course.title}</h2>
                              <p>{course.description}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default AllCourses;
