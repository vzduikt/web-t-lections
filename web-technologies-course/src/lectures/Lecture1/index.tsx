import React from 'react';
import Slide from '@/components/UI/Slide';
import useSlideNavigation from '@/hooks/useSlideNavigation';

// Імпорт слайдів
import WebsitesIntroSlide from './slides/WebsitesIntroSlide';
import HTMLIntroSlide from './slides/HTMLIntroSlide';
import HTMLStructureSlide from './slides/HTMLStructureSlide';
import HTMLHeadMetaSlide from './slides/HTMLHeadMetaSlide';
import HTMLAttributesSlide from './slides/HTMLAttributesSlide';
import HTMLTagsSlide from './slides/HTMLTagsSlide';
import HTMLSemanticSlide from './slides/HTMLSemanticSlide';
import HTMLTablesSlide from './slides/HTMLTablesSlide';
import HTMLFormsSlide from './slides/HTMLFormsSlide';
import InteractiveEditorSlide from './slides/InteractiveEditorSlide';

const Lecture1: React.FC = () => {
  const slides = [
    {
      title: "Як працюють веб-сайти",
      component: <WebsitesIntroSlide />
    },
    {
      title: "Вступ до HTML",
      component: <HTMLIntroSlide />
    },
    {
      title: "Структура HTML-документа",
      component: <HTMLStructureSlide />
    },
    {
      title: "Елемент HEAD та метадані",
      component: <HTMLHeadMetaSlide />
    },
    {
      title: "Атрибути HTML-тегів",
      component: <HTMLAttributesSlide />
    },
    {
      title: "Базові теги HTML",
      component: <HTMLTagsSlide />
    },
    {
      title: "Семантичні теги HTML5",
      component: <HTMLSemanticSlide />
    },
    {
      title: "Таблиці в HTML",
      component: <HTMLTablesSlide />
    },
    {
      title: "Форми в HTML",
      component: <HTMLFormsSlide />
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