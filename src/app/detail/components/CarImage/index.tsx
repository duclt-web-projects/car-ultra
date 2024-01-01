'use client';

import FancyBox from '@/components/FancyBox';
import { useSwiperControl } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './style.scss';

const CarImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { swiperRef, handlePrev, handleNext } = useSwiperControl();

  return (
    <div className='car-image'>
      <FancyBox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <button className='slide-btn slide-btn-prev' onClick={handlePrev}>
          <i className='fa-solid fa-angle-left'></i>
        </button>
        <button className='slide-btn slide-btn-next' onClick={handleNext}>
          <i className='fa-solid fa-angle-right'></i>
        </button>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className='car-image__preview'
          ref={swiperRef}
        >
          <SwiperSlide>
            <Link
              data-fancybox='gallery'
              href='https://lipsum.app/id/60/1600x1200'
            >
              <div className='overlay'>
                <Image
                  src='https://lipsum.app/id/60/1600x1200'
                  alt='image'
                  width='600'
                  height='450'
                />
              </div>
              <Image
                src='https://lipsum.app/id/60/1600x1200'
                alt='image'
                width='600'
                height='450'
                className='preview-img'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              data-fancybox='gallery'
              href='https://lipsum.app/id/61/1600x1200'
            >
              <div className='overlay'>
                <Image
                  src='https://lipsum.app/id/61/1600x1200'
                  alt='image'
                  width='600'
                  height='450'
                />
              </div>
              <Image
                src='https://lipsum.app/id/61/1600x1200'
                alt='image'
                width='600'
                height='450'
                className='preview-img'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              data-fancybox='gallery'
              href='https://lipsum.app/id/62/1600x1200'
            >
              <div className='overlay'>
                <Image
                  src='https://lipsum.app/id/62/1600x1200'
                  alt='image'
                  width='600'
                  height='450'
                />
              </div>
              <Image
                src='https://lipsum.app/id/62/1600x1200'
                alt='image'
                width='600'
                height='450'
                className='preview-img'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              data-fancybox='gallery'
              href='https://lipsum.app/id/63/1600x1200'
            >
              <div className='overlay'>
                <Image
                  src='https://lipsum.app/id/63/1600x1200'
                  alt='image'
                  width='600'
                  height='450'
                />
              </div>
              <Image
                src='https://lipsum.app/id/63/1600x1200'
                alt='image'
                width='600'
                height='450'
                className='preview-img'
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </FancyBox>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className='car-image__thumb'
      >
        <SwiperSlide>
          <Image
            alt='thumb'
            width={120}
            height={80}
            src='https://lipsum.app/id/60/1600x1200'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='thumb'
            width={120}
            height={80}
            src='https://lipsum.app/id/61/1600x1200'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='thumb'
            width={120}
            height={80}
            src='https://lipsum.app/id/62/1600x1200'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='thumb'
            width={120}
            height={80}
            src='https://lipsum.app/id/63/1600x1200'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='thumb'
            width={120}
            height={80}
            src='https://lipsum.app/id/64/1600x1200'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='thumb'
            width={120}
            height={80}
            src='https://lipsum.app/id/65/1600x1200'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarImage;
