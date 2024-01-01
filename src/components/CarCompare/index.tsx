'use client';

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
            <i className='fa-solid fa-angle-left'></i>
          </button>
          <button className='slide-btn slide-btn-next' onClick={handleNext}>
            <i className='fa-solid fa-angle-right'></i>
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
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
