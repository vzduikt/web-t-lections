import React from 'react';
import Slide from '@/components/UI/Slide';
import useSlideNavigation from '@/hooks/useSlideNavigation';

// Імпорт слайдів
import IntroSlide from './slides/IntroSlide';
import BasicListsSlide from './slides/BasicListsSlide';
import AdvancedListsSlide from './slides/AdvancedListsSlide';
import BasicTablesSlide from './slides/BasicTablesSlide';
import AdvancedTablesSlide from './slides/AdvancedTablesSlide';
import ResponsiveTablesListsSlide from './slides/ResponsiveTablesListsSlide';
import InteractiveListsComponentsSlide from './slides/InteractiveListsComponentsSlide';
import BestPracticesSlide from './slides/BestPracticesSlide';
// Інші слайди будуть додані пізніше

const Lecture2: React.FC = () => {
  const slides = [
    {
      title: "Вступ до таблиць та списків",
      component: <IntroSlide />
    },
    {
      title: "Основи роботи зі списками",
      component: <BasicListsSlide />
    },
    {
      title: "Розширені можливості списків",
      component: <AdvancedListsSlide />
    },
    {
      title: "Основи роботи з таблицями",
      component: <BasicTablesSlide />
    },
    {
      title: "Розширені можливості таблиць",
      component: <AdvancedTablesSlide />
    },
    {
      title: "Адаптивні таблиці",
      component: <ResponsiveTablesListsSlide />
    },
    {
      title: "Інтерактивні компоненти на основі списків",
      component: <InteractiveListsComponentsSlide />
    },
    {
      title: "Найкращі практики роботи з таблицями та списками",
      component: <BestPracticesSlide />
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

export default Lecture2;