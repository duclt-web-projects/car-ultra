'use client';

import { IconAngleLeft, IconAngleRight, IconAngleLeft, IconAngleRight } from '@/assets/icons';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';

const Banner = () => {
  const swiperRef = useRef(null) as any;

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className='banner'>
      <button className='banner__btn banner__btn-prev' onClick={handlePrev}>
        <IconAngleLeft />
      </button>
      <button className='banner__btn banner__btn-next' onClick={handleNext}>
        <IconAngleRight />
      </button>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src='/images/banner/banner-5.jpg'
            alt='banner-1'
            width={1000}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/banner/banner-2.jpg'
            alt='banner-1'
            width={1000}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/banner/banner-3.jpg'
            alt='banner-1'
            width={1000}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/banner/banner-4.jpg'
            alt='banner-1'
            width={1000}
            height={1000}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
