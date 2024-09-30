
const CourseCard = ({ title, image, description }) => {
     return (
          <div className="course-card">
               <img src={image} alt={title} />
               <h2>{title}</h2>
               <p>{description}</p>
          </div>
     );
};

export default CourseCard;
