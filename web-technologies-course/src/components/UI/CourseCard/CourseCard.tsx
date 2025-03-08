import { Link } from "react-router-dom";

export interface courseCard {
  title: string;
  description: string;
  buttonLink?: string;
}


export const CourseCard = ({
  title,
  description,
  buttonLink,
}: courseCard) => {
  return (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
    <h3 className="font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {buttonLink ? 
      <Link to={buttonLink} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded inline-block mt-auto">
        Перейти до лекції
      </Link>
      :
      <span className="bg-gray-300 text-gray-600 px-4 py-2 rounded inline-block">
        Незабаром
      </span>
    }
  </div>
  );
}