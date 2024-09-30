import React from 'react';
import coursesData from '../coursesData';

const FullStack = () => {
     const fullStackCourse = coursesData[0]; // Assuming the first course is Full Stack

     return (
          <div className='course-cards'>
               <div className="course-card">
                    <img src={fullStackCourse.image} alt={fullStackCourse.title} />
                    <p>{fullStackCourse.description}</p>
               </div>
          </div>
     );
};

export default FullStack;
