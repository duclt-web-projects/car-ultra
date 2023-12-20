'use client';

import { IconAngleLeft, IconAngleRight } from '@/assets/icons';
import IconArrowRight from '@/assets/icons/IconArrowRight';
import News from '@/components/News';
import { useSwiperControl } from '@/hooks';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss';

const NewsList = () => {
  const { swiperRef, handlePrev, handleNext } = useSwiperControl();

  return (
    <div className='news-list'>
      <div className='news-list__title'>
        <h2 className='heading'>News</h2>
        <Link href='/' className='view-more'>
          View more <IconArrowRight />
        </Link>
      </div>
      <div className='news-list__wrapper'>
        <button className='slide-btn slide-btn-prev' onClick={handlePrev}>
          <IconAngleLeft />
        </button>
        <button className='slide-btn slide-btn-next' onClick={handleNext}>
          <IconAngleRight />
        </button>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation]}
          ref={swiperRef}
        >
          <SwiperSlide>
            <News title='Mercedes-AMG GT thế hệ thứ 2 chính thức ra mắt' />
          </SwiperSlide>
          <SwiperSlide>
            <News title='Mercedes-AMG GT' />
          </SwiperSlide>
          <SwiperSlide>
            <News title='Mercedes-AMG GT thế hệ thứ 2 chính thức ra mắt chính thức ra mắt chính thức ra mắt' />
          </SwiperSlide>
          <SwiperSlide>
            <News title='Mercedes-AMG GT thế hệ thứ 2 chính thức ra mắt' />
          </SwiperSlide>
          <SwiperSlide>
            <News title='Mercedes-AMG GT thế hệ thứ 2 chính thức ra mắt' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewsList;
