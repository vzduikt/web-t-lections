import React from "react"
import { CourseCardGrid } from "@components";
import { homePageData } from "@data";


const HomePage: React.FC = () => {
  return (
  <div className="text-center p-10">
    <h2 className="text-3xl font-bold mb-6">Курс WEB-технології та WEB-дизайн</h2>
    <p className="mb-4">Оберіть лекцію зі списку вище, щоб розпочати навчання.</p>
    <CourseCardGrid items={homePageData} />
  </div>
  );
}

export default HomePage;