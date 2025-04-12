import React from 'react';
import Slide from '@/components/UI/Slide';
import useSlideNavigation from '@/hooks/useSlideNavigation';

import FlexboxIntroSlide from '@lectures/Lecture5/slides/FlexBoxBasic';
import FlexboxBasicsSlide from './slides/FlexboxBasicsSlide';
import FlexboxPropertiesSlide from './slides/FlexboxPropertiesSlide';
import FlexboxItemsSlide from './slides/FlexboxItemsSlide';
import FlexboxExamplesSlide from './slides/FlexboxExamplesSlide';
import FlexboxCheatsheetSlide from './slides/FlexboxCheatsheetSlide';

const Lecture5: React.FC = () => {
  const slides = [
    {
      title: 'Вступ до CSS',
      component: <FlexboxIntroSlide />,
    },
    {
      title: 'Основні поняття CSS Flexbox',
      component: <FlexboxBasicsSlide />,
    },
    {
      title: 'Властивості Flex-контейнера',
      component: <FlexboxPropertiesSlide />,
    },
    {
      title: 'Властивості Flex-елементів',
      component: <FlexboxItemsSlide />,
    },
    {
      title: 'Практичні приклади використання Flexbox',
      component: <FlexboxExamplesSlide />,
    },
    {
      title: 'Візуальний конспект',
      component: <FlexboxCheatsheetSlide />,
    },
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

export default Lecture5;
