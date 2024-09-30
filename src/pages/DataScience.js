import React from 'react';
import coursesData from '../coursesData';

const DataScience = () => {
     const dataScienceCourse = coursesData[1]; // Assuming the second course is Data Science

     return (
          <div className='course-cards'>
               <div className="course-card">
                    <img src={dataScienceCourse.image} alt={dataScienceCourse.title} />
                    <p>{dataScienceCourse.description}</p>
               </div>
          </div>
     );
};

export default DataScience;
