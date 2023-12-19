'use client';

import CarCard from '@/components/CarCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';

// Import Swiper styles
import 'swiper/css';

const FeaturedCars = () => {
  return (
    <div className='featured'>
      <Swiper spaceBetween={20} slidesPerView={4}>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedCars;
