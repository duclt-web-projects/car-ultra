'use client';

import { IconAngleLeft, IconAngleRight } from '@/assets/icons';
import { useSwiperControl } from '@/hooks';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarCompareItem from '../CarCompareItem';
import './styles.scss';

const CarCompare = () => {
  const { swiperRef, handlePrev, handleNext } = useSwiperControl();

  return (
    <div className='car-compare'>
      <div className='car-compare__title'>
        <h2 className='heading'>Compare Cars</h2>
        <div className='slide-btn-wrapper'>
          <button className='slide-btn slide-btn-prev' onClick={handlePrev}>
            <IconAngleLeft />
          </button>
          <button className='slide-btn slide-btn-next' onClick={handleNext}>
            <IconAngleRight />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        ref={swiperRef}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <CarCompareItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarCompareItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarCompareItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarCompareItem />
        </SwiperSlide>
        <SwiperSlide>
          <CarCompareItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarCompare;
