import React from 'react';
import Slide from '@/components/UI/Slide';
import useSlideNavigation from '@/hooks/useSlideNavigation';

import GitBasicSLide from './slides/GitBasicSlide';
import GitConceptsSlide from './slides/GitConceptSlide';
import GitInstallationSlide from './slides/GitInstallationSlide';
import GitBasicCommandsSlide from './slides/GitBasicCommandsSlide';
import GitBranchingMergingSlide from './slides/GitBranchingMergingSlide';
import GitRemoteCollaborationSlide from './slides/GitRemoteCollaborationSlide';

const Lecture3: React.FC = () => {
  const slides = [
    {
      title: "Вступ до GIT",
      component: <GitBasicSLide />
    },
    {
      title: "Основні концепції Git",
      component: <GitConceptsSlide />
    },
    {
      title: "Встановлення та налаштування Git",
      component: <GitInstallationSlide />
    },
    {
      title: "Основні команди Git",
      component: <GitBasicCommandsSlide />
    },
    {
      title: "Бранчування та merge",
      component: <GitBranchingMergingSlide />
    },
    {
      title: "Remote collaboration",
      component: <GitRemoteCollaborationSlide />
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