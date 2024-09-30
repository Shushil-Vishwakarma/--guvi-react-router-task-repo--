import React from 'react';
import coursesData from '../coursesData'; // Ensure the path is correct
import CourseCard from './CourseCard'; // Importing the CourseCard component

const Career = () => {
     const careerCourse = coursesData[3]; // Assuming the fourth course is Career Development

     return (
          <div className='course-cards'>
               <CourseCard
                    title={careerCourse.title}
                    image={careerCourse.image}
                    description={careerCourse.description}
               />
          </div>
     );
};

export default Career;
