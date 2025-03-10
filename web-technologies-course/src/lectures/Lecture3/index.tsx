import React from 'react';
import Slide from '@/components/UI/Slide';
import useSlideNavigation from '@/hooks/useSlideNavigation';

import CSSIntroSlide from './slides/CSSIntroSlide';
import CSSBasicsSlide from './slides/CSSBasicsSlide';
import CSSCascadeSpecificitySlide from './slides/CSSCascadeSpecificitySlide';
import CSSTypographySlide from './slides/CSSTypographySlide';
import CSSColorsBordersSlide from './slides/CSSColorsBordersSlide';
import CSSUnitsMeasurementSystemsSlide from './slides/CSSUnitsMeasurementSystemsSlide';
import CSSPositioningSlide from './slides/CSSPositioningSlide';

const Lecture3: React.FC = () => {
  const slides = [
    {
      title: "Вступ до CSS",
      component: <CSSIntroSlide />
    },
    {
      title: "Основи роботи з CSS",
      component: <CSSBasicsSlide />
    },
    {
      title: "Каскадність, специфічність і вкладеність в CSS",
      component: <CSSCascadeSpecificitySlide />
    },
    {
      title: "Каскадність, специфічність і вкладеність в CSS",
      component: <CSSTypographySlide />
    },
    {
      title: "Кольори",
      component: <CSSColorsBordersSlide />
    },
    {
      title: "Кольори",
      component: <CSSUnitsMeasurementSystemsSlide />
    },
    {
      title: "Позиціонування",
      component: <CSSPositioningSlide />
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

export default Lecture3;