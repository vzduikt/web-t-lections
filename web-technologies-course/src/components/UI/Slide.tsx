import React from 'react';

interface SlideProps {
  title: string;
  currentIndex: number;
  totalSlides: number;
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  onGoToSlide: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({
  title,
  currentIndex,
  totalSlides,
  children,
  onNext,
  onPrev,
  onGoToSlide
}) => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="text-sm">Слайд {currentIndex + 1} з {totalSlides}</div>
        </div>
        
        <div className="p-6 min-h-96">
          {children}
        </div>
        
        <div className="bg-gray-100 p-4 flex justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            Назад
          </button>
          <div className="flex space-x-1">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => onGoToSlide(index)}
              />
            ))}
          </div>
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
          >
            Далі
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;