import React from 'react';
import coursesData from '../coursesData'; // Importing the courses data
import CourseCard from './CourseCard'; // Importing the CourseCard component

const CyberSecurity = () => {
     const cyberSecurityCourse = coursesData[2]; // Assuming the third course is Cyber Security

     return (
          <div className='course-cards'>
               <CourseCard
                    title={cyberSecurityCourse.title}
                    image={cyberSecurityCourse.image}
                    description={cyberSecurityCourse.description}
               />
          </div>
     );
};

export default CyberSecurity;
