import { useCallback, useRef } from 'react';

const useSwiperControl = () => {
  const swiperRef = useRef(null) as any;

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return { swiperRef, handlePrev, handleNext };
};

export default useSwiperControl;
