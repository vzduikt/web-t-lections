import { useState } from 'react';

interface UseSlideNavigationReturn {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

const useSlideNavigation = (totalSlides: number): UseSlideNavigationReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
  };
};

export default useSlideNavigation;