import { courseCard, CourseCard } from "@/components";

interface Props {
  items: courseCard[],
}

export const CourseCardGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {items.map(item => (
        <CourseCard
          title={item.title}
          description={item.description}
          buttonLink={item.buttonLink}
        />
      ))}
    </div>
  );
}