import React from 'react';
import Slide from '@/components/UI/Slide';
import useSlideNavigation from '@/hooks/useSlideNavigation';

// Імпорт слайдів
import WebsitesIntroSlide from './slides/WebsitesIntroSlide';
import HTMLIntroSlide from './slides/HTMLIntroSlide';
import HTMLStructureSlide from './slides/HTMLStructureSlide';
import HTMLTagsSlide from './slides/HTMLTagsSlide';
import InteractiveEditorSlide from './slides/InteractiveEditorSlide';

const Lecture1: React.FC = () => {
  const slides = [
    {
      title: "Як працюють вебсайти та Інтернет",
      component: <WebsitesIntroSlide />
    },
    {
      title: "Створення веб-сторінки з використанням базових тегів HTML",
      component: <HTMLIntroSlide />
    },
    {
      title: "Структура HTML-документа",
      component: <HTMLStructureSlide />
    },
    {
      title: "Базові теги HTML",
      component: <HTMLTagsSlide />
    },
    {
      title: "Інтерактивний редактор",
      component: <InteractiveEditorSlide />
    }
  ];

  const { currentSlide, nextSlide, prevSlide, goToSlide } = useSlideNavigation(slides.length);

  return (
    <Slide
      title={slides[currentSlide].title}
      currentIndex={currentSlide}
      totalSlides={slides.length}
      onNext={nextSlide}
      onPrev={prevSlide}
      onGoToSlide={goToSlide}
    >
      {slides[currentSlide].component}
    </Slide>
  );
};

export default Lecture1;